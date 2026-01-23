// src/data/wallets.js

export const wallets = [
  {
    public_id: "RC-ZXL789",
    total_balance: 5082500,
    in: 5082500,
    out: 0,
    holdings: {
      BTC: 53.6671,
      ETH: 29.2302,
      USDT: 0,
      SOL: 0,
      XRP: 0,
      AVAX: 0,
      TRX: 0,
      MATIC: 0,
      DOT: 0,
      LTC: 0,
    },
  },
  {
    public_id: "RC-WQMNXX",
    total_balance: 8581.176,
    in: 8581.176,
    out: 0,
    holdings: {
      BTC: 0.016,
      ETH: 0.7256,
      USDT: 5000,
      SOL: 0,
      XRP: 0,
      AVAX: 0,
      TRX: 0,
      MATIC: 0,
      DOT: 0,
      LTC: 0,
    },
  },
  {
    public_id: "RC-LL7ABL",
    total_balance: 10581.176,
    in: 10581.176,
    out: 0,
    holdings: {
      BTC: 0.016,
      ETH: 0.7256,
      USDT: 7000,
      SOL: 0,
      XRP: 0,
      AVAX: 0,
      TRX: 0,
      MATIC: 0,
      DOT: 0,
      LTC: 0,
    },
  },
  {
    public_id: "11290433",
    total_balance: 250000,
    in: 0,
    out: 0,
    holdings: {
      BTC: 1.25,
      ETH: 4.8,
      USDT: 0,
      SOL: 2,
      XRP: 0,
      AVAX: 0,
      TRX: 0,
      MATIC: 0,
      DOT: 0,
      LTC: 0,
    },
  },
];

// DEFAULT WALLET (if public_id not found)
export const defaultWallet = {
  total_balance: 0,
  in: 0,
  out: 0,
  holdings: {
    BTC: 0,
    ETH: 0,
    USDT: 0,
    SOL: 0,
    XRP: 0,
    AVAX: 0,
    TRX: 0,
    MATIC: 0,
    DOT: 0,
    LTC: 0,
  },
};

// HELPER
export const getWalletByPublicId = (publicId) => {
  const wallet = wallets.find((w) => w.public_id === publicId);
  return wallet || defaultWallet;
};
