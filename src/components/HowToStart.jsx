import { useEffect, useRef, useState } from "react";

import howToImg from "../assets/how_to.png";
import earthImg from "../assets/earth.png";
import arrowDown from "../assets/arrowdown.png";

const steps = [
  {
    title: "Download Wallet",
    text: "Install the Reward Capital wallet and get instant access to secure, decentralized financial tools.",
  },
  {
    title: "Buy Tokens",
    text: "Purchase digital assets using multiple on-ramps optimized for speed, accessibility, and compliance.",
  },
  {
    title: "Exchange Cryptocurrency",
    text: "Swap and manage assets seamlessly while interacting with DeFi and Web3 applications.",
  },
];

const HowToStart = () => {
  const trailRef = useRef(null);
  const [highlight, setHighlight] = useState(0);
  const [ballTop, setBallTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = trailRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const anchor = viewportH * 0.45;

      const progress = (anchor - rect.top) / rect.height;
      const clamped = Math.max(0, Math.min(1, progress));

      const h = rect.height * clamped;
      setHighlight(h);
      setBallTop(h);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="how-section">
      <div className="max-w-7xl mx-auto how-container">
        {/* LEFT VISUAL (RELATIVE) */}
        <div className="how-visual">
          <img src={howToImg} alt="How to start" className="how-base" />

          {/* EARTH (ABSOLUTE OVERLAY) */}
          <img src={earthImg} alt="Rotating Earth" className="how-earth" />
        </div>

        {/* TIMELINE (FULL HEIGHT) */}
        <div className="how-timeline">
          <div className="trail" ref={trailRef}>
            <div className="highlight" style={{ height: `${highlight}px` }} />
            <div className="ball" style={{ top: `${ballTop}px` }}>
              <img src={arrowDown} alt="Scroll indicator" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="how-content">
          <h2>
            How to <span>Start</span>?
          </h2>

          <p className="how-intro">
            Reward Capital is engineered for simplicity without sacrificing
            performance. Every component is designed to scale globally while
            remaining intuitive for everyday users.
          </p>

          <div className="steps">
            {steps.map((step, i) => (
              <div key={i} className="step fade-up">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
