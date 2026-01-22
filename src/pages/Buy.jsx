import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBell,
  FiHome,
  FiRepeat,
  FiCreditCard,
  FiSettings,
} from "react-icons/fi";

const BUY_PROVIDERS = [
  { name: "Moon Pay", link: "https://moonpay.com/buy", videoId: "3OyabwnS4Pg" },
  {
    name: "Binance",
    link: "https://accounts.binance.com/en/register",
    videoId: "TudHqECFE5Q",
  },
  {
    name: "Trust Wallet",
    link: "https://trustwallet.com/buy-crypto",
    videoId: "ligSpdP9Gdc",
  },
  { name: "Coin Mama", link: "https://coinmama.com", videoId: "BJfgsOTOzp4" },
  {
    name: "Local Bitcoins",
    link: "https://localbitcoins.com",
    videoId: "oto0vXTE8_4",
  },
];

const Buy = () => {
  const navigate = useNavigate();

  return (
    <section className="buy-page">
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

      <h2 className="page-title">Buy Cryptocurrency</h2>

      {/* PROVIDERS */}
      <div className="buy-list mx-w-7xl mx-auto">
        {BUY_PROVIDERS.map((provider) => (
          <div className="buy-card" key={provider.name}>
            <h5>{provider.name}</h5>

            <div className="video-wrapper">
              <a
                href={`https://www.youtube.com/watch?v=${provider.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="video-link"
              >
                <img
                  src={`https://img.youtube.com/vi/${provider.videoId}/hqdefault.jpg`}
                  alt={provider.name}
                />
                <span className="play-button">▶</span>
              </a>
            </div>

            <a
              href={provider.link}
              target="_blank"
              rel="noreferrer"
              className="buy-btn"
            >
              Buy on {provider.name}
            </a>
          </div>
        ))}
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

export default Buy;
