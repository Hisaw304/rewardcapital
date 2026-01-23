import React from "react";

const roadmapData = [
  {
    title: "Start ICO Platform",
    quarter: "Q4 2019",
    desc: "Initial planning and architecture for the Reward Capital ICO platform.",
  },
  {
    title: "Project Idea",
    quarter: "Q4 2019",
    desc: "Concept validation and early research inspired by previous successful launches.",
  },
  {
    title: "Business Conception",
    quarter: "Q1 2020",
    desc: "Foundation of the business model and early blockchain development.",
  },
  {
    title: "Blockchain Integration",
    quarter: "Q4 2020",
    desc: "Core blockchain infrastructure completed and soft cap achieved.",
  },
  {
    title: "Legal Review",
    quarter: "Q1 2022",
    desc: "Global compliance review to ensure regulatory readiness.",
  },
  {
    title: "Token Sale & Marketing",
    quarter: "Q3 2022",
    desc: "Public token sale and targeted marketing campaigns.",
  },
  {
    title: "Shop Apps",
    quarter: "Q4 2022",
    desc: "Expansion into crypto payment and commerce solutions.",
  },
  {
    title: "Project Expansion",
    quarter: "Q4 2023",
    desc: "Ecosystem growth and strategic partnerships.",
  },
];

const Roadmap = () => {
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="max-w-7xl mx-auto px-6">
        <header className="roadmap-header">
          <span className="roadmap-eyebrow">ROADMAP</span>
          <h2 className="roadmap-title">The timeline of our business</h2>
        </header>

        <div className="roadmap-wrapper">
          <div className="roadmap-line" />

          <div className="roadmap-track">
            {roadmapData.map((item, index) => {
              const position = index % 2 === 0 ? "top" : "bottom";

              return (
                <div className={`roadmap-item ${position}`} key={index}>
                  <span className="roadmap-dot" />
                  <span className="roadmap-connector" />

                  <div className="roadmap-card">
                    <h4>{item.title}</h4>
                    <span className="roadmap-quarter">{item.quarter}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
