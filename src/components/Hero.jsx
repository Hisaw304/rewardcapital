import { Link } from "react-router-dom";
import heroBg from "../assets/hero.jpg";
import heroSide from "../assets/hero-side.png"; // your right-side image

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay" />

      <div className="hero-container max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="hero-left slide-in-left">
          <h1>
            The World’s Leading <br />
            <span>Crypto Wallet</span>
          </h1>
          {/* BUTTONS */}
          <div className="hero-buttons slide-in-up delay-4">
            <Link to="/signup">
              <button className="btn-primary">Create Wallet</button>
            </Link>

            <Link to="/login">
              <button className="btn-outline">Access Wallet</button>
            </Link>
          </div>
          <h4 className="slide-in-up delay-1">
            Reward Capital is the easiest, safest, and fastest way to manage
            digital assets globally.
          </h4>

          <p className="slide-in-up delay-2">
            Reward Capital provides a secure, intuitive wallet experience for
            storing, exchanging, and interacting with decentralized financial
            applications. Explore the future of finance with confidence,
            transparency, and speed.
          </p>

          {/* CRYPTO LIST */}
          <div className="crypto-list slide-in-up delay-3">
            <span>Bitcoin</span>
            <span>Ethereum</span>
            <span>USDT</span>
            <span>BNB</span>
            <span>Solana</span>
            <span>Polygon</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right slide-in-right">
          <img src={heroSide} alt="crypto wallet preview" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
