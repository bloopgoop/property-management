import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a website dedicated to providing information about properties
            and real estate. Our goal is to help you find your dream home.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@property.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <p>
            If you have any questions or concerns, please don't hesitate to
            contact us.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2021 Property. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
