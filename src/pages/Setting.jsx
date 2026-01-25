import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { FiArrowLeft, FiLogOut, FiChevronRight } from "react-icons/fi";

export default function Settings() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [twoFA, setTwoFA] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
        // error: sessionError,
      } = await supabase.auth.getUser();
      // console.log("Current user:", user, sessionError);

      if (!user) return;

      const { data: profileData, error } = await supabase
        .from("profiles")
        .select("username, phone")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Profile fetch error:", error);
        return;
      }

      // console.log("Profile data fetched:", profileData);

      setProfile({
        email: user.email,
        username: profileData.username,
        phone: profileData.phone,
        // kyc_status: profileData.kyc_status,
      });
    };

    fetchProfile();
  }, []);

  if (!profile) return null;

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <section className="settings-page">
      {/* NAV */}
      <header className="coin-nav">
        <div className="nav-left" onClick={() => navigate(-1)}>
          <FiArrowLeft />
          <span>Back</span>
        </div>
      </header>

      <h1 className="page-title">Settings</h1>

      {/* PROFILE */}
      <div className="settings-card">
        <h3>Profile</h3>
        <div className="row">
          <span>Username</span>
          <span>{profile.username || "—"}</span>
        </div>
        <div className="row">
          <span>Email</span>
          <span>{profile.email}</span>
        </div>
        <div className="row">
          <span>Phone</span>
          <span>{profile.phone || "—"}</span>
        </div>
      </div>

      {/* SECURITY */}
      <div className="settings-card">
        <h3>Security</h3>

        <button className="settings-link">
          Change Password <FiChevronRight />
        </button>

        <button className="settings-link">
          Transaction PIN (4-digit) <FiChevronRight />
        </button>

        <div className="row">
          <span>Two-Factor Authentication</span>
          <label className="toggle">
            <input
              type="checkbox"
              checked={twoFA}
              onChange={() => setTwoFA(!twoFA)}
            />
            <span className="slider" />
          </label>
        </div>

        <div className="row">
          <span>KYC Status</span>
          <span className={`kyc ${profile.kyc_status}`}>
            {profile.kyc_status || "not_started"}
          </span>
        </div>
      </div>

      {/* PREFERENCES */}
      <div className="settings-card">
        <h3>Preferences</h3>

        <div className="row">
          <span>Language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="row">
          <span>Notifications</span>
          <label className="toggle">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider" />
          </label>
        </div>
      </div>

      {/* SUPPORT */}
      <div className="settings-card">
        <h3>Support</h3>

        <button className="settings-link" onClick={() => navigate("/faq")}>
          Help Center <FiChevronRight />
        </button>

        <button className="settings-link" onClick={() => navigate("/terms")}>
          Terms & Services <FiChevronRight />
        </button>

        <div className="row">
          <span>App Version</span>
          <span>v1.0.0</span>
        </div>
      </div>

      {/* LOGOUT */}
      <button className="logout-btn-s" onClick={logout}>
        <FiLogOut /> Logout
      </button>
    </section>
  );
}
