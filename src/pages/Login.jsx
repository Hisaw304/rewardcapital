// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate, useLocation, Link } from "react-router-dom";
import heroBg from "../assets/hero.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // where to redirect after login
  const from = location.state?.from || "/dashboard";

  // If already logged in, redirect immediately
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        navigate(from, { replace: true });
      }
    });
  }, [navigate, from]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Redirect after successful login
    navigate(from, { replace: true });
  };

  return (
    <section
      className="login-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="login-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="login-wrapper">
            <div className="login-box">
              <span className="login-eyebrow">Welcome back</span>
              <h1 className="login-brand">
                <Link to="/" className="brand-link">
                  Reward Capital
                </Link>
              </h1>
              <p className="login-subtitle">
                Access your wallet and manage your digital assets securely.
              </p>
              <form onSubmit={handleLogin} className="login-form">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error-text">{error}</p>}

                <button type="submit" disabled={loading}>
                  {loading ? "Signing in..." : "Log in"}
                </button>

                <div className="login-footer">
                  <Link to="/forgot-password">Forgot password?</Link>
                  <span>
                    New here? <Link to="/signup">Create wallet</Link>
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

export default Login;
