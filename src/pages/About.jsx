// src/pages/About.jsx
import React from "react";

import heroImg from "../assets/aboutus.png"; // image below hero text
import ecosystemImg from "../assets/ecosystem.svg";

// partner logos
import p1 from "../assets/Poolin-1.svg";
import p2 from "../assets/card-logo-neutrino-1.svg";
import p3 from "../assets/card-logo-swop-1.svg";
import p4 from "../assets/BTCEX__1_-1-1.svg";
import p5 from "../assets/Coinbase-1.svg";
import p6 from "../assets/huobi_global-1.svg";
import Roadmap from "../components/Roadmap";
import WhatIsNFT from "../components/WhatIsNFT";
import MissionVision from "../components/MissionVision";
import DeepDive from "../components/DeepDive";

const About = () => {
  return (
    <section className="about-page">
      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="about-hero">
          <h1>Who are we?</h1>
          <p>
            Reward Capital is the world’s most trusted and popular way to buy,
            sell, and manage digital assets including Bitcoin, Ethereum, and
            Litecoin.
          </p>

          <a href="#" className="about-cta">
            Get Started
          </a>

          <div className="about-hero-image">
            <img src={heroImg} alt="Reward Capital Platform" />
          </div>
        </div>
      </div>

      {/* ================= MISSION ================= */}
      <div className="about-mission">
        <div className="max-w-7xl mx-auto px-6">
          <span className="about-eyebrow">Our Mission</span>
          <h2>Our Concept & Mission</h2>
          <p>
            We provide comprehensive blockchain solutions for beginners and
            experienced investors alike — from equipment sourcing and logistics
            to hosting, staking, and long-term financial growth.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <h3>1500+</h3>
              <span>Validator Nodes</span>
            </div>

            <div className="stat-card">
              <h3>$2B+</h3>
              <span>Total Value Secured</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMPONENT SLOT ================= */}

      <div className="max-w-7xl mx-auto">
        <Roadmap />
        <MissionVision />
        <WhatIsNFT />
        <DeepDive />
      </div>

      {/* ================= ECOSYSTEM ================= */}
      <div className="about-ecosystem">
        <div className="max-w-7xl mx-auto px-6 ecosystem-grid">
          <div className="ecosystem-text">
            <span className="about-eyebrow">Ecosystem</span>
            <h2>Reward Capital Ecosystem</h2>
            <p>
              Reward Capital is part of a powerful interconnected ecosystem
              designed to deliver seamless performance, speed, and security for
              users worldwide.
            </p>

            <div className="ecosystem-stats">
              <div>
                <h4>5425</h4>
                <span>Transactions / Second</span>
              </div>
              <div>
                <h4>60M+</h4>
                <span>Total Transactions</span>
              </div>
              <div>
                <h4>$0.002</h4>
                <span>Cost per Transaction</span>
              </div>
              <div>
                <h4>1500+</h4>
                <span>Validator Nodes</span>
              </div>
            </div>
          </div>

          <div className="ecosystem-image">
            <img src={ecosystemImg} alt="Reward Capital Ecosystem" />
          </div>
        </div>
      </div>

      {/* ================= CTA CARD ================= */}
      <div className="about-cta-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="cta-inner">
            <h2>Get started for free</h2>
            <p>
              Reward Capital combines Ethereum and sovereign blockchains into a
              powerful multi-chain system designed for scale and security.
            </p>

            <div className="cta-actions">
              <a href="#" className="primary-btn">
                Get Started
              </a>
              <a href="#" className="secondary-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PARTNERS ================= */}
      <div className="about-partners">
        <div className="max-w-7xl mx-auto px-6">
          <h2>Our Partners</h2>
          <p>
            Manage crypto, NFTs, and digital assets securely with support from
            leading blockchain partners worldwide.
          </p>

          <div className="partner-grid">
            {[p1, p2, p3, p4, p5, p6].map((logo, i) => (
              <div key={i} className="partner-card">
                <img src={logo} alt="Partner Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
