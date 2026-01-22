import tokenImg from "../assets/download.png";

const metrics = [
  { label: "Private Sale", value: 10 },
  { label: "Burned", value: 30 },
  { label: "Public Sale", value: 20 },
  { label: "Staking Rewards", value: 28 },
  { label: "Partnership Funds", value: 7 },
  { label: "Team Pool", value: 5 },
];

const TokenMetrics = () => {
  return (
    <section className="token-section">
      <div className="max-w-7xl token-container">
        {/* LEFT */}
        <div className="token-content">
          <h2>
            Token <span>Metrics</span>
          </h2>

          <p className="token-supply">
            Total Token Supply: <strong>10,000,000,000 SDW</strong>
          </p>

          <div className="token-list">
            {metrics.map((item, index) => (
              <div key={index} className="token-item">
                <div className="token-row">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>

                <div className="token-bar">
                  <div
                    className="token-fill"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="token-image">
          <img src={tokenImg} alt="Token metrics illustration" />
        </div>
      </div>
    </section>
  );
};

export default TokenMetrics;
