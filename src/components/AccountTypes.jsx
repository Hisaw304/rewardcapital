import React from "react";
import { Link } from "react-router-dom";

const accounts = [
  {
    name: "Classic",
    tag: "Starter Portfolio",
    rate: "2.5% Daily",
    duration: "10 Days",
    min: "$1,000",
    max: "$9,999",
    description:
      "Designed for investors entering the market with a controlled budget while maintaining consistent returns.",
    highlight: false,
  },
  {
    name: "Premium",
    tag: "Most Popular",
    rate: "3.0% Daily",
    duration: "10 Days",
    min: "$10,000",
    max: "$19,999",
    description:
      "Optimized for experienced investors seeking higher daily returns with balanced risk exposure.",
    highlight: true,
  },
  {
    name: "Platinum",
    tag: "Elite Investors",
    rate: "3.5% Daily",
    duration: "10 Days",
    min: "$20,000",
    max: "Unlimited",
    description:
      "A high-performance investment plan built for maximum profitability and long-term capital growth.",
    highlight: false,
  },
];

export default function AccountTypes() {
  return (
    <section className="account-section">
      <div className="account-header">
        <h2>Choose Your Account Type</h2>
        <p>
          Simply select your preferred account type in our application form.
        </p>
      </div>

      <div className="account-grid">
        {accounts.map((acc, i) => (
          <div
            key={i}
            className={`account-card ${acc.highlight ? "highlight" : ""}`}
          >
            {acc.highlight && <span className="badge">Recommended</span>}

            <h3>{acc.name} Account</h3>
            <span className="account-tag">{acc.tag}</span>

            <div className="account-rate">
              <strong>{acc.rate}</strong>
              <span>{acc.duration}</span>
            </div>

            <p className="account-desc">{acc.description}</p>

            <ul className="account-meta">
              <li>
                <span>Minimum Investment</span>
                <strong>{acc.min}</strong>
              </li>
              <li>
                <span>Maximum Investment</span>
                <strong>{acc.max}</strong>
              </li>
            </ul>

            <Link to="/signup" className="account-btn">
              Create an Account
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
