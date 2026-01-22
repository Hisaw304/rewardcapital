// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  FiBell,
  FiSettings,
  FiSend,
  FiDownload,
  FiCreditCard,
  FiUser,
  FiLink,
  FiHome,
  FiRepeat,
} from "react-icons/fi";
import { BsQrCodeScan } from "react-icons/bs";
import { getWalletByPublicId } from "../data/wallets";
import { useNavigate } from "react-router-dom";
import WelcomeModal from "../components/WelcomeModal";
const COINS = [
  "bitcoin",
  "ethereum",
  "tether",
  "solana",
  "ripple",
  "avalanche-2",
  "tron",
  "polygon",
  "polkadot",
  "litecoin",
];
const COIN_ICONS = {
  bitcoin: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  ethereum: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  tether: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png",
  solana: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  ripple:
    "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
  "avalanche-2":
    "https://assets.coingecko.com/coins/images/12559/large/avax.png",
  tron: "https://assets.coingecko.com/coins/images/1094/large/TRON.png",
  polygon:
    "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
  polkadot:
    "https://assets.coingecko.com/coins/images/12171/large/polkadot.png",
  litecoin: "https://assets.coingecko.com/coins/images/2/large/litecoin.png",
};

const COIN_SYMBOLS = {
  bitcoin: "BTC",
  ethereum: "ETH",
  tether: "USDT",
  solana: "SOL",
  ripple: "XRP",
  "avalanche-2": "AVAX",
  tron: "TRX",
  polygon: "MATIC",
  polkadot: "DOT",
  litecoin: "LTC",
};

const Dashboard = () => {
  const [publicId, setPublicId] = useState("");
  const [wallet, setWallet] = useState(null);
  const [prices, setPrices] = useState({});
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkWelcome = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) return setLoading(false);

        // Fetch user's welcome_shown from DB
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("welcome_shown")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error.message);
          return setLoading(false);
        }

        // Per-user localStorage key
        const localSeenKey = `welcome_shown_${user.id}`;
        const localSeen = localStorage.getItem(localSeenKey) === "true";
        const dbSeen = profile?.welcome_shown === true;

        // Show modal only if neither DB nor localStorage says it was shown
        if (!dbSeen && !localSeen) {
          setShowWelcome(true);

          // Immediately mark in localStorage to prevent flashing
          localStorage.setItem(localSeenKey, "true");

          // Update DB in background
          const { error: updateError } = await supabase
            .from("profiles")
            .update({ welcome_shown: true })
            .eq("id", user.id);

          if (updateError)
            console.error("Error updating welcome_shown:", updateError.message);
        }

        setLoading(false);
      } catch (err) {
        console.error("Unexpected error checking welcome:", err);
        setLoading(false);
      }
    };

    checkWelcome();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  // 🔐 Load logged-in user + wallet
  useEffect(() => {
    const loadUserWallet = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("public_id")
        .eq("id", user.id)
        .single();

      setPublicId(data.public_id);
      setWallet(getWalletByPublicId(data.public_id));
    };

    loadUserWallet();
  }, []);

  // 💰 Fetch live prices
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${COINS.join(
          ","
        )}&vs_currencies=usd&include_24hr_change=true`
      );
      const data = await res.json();
      setPrices(data);
    };

    fetchPrices();
  }, []);

  return (
    <section className="dashboard mb-10">
      <WelcomeModal open={showWelcome} onClose={() => setShowWelcome(false)} />
      {/* NAV */}
      <header className="dashboard-nav">
        <h2>Dashboard</h2>

        <div className="nav-actions-wrapper">
          <div className="nav-actions-left">
            <a href="/notifications">
              <FiBell /> Notifications
            </a>
            <a href="/settings">
              <FiSettings /> Settings
            </a>
          </div>

          <button className="logout-btn" onClick={handleSignOut}>
            Log Out
          </button>
        </div>
      </header>

      {/* WALLET CARD */}
      <div className="wallet-card">
        <div className="wallet-header">
          <span>Home</span>
          <span className="wallet-id">
            WALLET ID <strong>{publicId}</strong>
          </span>
        </div>

        <div className="wallet-balance">
          <div>
            <span className="label">Current Balance</span>
            <h3>${wallet?.total_balance.toLocaleString() || "0.00"}</h3>
          </div>
          <BsQrCodeScan className="qr-icon" />
        </div>

        <div className="wallet-stats">
          <div>
            <span>In</span>
            <strong>${wallet?.in.toFixed(2) || "0.00"}</strong>
          </div>
          <div>
            <span>Out</span>
            <strong>${wallet?.out.toFixed(2) || "0.00"}</strong>
          </div>
        </div>
        <div className="wallet-actions">
          <Action icon={<FiSend />} label="Send" href="/send" />
          <Action icon={<FiDownload />} label="Receive" href="/receive" />
          <Action icon={<FiCreditCard />} label="Buy" href="/buy" />
          <Action icon={<FiUser />} label="KYC" href="/kyc" />
          <Action icon={<FiLink />} label="Wallet Connect" href="/wallet" />
        </div>
      </div>

      {/* HOLDINGS */}
      <div className="holdings">
        <h3>Holdings</h3>

        {COINS.map((coin) => {
          const data = prices[coin];
          if (!data) return null;

          const symbol = COIN_SYMBOLS[coin];
          const amount = wallet?.holdings?.[symbol] || 0;
          const usdValue = amount * data.usd;

          return (
            <div
              key={coin}
              className="coin-row"
              onClick={() => navigate(`/dashboard/coin/${coin}`)}
              style={{ cursor: "pointer" }} // shows pointer
            >
              <div className="coin-left">
                <img
                  src={COIN_ICONS[coin]}
                  alt={symbol}
                  className="coin-icon"
                />
                <strong>{symbol}</strong>
                <span className="main-price">${data.usd.toLocaleString()}</span>
              </div>

              <div className="coin-right">
                <strong>${usdValue.toLocaleString()}</strong>
                <span
                  className={`price-change ${
                    data.usd_24h_change > 0
                      ? "price-up"
                      : data.usd_24h_change < 0
                      ? "price-down"
                      : ""
                  }`}
                >
                  {data.usd_24h_change > 0 && "+"}
                  {data.usd_24h_change.toFixed(2)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        <FooterItem icon={<FiHome />} label="Home" href="/dashboard" />
        <FooterItem icon={<FiRepeat />} label="Swap" href="/swap" />
        <FooterItem icon={<FiCreditCard />} label="Buy" href="/buy" />
        <FooterItem icon={<FiSettings />} label="Settings" href="/settings" />
      </footer>
    </section>
  );
};

const Action = ({ icon, label, href }) => (
  <a href={href} className="action-item">
    {icon}
    <span>{label}</span>
  </a>
);

const FooterItem = ({ icon, label, href }) => (
  <a href={href} className="footer-item">
    {icon}
    <span>{label}</span>
  </a>
);

export default Dashboard;
