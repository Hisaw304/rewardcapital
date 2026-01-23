import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function RewardCapital() {
  return (
    <section className="reward-capital relative overflow-hidden px-6 py-16 md:py-24">
      {/* Top-left blob */}
      <div
        className="absolute -top-20 -left-20 w-60 h-60 opacity-20 animate-drift"
        style={{
          borderRadius: "50% 40% 60% 50%",
          background: "linear-gradient(135deg, #ffcf23 40%, #ff8d3a 20%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>

      {/* Bottom-right blob */}
      <div
        className="absolute -bottom-16 -right-16 w-80 h-80 opacity-15 animate-drift"
        style={{
          borderRadius: "60% 50% 40% 50%",
          background: "linear-gradient(45deg, #ff8d3a 20%, #ffcf23 10%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-1)] animate-slideDown">
          Reward Capital Investment
        </h2>
        <p className="mt-4 text-[var(--white70)] text-lg md:text-xl animate-fadeIn">
          Deposit today and start earning! Access seed funding, exclusive
          rewards, and become part of a community of ambitious investors.
        </p>

        {/* Key points */}
        <div className="mt-10 flex flex-col lg:flex-row justify-center gap-6 text-left animate-fadeIn delay-500">
          {/* Left: Lottie animation */}
          <DotLottieReact
            src="https://lottie.host/e0bfb63e-596d-413b-b791-e8212232fb16/htDt8rUIqU.lottie"
            loop
            autoplay
            className="w-full h-100 sm:h-100 md:h-auto lg:flex-1"
          />

          {/* Right: Cards stacked */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-[var(--background-b)] border border-white/70 rounded-xl p-6">
              <h3 className="font-semibold text-[var(--white80)] mb-2">
                Deposit & Earn
              </h3>
              <p className="text-[var(--white70)] text-sm">
                Start earning rewards immediately by depositing into Reward
                Capital. Your investment grows with exclusive benefits.
              </p>
            </div>

            <div className="bg-[var(--background-b)] border border-white/70 rounded-xl p-6">
              <h3 className="font-semibold text-[var(--white80)] mb-2">
                Exclusive Rewards
              </h3>
              <p className="text-[var(--white70)] text-sm">
                Compete for prizes, access seed funding, and unlock special
                investment opportunities, all valued at over $5 Million.
              </p>
            </div>

            <div className="bg-[var(--background-b)] border border-white/70 rounded-xl p-6">
              <h3 className="font-semibold text-[var(--white80)] mb-2">
                Verified & Secure
              </h3>
              <p className="text-[var(--white70)] text-sm">
                All deposits are secured and verified on the blockchain,
                ensuring your investments are safe and transparent.
              </p>
            </div>
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
