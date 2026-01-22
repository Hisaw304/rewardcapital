import { useState } from "react";
import { useNavigate } from "react-router-dom"; // added
import {
  FiArrowLeft,
  FiBell,
  FiHome,
  FiRepeat,
  FiCreditCard,
  FiSettings,
} from "react-icons/fi"; // added

import WalletModal from "../components/WalletModal";
import { WALLET_LIST } from "../data/walletList";

export default function Wallets() {
  const [activeWallet, setActiveWallet] = useState(null);
  const navigate = useNavigate(); // added

  return (
    <>
      <div className="wallets-page">
        <header className="coin-nav">
          <div className="nav-left" onClick={() => navigate(-1)}>
            <FiArrowLeft />
            <span>Back</span>
          </div>
          <div className="nav-right">
            <FiBell />
          </div>
        </header>
        <div className="px-5">
          <div className="wallets-header">
            <h1>Wallets</h1>
            <p>
              Multiple iOS and Android wallets support the protocol. Simply scan
              a QR code from your desktop computer screen to start securely
              using a dApp with your mobile wallet. Interaction between mobile
              apps and mobile browsers are supported via mobile deep linking.
            </p>
          </div>

          <div className="wallets-grid">
            {WALLET_LIST.map((wallet, index) => (
              <div
                key={index}
                className="wallet-item"
                onClick={() => setActiveWallet(wallet)}
              >
                <div className="wallet-icon">
                  <img src={wallet.icon} alt={wallet.name} />
                </div>
                <span>{wallet.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="dashboard-footer">
          <FooterItem icon={<FiHome />} label="Home" href="/dashboard" />
          <FooterItem icon={<FiRepeat />} label="Swap" href="/swap" />
          <FooterItem icon={<FiCreditCard />} label="Buy" href="/buy" />
          <FooterItem icon={<FiSettings />} label="Settings" href="/settings" />
        </footer>
      </div>

      {activeWallet && (
        <WalletModal
          wallet={activeWallet}
          onClose={() => setActiveWallet(null)}
        />
      )}
    </>
  );
}

/* ---------------- FOOTER ITEM ---------------- */
const FooterItem = ({ icon, label, href }) => (
  <a href={href} className="footer-item">
    {icon}
    <span>{label}</span>
  </a>
);
