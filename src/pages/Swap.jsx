import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { getWalletByPublicId } from "../data/wallets";
import {
  FiArrowLeft,
  FiBell,
  FiPlus,
  FiRepeat,
  FiHome,
  FiCreditCard,
  FiSettings,
  FiX,
} from "react-icons/fi";

/* ---------------- COINS ---------------- */
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
const COINS = {
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

const Swap = () => {
  const navigate = useNavigate();

  const [wallet, setWallet] = useState(null);
  const [fromCoin, setFromCoin] = useState("");
  const [toCoin, setToCoin] = useState("");
  const [amount, setAmount] = useState("");
  const [prices, setPrices] = useState({});
  const [pin, setPin] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectType, setSelectType] = useState(""); // "from" | "to"
  const [error, setError] = useState("");
  const fromCoinSymbol = COINS[fromCoin];
  const fromCoinAmount = wallet?.holdings?.[fromCoinSymbol] || 0;
  const fromCoinUSD = (fromCoinAmount * (prices[fromCoin]?.usd || 0)).toFixed(
    2
  );

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

  /* 💱 Fetch prices */
  useEffect(() => {
    const fetchPrices = async () => {
      const ids = Object.keys(COINS).join(",");
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
      );
      const data = await res.json();
      setPrices(data);
    };

    fetchPrices();
  }, []);

  const fromPrice = prices[fromCoin]?.usd || 0;
  const toPrice = prices[toCoin]?.usd || 0;

  const converted =
    amount && fromPrice && toPrice
      ? ((amount * fromPrice) / toPrice).toFixed(6)
      : "0";

  /* ---------------- ACTIONS ---------------- */

  const openModal = (type) => {
    setSelectType(type);
    setShowModal(true);
  };

  const selectCoin = (coin) => {
    if (coin === fromCoin || coin === toCoin) {
      setError("You cannot swap the same asset.");
      return;
    }

    if (selectType === "from") setFromCoin(coin);
    if (selectType === "to") setToCoin(coin);

    setSelectedCoin(coin); // highlight row
    setError("");
    setShowModal(false);
  };

  const executeSwap = () => {
    if (pin !== "1234") {
      setError("Invalid transaction PIN");
      return;
    }

    if (!wallet || wallet.total_balance <= 0) return;

    const fromSymbol = COINS[fromCoin];
    const toSymbol = COINS[toCoin];
    const fromAmount = parseFloat(amount);
    const convertedAmount = parseFloat(converted);

    if (fromAmount > (wallet.holdings[fromSymbol] || 0)) {
      setError(`Insufficient ${fromSymbol} balance`);
      return;
    }

    // clone wallet
    const newWallet = { ...wallet, holdings: { ...wallet.holdings } };

    // Deduct fromCoin
    newWallet.holdings[fromSymbol] -= fromAmount;

    // Add toCoin
    newWallet.holdings[toSymbol] =
      (newWallet.holdings[toSymbol] || 0) + convertedAmount;

    // Optional: recalc total_balance in USD
    let totalUSD = 0;
    Object.keys(newWallet.holdings).forEach((symbol) => {
      const price = Object.keys(COINS).find((k) => COINS[k] === symbol);
      totalUSD += (newWallet.holdings[symbol] || 0) * (prices[price]?.usd || 0);
    });
    newWallet.total_balance = totalUSD;

    setWallet(newWallet);
    setAmount("");
    setPin("");
    setError("");
    alert("Swap successful 🎉");
  };

  const canSwap =
    wallet &&
    fromCoin &&
    toCoin &&
    fromCoin !== toCoin &&
    amount > 0 &&
    pin.length === 4;

  /* ---------------- JSX ---------------- */

  return (
    <section className="swap-page ">
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

      <h2 className="page-title">Swap</h2>

      {error && <div className="error">{error}</div>}

      {/* FROM */}
      {/* FROM */}
      <div className="swap-card">
        <label>Convert From</label>
        <input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="asset-select" onClick={() => openModal("from")}>
          {fromCoin ? COINS[fromCoin] : "Select asset"}
          <FiPlus />
        </button>

        {fromCoin && (
          <div className="balance-line">
            <span className="balance">
              Balance: {fromCoinAmount} {fromCoinSymbol} ≈ ${fromCoinUSD}
            </span>

            {/* <<< PUT THE BUTTON HERE >>> */}
            <button
              className="use-max-btn"
              onClick={() => setAmount(fromCoinAmount)}
            >
              Use Max
            </button>
          </div>
        )}
      </div>

      {/* TO */}
      <div className="swap-card">
        <label>Convert To</label>
        <input readOnly value={converted} />

        <button className="asset-select" onClick={() => openModal("to")}>
          {toCoin ? COINS[toCoin] : "Select asset"}
          <FiPlus />
        </button>
      </div>

      {/* PIN */}
      <div className="swap-card">
        <label>Transaction PIN</label>
        <input
          type="password"
          maxLength={4}
          placeholder="****"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>

      <button className="swap-btn" disabled={!canSwap} onClick={executeSwap}>
        Convert
      </button>

      {/* ASSET MODAL */}
      {/* ASSET MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="asset-modal">
            <div className="modal-header">
              <h3>Select Asset</h3>
              <FiX
                onClick={() => setShowModal(false)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="asset-list">
              {Object.keys(COINS).map((coin) => {
                const coinSymbol = COINS[coin];
                const price = prices[coin]?.usd || 0;
                const userAmount = wallet?.holdings?.[coinSymbol] || 0;
                const usdValue = (userAmount * price).toLocaleString(
                  undefined,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                );

                const isSelected =
                  (selectType === "from" && fromCoin === coin) ||
                  (selectType === "to" && toCoin === coin);

                return (
                  <div
                    key={coin}
                    className={`asset-row ${isSelected ? "selected" : ""}`}
                    onClick={() => selectCoin(coin)}
                  >
                    <div className="asset-left">
                      <img
                        src={COIN_ICONS[coin]}
                        alt={coinSymbol}
                        className="asset-icon"
                      />
                      <div className="asset-info">
                        <div>{coinSymbol}</div>
                        <small>
                          {userAmount} {coinSymbol} ≈ ${usdValue}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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

export default Swap;
