// src/pages/Send.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { getWalletByPublicId } from "../data/wallets";

import {
  FiArrowLeft,
  FiBell,
  FiRepeat,
  FiHome,
  FiCreditCard,
  FiSettings,
  FiCopy,
  FiCheckCircle,
} from "react-icons/fi";

/* ---------------- COINS ---------------- */
const COINS = [
  {
    symbol: "BTC",
    name: "Bitcoin",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
  },
  {
    symbol: "USDT",
    name: "Tether",
  },
  {
    symbol: "SOL",
    name: "Solana",
  },
  {
    symbol: "XRP",
    name: "Ripple",
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
  },
  {
    symbol: "TRX",
    name: "Tron",
  },
  {
    symbol: "MATIC",
    name: "Polygon",
  },
  {
    symbol: "DOT",
    name: "Polkadot",
  },
  {
    symbol: "LTC",
    name: "Litecoin",
  },
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

/* ---------------- COMPONENT ---------------- */

const Send = () => {
  const navigate = useNavigate();

  const [wallet, setWallet] = useState(null);
  const [coin, setCoin] = useState("BTC");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const selectedCoin = COINS.find((c) => c.symbol === coin);
  const NETWORK_FEE = 0.0002; // demo fee
  const DEMO_PIN = "1234";

  /* 🔐 Load wallet */
  useEffect(() => {
    const loadWallet = async () => {
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

    loadWallet();
  }, []);

  if (!wallet) return null;

  const balance = wallet.holdings[coin] || 0;
  const totalDeducted = amount ? Number(amount) + NETWORK_FEE : 0;

  /* ---------------- ACTIONS ---------------- */

  const useMax = () => {
    if (balance <= NETWORK_FEE) return;
    setAmount((balance - NETWORK_FEE).toFixed(6));
  };

  const handleSend = () => {
    setError("");

    if (!address || address.length < 10) {
      setError("Invalid recipient address");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Enter a valid amount");
      return;
    }

    if (totalDeducted > balance) {
      setError("Insufficient balance");
      return;
    }

    if (pin !== DEMO_PIN) {
      setError("Invalid transaction PIN");
      return;
    }

    setWallet((prev) => ({
      ...prev,
      out: prev.out + Number(amount),
      holdings: {
        ...prev.holdings,
        [coin]: prev.holdings[coin] - totalDeducted,
      },
    }));

    setSuccess(true);
    setAmount("");
    setAddress("");
    setPin("");
  };

  /* ---------------- JSX ---------------- */

  return (
    <section className="send-page">
      {/* NAV */}
      <header className="coin-nav">
        <div className="nav-left" onClick={() => navigate(-1)}>
          <FiArrowLeft />
          <span>Back</span>
        </div>
        <div className="nav-right">
          <FiBell />
        </div>
      </header>

      <h1 className="page-title">Send Crypto</h1>

      {/* HOW IT WORKS */}
      <div className="how-it-works">
        <p>1. Select asset</p>
        <p>2. Enter recipient address</p>
        <p>3. Enter amount</p>
        <p>4. Confirm & send</p>
      </div>

      {error && <div className="error">{error}</div>}
      {success && (
        <div className="success">
          <FiCheckCircle /> ✅ Transaction submitted successfully.
          <br />
          ⚠️ Complete your KYC to unlock full withdrawals or coin will be
          reversed.
        </div>
      )}

      {/* FROM */}
      <div className="send-card">
        <label>From</label>
        <div className="coin-select">
          <img
            src={COIN_ICONS[selectedCoin.name.toLowerCase()]}
            alt={selectedCoin.symbol}
          />

          <select value={coin} onChange={(e) => setCoin(e.target.value)}>
            {COINS.map((c) => (
              <option key={c.symbol} value={c.symbol}>
                {c.symbol} — {c.name} ({wallet.holdings[c.symbol] || 0})
              </option>
            ))}
          </select>
        </div>

        <span className="balance">
          Balance: {balance.toFixed(6)} {coin}
        </span>
      </div>

      {/* ADDRESS */}
      <div className="send-card">
        <label>Recipient Address</label>
        <div className="address-box">
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Paste wallet address"
          />
          <FiCopy />
        </div>
        <small className="warning">
          ⚠ Sending to the wrong address will result in permanent loss
        </small>
      </div>

      {/* AMOUNT */}
      <div className="send-card">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`0.00 ${coin}`}
        />
        <button className="use-max-btn" onClick={useMax}>
          Use Max
        </button>
      </div>

      {/* SUMMARY */}
      <div className="send-summary">
        <div>
          <span>Network fee</span>
          <span>
            {NETWORK_FEE} {coin}
          </span>
        </div>
        <div>
          <span>Total deducted</span>
          <span>
            {amount ? totalDeducted.toFixed(6) : "0.000000"} {coin}
          </span>
        </div>
      </div>

      {/* PIN */}
      <div className="send-card">
        <label>Transaction PIN</label>
        <input
          type="password"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="****"
        />
      </div>
      <button className="send-btn" onClick={handleSend}>
        Confirm & Send
      </button>

      {/* MESSAGE BELOW BUTTON */}
      {success && (
        <div className="send-message">
          ✅ Transaction submitted successfully.
          <br />
          ⚠️ Complete your KYC to unlock full withdrawals or coin will be
          reversed.
        </div>
      )}

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

/* ---------------- FOOTER ITEM ---------------- */

const FooterItem = ({ icon, label, href }) => (
  <a href={href} className="footer-item">
    {icon}
    <span>{label}</span>
  </a>
);
export default Send;
