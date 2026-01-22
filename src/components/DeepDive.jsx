// src/components/DeepDive.jsx
import React from "react";
import { FiSend, FiBarChart2, FiActivity, FiShield } from "react-icons/fi";

const features = [
  {
    icon: <FiSend />,
    title: "Send & Receive Crypto",
    desc: "Send and receive cryptocurrency effortlessly with a secure and intuitive interface. Manage personal or business transactions with confidence and speed.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Reports & Analytics",
    desc: "Gain deep insights into your financial activity with advanced reporting and analytics tools designed to support smarter decision-making.",
  },
  {
    icon: <FiActivity />,
    title: "Real-Time Interest",
    desc: "Track interest accumulation instantly with live updates that give you complete visibility and control over your digital assets.",
  },
  {
    icon: <FiShield />,
    title: "Enterprise-Grade Security",
    desc: "Built with multi-layer security, encryption, and industry best practices to protect your assets, data, and transactions at all times.",
  },
];

const DeepDive = () => {
  return (
    <section className="deep-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <header className="deep-header">
          <h2 className="deep-title">
            A deep dive into the future of crypto blockchain
          </h2>
          <p className="deep-subtitle">
            Manage your crypto, NFTs, and more while staying in complete control
            — privately and securely — on your own device.
          </p>
        </header>

        {/* ================= FEATURES ================= */}
        <div className="deep-grid">
          {features.map((item, index) => (
            <div key={index} className="deep-card">
              <div className="deep-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
