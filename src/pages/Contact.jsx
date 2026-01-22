// src/pages/Contact.jsx
import React from "react";
import { useState } from "react";
import {
  FiMessageCircle,
  FiHelpCircle,
  FiBookOpen,
  FiSend,
} from "react-icons/fi";

import ecosystem from "../assets/ecosystem.svg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contact-section">
      <div className="contact-section-body max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <header className="contact-header">
          <span className="contact-eyebrow">Support & Communication</span>
          <h1 className="contact-title">Contact Reward Capital</h1>
          <p className="contact-subtitle">
            Whether you need technical support, have partnership inquiries, or
            simply want to learn more about Reward Capital, our team is here to
            help you every step of the way.
          </p>
        </header>

        {/* ================= MAIN GRID ================= */}
        <div className="contact-main mb-4">
          {/* LEFT COLUMN */}
          <div className="contact-left">
            {/* FORM */}
            <h3 className="contact-form-title">
              <span>Send us a message</span>
            </h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />

              {success && <p className="success-text">{success}</p>}
              {error && <p className="error-text">{error}</p>}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                <FiSend />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN — IMAGE ONLY */}
          <aside className="contact-visual">
            <img src={ecosystem} alt="Reward Capital Ecosystem" />
          </aside>
        </div>
        {/* HELP CARDS — BELOW FORM */}
        <div className="contact-help mt-5">
          <h3 className="help-heading">Need Help?</h3>

          <div className="help-card">
            <FiMessageCircle size={34} />
            <h4>24/7 Chat Support</h4>
            <p>
              Connect instantly with our support agents for real-time
              assistance.
            </p>
            <a href="#" className="help-link">
              Chat now
            </a>
          </div>

          <div className="help-card">
            <FiHelpCircle size={34} />
            <h4>FAQs</h4>
            <p>
              Explore our knowledge base for answers to common platform
              questions.
            </p>
            <a href="/faq" className="help-link">
              Learn more
            </a>
          </div>

          <div className="help-card">
            <FiBookOpen size={34} />
            <h4>Blog & Updates</h4>
            <p>
              Stay informed with the latest insights, releases, and crypto
              trends.
            </p>
            <a href="#" className="help-link">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
