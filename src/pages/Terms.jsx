import React from "react";

export default function Terms() {
  return (
    <section className="terms-page relative overflow-hidden px-6 py-16 md:py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-1)] mb-6 animate-slideDown">
          Terms & Conditions
        </h1>

        <p className="text-[var(--white70)] text-lg md:text-xl mb-10 animate-fadeIn">
          Welcome to Reward Capital. Please read these Terms & Conditions
          carefully before using our services. By accessing or using our
          platform, you agree to comply with these terms.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <div className="animate-fadeIn delay-200">
            <h2 className="text-xl font-semibold text-[var(--white80)] mb-2">
              1. Eligibility
            </h2>
            <p className="text-[var(--white70)] text-sm md:text-base">
              Users must be 18 years or older and legally able to enter into
              binding agreements. By using our platform, you confirm that you
              meet these requirements.
            </p>
          </div>

          <div className="animate-fadeIn delay-400">
            <h2 className="text-xl font-semibold text-[var(--white80)] mb-2">
              2. Account Responsibility
            </h2>
            <p className="text-[var(--white70)] text-sm md:text-base">
              You are responsible for maintaining the confidentiality of your
              account information and for all activities that occur under your
              account.
            </p>
          </div>

          <div className="animate-fadeIn delay-600">
            <h2 className="text-xl font-semibold text-[var(--white80)] mb-2">
              3. Deposits & Earnings
            </h2>
            <p className="text-[var(--white70)] text-sm md:text-base">
              Deposits made on the Reward Capital platform are subject to our
              terms and conditions. Earnings and rewards are based on your
              deposits and investment activity.
            </p>
          </div>

          <div className="animate-fadeIn delay-800">
            <h2 className="text-xl font-semibold text-[var(--white80)] mb-2">
              4. Security & Verification
            </h2>
            <p className="text-[var(--white70)] text-sm md:text-base">
              All user transactions are verified through blockchain technology
              to ensure safety, transparency, and integrity.
            </p>
          </div>

          <div className="animate-fadeIn delay-1000">
            <h2 className="text-xl font-semibold text-[var(--white80)] mb-2">
              5. Privacy
            </h2>
            <p className="text-[var(--white70)] text-sm md:text-base">
              We value your privacy. By using our platform, you agree to our
              Privacy Policy and the collection and processing of your personal
              information as described therein.
            </p>
          </div>

          <div className="animate-fadeIn delay-1200">
            <h2 className="text-xl font-semibold text-[var(--white80)] mb-2">
              6. Modifications
            </h2>
            <p className="text-[var(--white70)] text-sm md:text-base">
              Reward Capital reserves the right to modify these terms at any
              time. It is your responsibility to review the Terms & Conditions
              periodically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
