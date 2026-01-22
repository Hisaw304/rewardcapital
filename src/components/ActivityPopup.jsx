import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

// Countries + flags
const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "France", flag: "🇫🇷" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Sweden", flag: "🇸🇪" },
];

// Human random amount
const randomAmount = (min, max) => {
  const raw = Math.random() * (max - min) + min;
  return raw.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

// Time ago text
const randomTimeAgo = () => {
  const options = [
    "3 minutes ago",
    "9 minutes ago",
    "27 minutes ago",
    "1 hour ago",
    "4 hours ago",
    "9 hours ago",
    "12 hours ago",
    "1 day ago",
    "2 days ago",
  ];
  return options[Math.floor(Math.random() * options.length)];
};

// Message generator
const generateMessage = () => {
  const country = countries[Math.floor(Math.random() * countries.length)];
  const type = Math.random() > 0.5 ? "deposited" : "withdrew";

  const amount =
    type === "deposited"
      ? randomAmount(2500, 48000)
      : randomAmount(5000, 75000);

  return {
    title: `${country.flag} Someone from ${country.name} recently ${type} $${amount}`,
    subtitle: `${randomTimeAgo()} · Verified by Blockchain`,
  };
};

export default function ActivityPopup() {
  const [activity, setActivity] = useState(generateMessage());
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHide(true);

      setTimeout(() => {
        setActivity(generateMessage());
        setHide(false);
      }, 600); // match hide animation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`activity-popup ${hide ? "hide" : ""}`}>
      <div className="activity-title">{activity.title}</div>

      <div className="activity-subtitle">
        <span>{activity.subtitle}</span>
        <FiCheckCircle className="activity-verified" size={14} />
      </div>
    </div>
  );
}
