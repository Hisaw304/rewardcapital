import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { getWalletByPublicId } from "../data/wallets";
import {
  FiBell,
  FiSend,
  FiDownload,
  FiCreditCard,
  FiRepeat,
  FiArrowLeft,
  FiHome,
  FiSettings,
} from "react-icons/fi";

/* ---------------- COIN MAPS ---------------- */

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

/* ---------------- COMPONENT ---------------- */

const CoinView = () => {
  const { coin: coinId } = useParams();
  const navigate = useNavigate();

  const [wallet, setWallet] = useState(null);
  const [price, setPrice] = useState(0);

  /* ----------- GUARD ----------- */
  if (!coinId || !COIN_SYMBOLS[coinId]) {
    return <div className="error">Unsupported coin</div>;
  }

  const symbol = COIN_SYMBOLS[coinId];
  const coinName = coinId.charAt(0).toUpperCase() + coinId.slice(1);
  const icon = COIN_ICONS[coinId];

  /* ----------- LOAD WALLET ----------- */
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

      setWallet(getWalletByPublicId(data.public_id));
    };

    loadUserWallet();
  }, []);

  /* ----------- FETCH PRICE ----------- */
  useEffect(() => {
    const fetchPrice = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`
      );
      const data = await res.json();
      setPrice(data?.[coinId]?.usd || 0);
    };

    fetchPrice();
  }, [coinId]);

  const amount = wallet?.holdings?.[symbol] || 0;
  const totalValue = amount * price;

  return (
    <section className="coin-view">
      {/* NAV */}
      <header className="coin-nav">
        <div className="nav-left" onClick={() => navigate(-1)}>
          <FiArrowLeft />
          <span>Back</span>
        </div>

        <div className="nav-right">
          <FiBell />
          {/* Removed FiSettings */}
        </div>
      </header>

      {/* HEADER */}
      <div className="coin-header">
        <img src={icon} alt={symbol} />
        <h2>
          {coinName} ({symbol})
        </h2>
      </div>

      {/* BALANCE */}
      <div className="coin-balance">
        <span>
          {amount} {symbol}
        </span>
        <h3>${totalValue.toLocaleString()}</h3>
      </div>

      {/* ACTIONS */}
      <div className="coin-actions">
        <Action icon={<FiSend />} label="Send" href="/send" />
        <Action icon={<FiDownload />} label="Receive" href="/receive" />
        <Action icon={<FiCreditCard />} label="Buy" href="/buy" />
        <Action icon={<FiRepeat />} label="Swap" href="/swap" />
      </div>

      {/* TRANSACTIONS */}
      <div className="coin-transactions">
        <h4>Transactions</h4>
        <div className="tx-empty">- No Transactions Found -</div>
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

/* ---------------- SUB COMPONENTS ---------------- */

const Action = ({ icon, label, href }) => (
  <Link to={href} className="coin-action">
    {icon}
    <span>{label}</span>
  </Link>
);

const FooterItem = ({ icon, label, href }) => (
  <a href={href} className="footer-item">
    {icon}
    <span>{label}</span>
  </a>
);

export default CoinView;
