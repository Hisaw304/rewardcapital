import ecosystemImg from "../assets/ecosystem.svg";

const stats = [
  {
    value: "60M+",
    label: "Total Transactions",
  },
  {
    value: "1500+",
    label: "Validator Nodes",
  },
  {
    value: "1000+",
    label: "Active Projects",
  },
];

const Ecosystem = () => {
  return (
    <section className="ecosystem-section">
      <div className="max-w-7xl mx-auto ecosystem-container">
        {/* LEFT CONTENT */}
        <div className="ecosystem-left slide-in-left">
          <h2>
            Join the Fastest Growing <br />
            <span>Ecosystem</span>
          </h2>

          <p className="ecosystem-text fade-up delay-1">
            Reward Capital is built on high-performance blockchain
            infrastructure designed for scale. Thousands of decentralized
            applications across DeFi, NFTs, and Web3 rely on fast finality, low
            fees, and secure validator networks.
          </p>

          {/* STATS */}
          <div className="ecosystem-stats">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`stat-card fade-up delay-${index + 2}`}
              >
                <h3>{item.value}</h3>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ecosystem-right slide-in-right">
          <img src={ecosystemImg} alt="Ecosystem illustration" />
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
