// src/components/CryptoTicker.jsx
import React, { useEffect, useState } from "react";

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

const SYMBOLS = {
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

const CryptoTicker = () => {
  const [prices, setPrices] = useState({});

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
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-ticker">
      <div className="ticker-track">
        {[...COINS, ...COINS].map((coin, index) => {
          const data = prices[coin];
          if (!data) return null;

          return (
            <div key={coin + index} className="ticker-item">
              <span className="symbol">{SYMBOLS[coin]}</span>
              <span className="price">${data.usd.toLocaleString()}</span>
              <span
                className={`change ${data.usd_24h_change > 0 ? "up" : "down"}`}
              >
                {data.usd_24h_change > 0 && "+"}
                {data.usd_24h_change.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoTicker;
