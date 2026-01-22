// src/components/WelcomeModal.jsx
import React from "react";
import { FiX } from "react-icons/fi";

const WelcomeModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="welcome-modal">
        <div className="modal-header">
          <h2>🎉 Welcome to Your Dashboard!</h2>
          <button onClick={onClose}>
            <FiX />
          </button>
        </div>
        <p className="modal-body">
          We’re excited to have you on board. Start exploring your wallet,
          sending and receiving crypto, and checking your balances.
        </p>
        <button className="confirm-btn" onClick={onClose}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
