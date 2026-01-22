import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FaqPage from "./pages/FaqPage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import CoinView from "./pages/CoinView";
import Swap from "./pages/Swap";
import Wallets from "./pages/Wallets";
import Buy from "./pages/Buy";
import Receive from "./pages/Recieve";
import KYC from "./pages/KYC";
import Send from "./pages/Send";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <Routes>
      {/* AUTH PAGES (NO NAV / FOOTER) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* PROTECTED AUTH PAGES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/coin/:coin" element={<CoinView />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/wallet" element={<Wallets />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/send" element={<Send />} />
        </Route>
      </Route>

      {/* PUBLIC PAGES (WITH NAV / FOOTER) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaqPage />} />
      </Route>
    </Routes>
  );
};

export default App;
