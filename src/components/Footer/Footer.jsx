import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>STEM<span>Donor</span></h2>

          <p>
            Connecting donors and receivers to make
            a difference in someone's life.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/donors">Find Donors</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>

          <Link to="/blood-request">Blood Request</Link>
          <Link to="/donate">Donate Blood</Link>
          <Link to="/stem-cell">Stem Cell Donation</Link>
          <Link to="/matches">My Matches</Link>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>📧 support@stemdonor.com</p>
          <p>📍 Nepal</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 STEMDonor. All rights reserved.</p>

        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
