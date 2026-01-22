import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBell,
  FiCopy,
  FiCheckCircle,
  FiHome,
  FiRepeat,
  FiCreditCard,
  FiSettings,
} from "react-icons/fi";

const COINS = [
  {
    id: "BTC",
    name: "Bitcoin",
    icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  {
    id: "ETH",
    name: "Ethereum",
    icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    id: "USDT",
    name: "Tether",
    icon: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png",
  },
  {
    id: "SOL",
    name: "Solana",
    icon: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  },
  {
    id: "XRP",
    name: "Ripple",
    icon: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
  },
  {
    id: "AVAX",
    name: "Avalanche",
    icon: "https://assets.coingecko.com/coins/images/12559/large/avax.png",
  },
  {
    id: "TRX",
    name: "Tron",
    icon: "https://assets.coingecko.com/coins/images/1094/large/TRON.png",
  },
  {
    id: "MATIC",
    name: "Polygon",
    icon: "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
  },
  {
    id: "DOT",
    name: "Polkadot",
    icon: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png",
  },
  {
    id: "LTC",
    name: "Litecoin",
    icon: "https://assets.coingecko.com/coins/images/2/large/litecoin.png",
  },
];

const ADDRESSES = {
  BTC: import.meta.env.VITE_ADDR_BTC,
  ETH: import.meta.env.VITE_ADDR_ETH,
  USDT: import.meta.env.VITE_ADDR_USDT,
  SOL: import.meta.env.VITE_ADDR_SOL,
  XRP: import.meta.env.VITE_ADDR_XRP,
  AVAX: import.meta.env.VITE_ADDR_AVAX,
  TRX: import.meta.env.VITE_ADDR_TRX,
  MATIC: import.meta.env.VITE_ADDR_MATIC,
  DOT: import.meta.env.VITE_ADDR_DOT,
  LTC: import.meta.env.VITE_ADDR_LTC,
};

const Receive = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [amount, setAmount] = useState("");

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESSES[selected.id]);
    alert("Address copied");
  };

  const confirmSuccess = () => {
    alert("✅ Deposit request submitted successfully");
  };

  return (
    <section className="receive-page">
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

      <h1 className="page-title">Receive Crypto</h1>

      {/* SELECT COIN */}
      <div className="receive-select">
        {COINS.map((coin) => (
          <div
            key={coin.id}
            className={`receive-coin ${
              selected?.id === coin.id ? "active" : ""
            }`}
            onClick={() => setSelected(coin)}
          >
            <img src={coin.icon} alt={coin.id} />
            <span>{coin.id}</span>
          </div>
        ))}
      </div>

      {/* DETAILS */}
      {selected && (
        <div className="receive-card">
          <h3>{selected.name}</h3>

          <div className="address-box">
            <input value={ADDRESSES[selected.id]} readOnly />
            <button onClick={copyAddress}>
              <FiCopy />
            </button>
          </div>

          <input
            type="number"
            placeholder="Amount (optional)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <p className="warning">
            ⚠ Please deposit only <strong>{selected.name}</strong> to this
            address. Sending any other coin may result in permanent loss.
          </p>

          <p className="note">
            Please reconfirm wallet address before sending to this wallet.
          </p>

          <button className="confirm-btn" onClick={confirmSuccess}>
            <FiCheckCircle /> Confirm
          </button>
        </div>
      )}
      <div className="how-it-works">
        <h2>How it works</h2>

        <ul>
          <li>
            <strong>Select a coin</strong> you want to receive from the list
            above.
          </li>
          <li>
            <strong>Copy the wallet address</strong> generated for that coin.
          </li>
          <li>
            <strong>Send funds</strong> from another wallet or exchange to this
            address.
          </li>
          <li>
            <strong>Confirm the transaction</strong> and wait for network
            confirmation.
          </li>
        </ul>

        <p className="how-note">
          Deposits may take a few minutes depending on the blockchain network.
        </p>
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

const FooterItem = ({ icon, label, href }) => (
  <a href={href} className="footer-item">
    {icon}
    <span>{label}</span>
  </a>
);

export default Receive;
