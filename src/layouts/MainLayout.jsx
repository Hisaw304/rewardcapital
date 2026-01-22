import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CryptoTicker from "../components/CryptoTicker";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CryptoTicker />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
