// src/components/MissionVision.jsx
import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";

const VIDEO_ID = "rAtJ7Lw90KA";

const MissionVision = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="mv-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= VIDEO ================= */}
        <div
          className="mv-video"
          style={{
            backgroundImage: `linear-gradient(
              rgba(2,4,14,0.45),
              rgba(2,4,14,0.45)
            ), url(https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg)`,
          }}
        >
          <button className="mv-play" onClick={() => setOpen(true)}>
            <FiPlay />
          </button>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mv-grid">
          <div className="mv-card">
            <h5>Our Mission</h5>
            <p>
              At Reward Capital, our mission is to build an enduring
              decentralized finance ecosystem that empowers users globally and
              restores trust through transparency.
            </p>
          </div>

          <div className="mv-card">
            <h5>Our Vision</h5>
            <p>
              We envision a future where blockchain technology becomes the
              foundation for secure, scalable, and inclusive financial systems.
            </p>
          </div>

          <div className="mv-card">
            <h5>Core Values</h5>
            <p>
              Integrity, innovation, transparency, and continuous improvement
              guide every decision we make at Reward Capital.
            </p>
          </div>
        </div>
      </div>

      {/* ================= VIDEO MODAL ================= */}
      {open && (
        <div className="mv-modal" onClick={() => setOpen(false)}>
          <div className="mv-modal-inner" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1`}
              title="Reward Capital Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MissionVision;
