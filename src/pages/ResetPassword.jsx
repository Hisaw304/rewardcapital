import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import heroBg from "../assets/hero.jpg";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleReset = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      setMessage("Password updated successfully! You can now log in.");
      setPassword("");
      setConfirm("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="auth-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="auth-overlay">
        <div className="auth-wrapper">
          <div className="auth-box">
            <span className="auth-eyebrow">Account recovery</span>
            <h1 className="auth-title">Reset your password</h1>
            <p className="auth-subtitle">
              Enter a new password to secure your account.
            </p>

            <form onSubmit={handleReset} className="auth-form">
              <input
                type="password"
                placeholder="New password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />

              {error && <p className="error-text">{error}</p>}
              {message && <p className="success-text">{message}</p>}

              <button type="submit" disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
              </button>

              <div className="auth-footer">
                <a href="/login">Back to login</a>
                <span>
                  New user? <a href="/signup">Create wallet</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
