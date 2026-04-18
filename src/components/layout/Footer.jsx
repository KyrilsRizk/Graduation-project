import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#F7F2E9] py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-[#425B6F] text-lg mb-5">About</h3>
          <p className="text-[#425B6F] font-semibold">
            We leverage cutting-edge AI <br /> technology to provide accurate
            gold <br />
            price predictions, helping investors
            <br /> make informed decisions in the
            <br /> precious metals market.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#425B6F] text-lg mb-5">
            Quick Links
          </h3>
          <ul className="text-sm space-y-1">
  <li className="group">
    <Link
      to="/"
      className="inline-block text-[#425B6F] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    >
      Home
    </Link>
  </li>
  <li className="group">
    <Link
      to="/gold-price-view"
      className="inline-block text-[#425B6F] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    >
      Gold Price View
    </Link>
  </li>
  <li className="group">
    <Link
      to="/ai-prediction"
      className="inline-block text-[#425B6F] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    >
      AI Prediction
    </Link>
  </li>
  <li className="group">
    <Link
      to="/price-alerts"
      className="inline-block text-[#425B6F] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    >
      Price Alerts
    </Link>
  </li>
  <li className="group">
    <Link
      to="/news"
      className="inline-block text-[#425B6F] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    >
      News
    </Link>
  </li>
  <li className="group">
    <Link
      to="/about-us"
      className="inline-block text-[#425B6F] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    >
      About Us
    </Link>
  </li>
</ul>
        </div>

        <div className="flex gap-x-9 flex-wrap">
<img src="/Logoo.png" alt="Logo" width={50} height={40} className="object-contain mt-28" />          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h3 className="font-semibold text-lg text-[#425B6F] mb-5">
                Contact
              </h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2 text-[#425B6F]">
                  <FaEnvelope className="text-yellow-500" />{" "}
                  info@aigoldprediction.com
                </li>
                <li className="flex items-center gap-2 text-[#425B6F]">
                  <FaPhone className="text-yellow-500" /> +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 text-[#425B6F]">
                  <FaMapMarkerAlt className="text-yellow-500" /> 123 Financial
                  District,
                  <br /> New York, NY 10004
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:items-start text-center">
        <p className="text-xs text-gray-500 mt-2 md:mt-4">
          © 2025 AI Gold Price Prediction Project | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
