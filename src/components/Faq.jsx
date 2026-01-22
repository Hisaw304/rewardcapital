import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const EMAIL = "[email protected]";
const TELEGRAM_LINK = "https://t.me/rewardcapital";

const faqData = [
  {
    question: "What is Reward Capital?",
    answer:
      "Reward Capital is a next-generation crypto platform designed to provide secure, scalable, and user-friendly access to digital assets and decentralized finance.",
  },
  {
    question: "Is Reward Capital safe to use?",
    answer:
      "Yes. Reward Capital follows industry best practices including audited smart contracts, encryption standards, and multi-layer security systems to protect users and their assets.",
  },
  {
    question: "How do I create a wallet?",
    answer:
      "You can create a wallet in just a few minutes by signing up on the platform and completing the guided setup process. No prior crypto experience is required.",
  },
  {
    question: "Do I have full control over my funds?",
    answer:
      "Yes. Reward Capital is built with user ownership in mind. You retain full control over your assets and private keys at all times.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. All fees are transparent and clearly displayed before you complete any transaction. There are no hidden or unexpected charges.",
  },
  {
    question: "Which blockchain networks are supported?",
    answer:
      "Reward Capital supports multiple blockchain ecosystems and continues to expand its network integrations to provide broader access and flexibility.",
  },
  {
    question: "Can I access Reward Capital on mobile devices?",
    answer:
      "Yes. Reward Capital is fully responsive and optimized for both desktop and mobile devices, allowing you to manage your assets anywhere.",
  },
  {
    question: "How do I earn rewards or staking benefits?",
    answer:
      "Users can earn rewards through staking programs and platform incentives. Details on reward structures are available within your dashboard.",
  },
  {
    question: "Is KYC required to use Reward Capital?",
    answer:
      "Some features may require identity verification depending on regulatory requirements. Basic wallet functionality is available without mandatory KYC.",
  },
  {
    question: "How can I contact support if I need help?",
    answer:
      "You can reach our support team anytime via email or through our official Telegram channel. We’re always ready to assist you.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container max-w-7xl mx-auto">
        {/* TOP HEADING */}
        <div className="faq-header">
          <h2 className="faq-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about Reward Capital
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="faq-wrapper">
          {/* LEFT: FAQ LIST */}
          <div className="faq-left">
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggle(index)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                  </button>

                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SUPPORT CARD */}
          <aside className="faq-support" aria-label="Need more help">
            <div className="support-card">
              <div className="support-icon">
                <FaTelegramPlane size={42} />
              </div>

              <h3 className="support-title">Have more questions?</h3>

              <p className="support-text">
                Our team is always ready to help you with onboarding, technical
                questions, or partnerships.
              </p>

              <div className="support-ctas">
                <a className="btn-email" href={`mailto:${EMAIL}`}>
                  <FiMail /> {EMAIL}
                </a>

                <a
                  className="btn-telegram"
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane /> Message on Telegram
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Faq;
