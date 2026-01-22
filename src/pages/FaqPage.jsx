import React from "react";
import { useState } from "react";
import ecosystem from "../assets/ecosystem.svg";
import Faq from "../components/Faq";
import { FiSend } from "react-icons/fi";
const FaqPage = () => {
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
    <main className="faq-page">
      {/* PAGE CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="faq-page-header">
          <h1 className="faq-page-title">FAQ</h1>
          <p className="faq-page-subtitle">
            Reward Capital is built to make digital finance simple, secure, and
            accessible for everyone. Here you’ll find clear answers to common
            questions about our platform, wallet features, security standards,
            supported blockchain networks, and how to get started.
          </p>
        </header>

        <Faq />
      </div>

      <section className="contact-section">
        <div className="max-w-7xl mx-auto px-6">
          {/* ================= HEADER ================= */}

          {/* ================= MAIN GRID ================= */}
          <div className="contact-main mb-4">
            {/* LEFT COLUMN */}
            <div className="contact-left">
              {/* FORM */}
              <h3 className="contact-form-title">
                Can’t find answers? <span>Send us a message</span>
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
        </div>
      </section>
    </main>
  );
};

export default FaqPage;
