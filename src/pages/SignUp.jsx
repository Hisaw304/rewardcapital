// src/pages/Signup.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/hero.jpg";
import { Link } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    country: "",
    accountType: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Redirect if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        navigate("/dashboard", { replace: true });
      }
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!form.agree) {
      setError("You must accept the terms & conditions");
      return;
    }
    if (!form.accountType) {
      setError("Please select an account type");
      return;
    }

    setLoading(true);

    try {
      const { error: authError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            username: form.username,
            phone: form.phone,
            country: form.country,
            accountType: form.accountType,
          },
        },
      });

      if (authError) throw authError;

      // ✅ Profile is created automatically by trigger
      navigate("/login", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="signup-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="signup-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="signup-wrapper">
            <div className="signup-form-box">
              <span className="signup-eyebrow">Create Wallet</span>
              <h1 className="signup-brand">
                <Link to="/" className="brand-link">
                  Reward Capital
                </Link>
              </h1>

              <form onSubmit={handleSignup} className="signup-form">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />

                <select name="country" required onChange={handleChange}>
                  <option value="">Select Country</option>
                  {/* your country options here */}
                </select>

                {/* NEW ACCOUNT TYPE DROPDOWN */}
                <select name="accountType" required onChange={handleChange}>
                  <option value="">Select Account Type</option>
                  <option value="classic">Classic</option>
                  <option value="premium">Premium</option>
                  <option value="platinum">Platinum</option>
                </select>

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-type Password"
                  required
                  onChange={handleChange}
                />

                <label className="terms">
                  <input
                    type="checkbox"
                    name="agree"
                    onChange={handleChange}
                    className="terms-checkbox"
                  />
                  <span className="terms-box" />
                  <span className="terms-text">
                    I agree to the <a href="#">Terms & Conditions</a>
                  </span>
                </label>

                {error && <p className="error-text">{error}</p>}

                <button type="submit" disabled={loading}>
                  {loading ? "Creating Wallet..." : "Create Wallet"}
                </button>

                <p className="login-link">
                  Already have a wallet? <a href="/login">Log in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
