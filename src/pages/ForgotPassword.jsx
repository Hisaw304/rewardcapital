// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import heroBg from "../assets/hero.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleReset = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      setLoading(true);

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setMessage(
        "If an account exists with this email, a password reset link has been sent."
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="forgot-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="forgot-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="forgot-wrapper">
            <div className="forgot-box">
              <span className="forgot-eyebrow">Account recovery</span>
              <h1 className="forgot-title">Forgot your password?</h1>
              <p className="forgot-subtitle">
                Enter your email and we’ll send you a secure link to reset your
                password.
              </p>

              <form onSubmit={handleReset} className="forgot-form">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {error && <p className="error-text">{error}</p>}
                {message && <p className="success-text">{message}</p>}

                <button type="submit" disabled={loading}>
                  {loading ? "Sending link..." : "Send reset link"}
                </button>

                <div className="forgot-footer">
                  <a href="/login">Back to login</a>
                  <span>
                    New user? <a href="/signup">Create wallet</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
