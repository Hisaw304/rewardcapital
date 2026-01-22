import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBell,
  FiHome,
  FiRepeat,
  FiCreditCard,
  FiSettings,
} from "react-icons/fi";

const FooterItem = ({ icon, label, href }) => (
  <a href={href} className="footer-item">
    {icon}
    <span>{label}</span>
  </a>
);

const KYC = () => {
  const navigate = useNavigate();
  const [identityType, setIdentityType] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    country: "",
    fullName: "",
    phone: "",
    identityNumber: "",
    frontFile: null,
    backFile: null,
  });

  const requiresBack = [
    "national_id",
    "drivers_license",
    "residence_permit",
  ].includes(identityType);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) =>
    setForm({ ...form, [e.target.name]: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    data.append("identityType", identityType);

    try {
      await fetch("/api/contact", { method: "POST", body: data });
      alert("KYC submitted successfully");
    } catch {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* NAV */}
      <header className="coin-nav">
        <div className="nav-left" onClick={() => navigate(-1)}>
          <FiArrowLeft />
          <span>Back</span>
        </div>
        <div className="nav-right">
          <FiBell />
        </div>
      </header>

      {/* CONTENT */}
      <section className="min-h-screen bg-[var(--background)] px-4 pt-10 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-[var(--background-b)] p-8">
          <h1 className="text-2xl font-semibold text-white">
            KYC Verification
          </h1>

          <p className="mt-2 text-sm text-[var(--white70)]">
            Upload a valid government-issued ID to verify your identity.
          </p>

          <div className="mt-6 rounded-lg border-l-4 border-[var(--primary-1)] bg-yellow-500/5 p-4 text-sm text-[var(--white80)]">
            Passports require only the photo page. Other documents require front
            and back images.
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Country */}
            <div>
              <label className="block text-sm text-[var(--white70)] mb-1">
                Issuing Country
              </label>
              <input
                name="country"
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-[var(--primary-1)] focus:outline-none"
              />
              {/* <select
                name="country"
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-[var(--primary-1)] focus:outline-none"
              >
                <option value="">Select country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Mexico">Mexico</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Panama">Panama</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select> */}
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm text-[var(--white70)] mb-1">
                Full Name
              </label>
              <input
                name="fullName"
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-[var(--primary-1)] focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-[var(--white70)] mb-1">
                Phone Number
              </label>
              <input
                name="phone"
                placeholder="+1 546 345 4566"
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-[var(--primary-1)] focus:outline-none"
              />
            </div>

            {/* Identity Medium */}
            <div>
              <label className="block text-sm text-[var(--white70)] mb-1">
                Identity Medium
              </label>
              <select
                onChange={(e) => setIdentityType(e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-[var(--primary-1)] focus:outline-none"
              >
                <option value="">Select document</option>
                <option value="national_id">National ID Card</option>
                <option value="passport">Passport</option>
                <option value="drivers_license">Driver’s License</option>
                <option value="residence_permit">Residence Permit</option>
              </select>
            </div>

            {/* ID Number */}
            <div>
              <label className="block text-sm text-[var(--white70)] mb-1">
                Identity Number
              </label>
              <input
                name="identityNumber"
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-[var(--primary-1)] focus:outline-none"
              />
            </div>

            {/* Front Upload */}
            <div>
              <label className="block text-sm text-[var(--white70)] mb-1">
                Identity Card Photo (Front)
              </label>
              <input
                type="file"
                name="frontFile"
                accept="image/*"
                onChange={handleFile}
                required
                className="w-full rounded-lg border border-dashed border-white/20 bg-black/30 px-4 py-6 text-sm text-[var(--white70)]"
              />
            </div>

            {/* Back Upload */}
            {requiresBack && (
              <div>
                <label className="block text-sm text-[var(--white70)] mb-1">
                  Identity Card Photo (Back)
                </label>
                <input
                  type="file"
                  name="backFile"
                  accept="image/*"
                  onChange={handleFile}
                  required
                  className="w-full rounded-lg border border-dashed border-white/20 bg-black/30 px-4 py-6 text-sm text-[var(--white70)]"
                />
              </div>
            )}

            {/* Submit */}
            <button
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-[var(--primary-1)] to-[var(--primary-2)] py-4 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Verification"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        <FooterItem icon={<FiHome />} label="Home" href="/dashboard" />
        <FooterItem icon={<FiRepeat />} label="Swap" href="/swap" />
        <FooterItem icon={<FiCreditCard />} label="Buy" href="/buy" />
        <FooterItem icon={<FiSettings />} label="Settings" href="/settings" />
      </footer>
    </>
  );
};

export default KYC;
