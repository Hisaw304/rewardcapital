import React from "react";
import { Link } from "react-router-dom";

export default function RewardCapital() {
  return (
    <section className="reward-capital relative overflow-hidden px-6 py-16 md:py-24">
      {/* Animated background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--primary-1)] rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-[var(--primary-2)] rounded-full opacity-20 animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-1)] animate-slideDown">
          Reward Capital Investment
        </h2>
        <p className="mt-4 text-[var(--white70)] text-lg md:text-xl animate-fadeIn">
          Deposit today and start earning! Access seed funding, exclusive
          rewards, and become part of a community of ambitious investors.
        </p>

        {/* Key points */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 text-left animate-fadeIn delay-500">
          <div className="bg-[var(--background-b)] border border-white/70 rounded-xl p-6 flex-1">
            <h3 className="font-semibold text-[var(--white80)] mb-2">
              Deposit & Earn
            </h3>
            <p className="text-[var(--white70)] text-sm">
              Start earning rewards immediately by depositing into Reward
              Capital. Your investment grows with exclusive benefits.
            </p>
          </div>
          <div className="bg-[var(--background-b)] border border-white/70 rounded-xl p-6 flex-1">
            <h3 className="font-semibold text-[var(--white80)] mb-2">
              Exclusive Rewards
            </h3>
            <p className="text-[var(--white70)] text-sm">
              Compete for prizes, access seed funding, and unlock special
              investment opportunities, all valued at over $5 Million.
            </p>
          </div>
          <div className="bg-[var(--background-b)] border border-white/70 rounded-xl p-6 flex-1">
            <h3 className="font-semibold text-[var(--white80)] mb-2">
              Verified & Secure
            </h3>
            <p className="text-[var(--white70)] text-sm">
              All deposits are secured and verified on the blockchain, ensuring
              your investments are safe and transparent.
            </p>
          </div>
        </div>

        <Link
          to="/signup"
          className="inline-block mt-10 rounded-full bg-gradient-to-r from-[var(--primary-1)] to-[var(--primary-2)] px-8 py-4 font-semibold text-black hover:opacity-90 transition animate-fadeIn delay-700"
        >
          Deposit & Join Reward Capital
        </Link>
      </div>
    </section>
  );
}
