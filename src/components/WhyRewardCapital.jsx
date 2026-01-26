import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { ShieldCheck, TrendingDown, BarChart3 } from "lucide-react";

export default function WhyRewardCapital() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="why-rc">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADING & SUBPARAGRAPH ===== */}
        <div className="text-center mb-12">
          <h2 className="text-3xl rc-header  font-bold text-white mb-4">
            Why Choose Reward Capital
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Reward Capital leverages cutting-edge technology and expert
            strategies to maximize your returns while keeping your investments
            secure and transparent.
          </p>
        </div>

        {/* ===== STATS ===== */}
        <div className="rc-stats">
          <div className="stat-card">
            <strong>
              {startCount && (
                <CountUp end={183092} duration={2.5} separator="," />
              )}
              +
            </strong>
            <span>Daily Trades</span>
          </div>

          <div className="stat-card">
            <strong>
              {startCount && (
                <CountUp end={364887} duration={2.5} separator="," />
              )}
              +
            </strong>
            <span>Clients</span>
          </div>

          <div className="stat-card">
            <strong>
              {startCount && <CountUp end={96} duration={2.5} />} Billion+
            </strong>
            <span>Assets Managed</span>
          </div>

          <div className="stat-card">
            <strong>
              {startCount && <CountUp end={23} duration={2.5} />} Billion+
            </strong>
            <span>Daily Trade Volume</span>
          </div>
        </div>

        {/* ===== FEATURES ===== */}
        <div className="rc-features">
          <div className="rc-feature">
            <ShieldCheck size={28} />
            <h3>Profit Protection</h3>
            <p>
              Our automated system locks in gains at pre-defined milestones,
              preserving your profits while keeping your capital actively
              invested.
            </p>
          </div>

          <div className="rc-feature">
            <TrendingDown size={28} />
            <h3>Fee Optimization</h3>
            <p>
              We optimize execution to minimize fees, ensuring more of your
              returns stay invested and grow over time.
            </p>
          </div>

          <div className="rc-feature">
            <BarChart3 size={28} />
            <h3>Risk Management</h3>
            <p>
              Portfolios are dynamically adjusted to maintain your selected risk
              profile, keeping your investments balanced and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
