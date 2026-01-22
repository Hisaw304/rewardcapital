import {
  FaGlobe,
  FaEthereum,
  FaLayerGroup,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobe />,
    title: "Scale for Global Adoption",
    text: "We deliver enterprise-grade performance and reliability to support users worldwide with consistent quality.",
    animation: "fade-left delay-1",
  },
  {
    icon: <FaEthereum />,
    title: "ETH Compatibility",
    text: "Built on proven Ethereum standards with an established ecosystem of tools, languages, and enterprise adoption.",
    animation: "fade-up delay-2",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalability",
    text: "Dedicated blockchains, advanced consensus mechanisms, and custom Wasm execution environments for high throughput.",
    animation: "fade-right delay-3",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    text: "Modular security-as-a-service powered by Ethereum or professional validator networks.",
    animation: "fade-left delay-4",
  },
  {
    icon: <FaCode />,
    title: "Developer Experience",
    text: "Ethereum-equivalent experience with no protocol-level knowledge, token deposits, or permission barriers.",
    animation: "fade-right delay-5",
  },
];

const Features = () => {
  return (
    <section
      className="feature-section"
      style={{ backgroundColor: "var(--background-b)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 fade-up">
          <h2>Built to Scale</h2>
          <p className="mt-4 text-[var(--white70)] max-w-2xl mx-auto">
            Reward Capital provides secure, scalable, and developer-friendly
            blockchain infrastructure designed for global adoption.
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`feature-card p-8 rounded-2xl border border-white/10 hover:border-[#ff8d3a] ${item.animation}`}
            >
              <div className="feature-icon text-4xl text-[#ff8d3a] mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--white70)] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
