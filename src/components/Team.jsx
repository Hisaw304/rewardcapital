import React from "react";

import team1 from "../assets/team1.jpg";
import team2 from "../assets/team4.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team2.jpg";

const teamMembers = [
  { img: team1, name: "Alex Morgan", title: "Founder & CEO" },
  { img: team2, name: "Sophia Lee", title: "Blockchain Lead" },
  { img: team3, name: "Daniel Cruz", title: "CTO" },
  { img: team4, name: "Emma Johnson", title: "Product Designer" },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="max-w-7xl mx-auto team-header">
        <h2>
          Our <span>Team</span>
        </h2>
        <p>
          Driven by the leadership of each of our experts, we help shape the
          future of decentralized finance and digital innovation.
        </p>
      </div>

      {/* INFINITE SCROLL */}
      <div className="team-slider">
        <div className="team-track">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-img-wrap">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <span>{member.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <div className="team-values">
        <span>Minds</span>
        <span>Talent</span>
        <span>Knowledge</span>
        <span>Integrity</span>
        <span>Vision</span>
        <span>Future</span>
        <span>Network</span>
        <span>Ideas</span>
      </div>
    </section>
  );
};

export default Team;
