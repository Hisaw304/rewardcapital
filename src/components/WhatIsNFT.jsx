// src/components/WhatIsNFT.jsx
import React from "react";

import earth from "../assets/Earth-network.jpg";
import cam2 from "../assets/cam2.png";
import cam3 from "../assets/cam3.png";
import image1 from "../assets/img-1.png";

const WhatIsNFT = () => {
  return (
    <section className="nft-section">
      <div className="max-w-7xl mx-auto px-6 nft-wrapper">
        {/* ================= VISUAL ================= */}
        <div className="nft-visual">
          <img src={earth} alt="Blockchain Network" className="nft-earth" />

          {/* floating images */}
          <img src={cam2} alt="" className="nft-float nft-float-1" />
          <img src={cam3} alt="" className="nft-float nft-float-2" />
          <img src={image1} alt="" className="nft-float nft-float-3" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="nft-content">
          <span className="nft-eyebrow">WHAT IS NFT?</span>

          <h2 className="nft-title">
            NFTs are digital assets secured by the blockchain
          </h2>

          <p className="nft-lead">
            An NFT is a unique digital token connected to a blockchain system,
            ensuring authenticity, ownership, and immutability.
          </p>

          <p className="nft-text">
            While many platforms solve only a single problem, Reward Capital is
            building a secure, useful, and easy-to-use ecosystem powered by
            next-generation blockchain infrastructure. Our platform integrates
            seamless crypto payments, decentralized funding, and advanced
            arbitration mechanisms for the future of finance.
          </p>

          <a href="#" className="nft-cta">
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNFT;
