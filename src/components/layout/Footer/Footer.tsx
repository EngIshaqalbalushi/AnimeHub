import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__section">
            <div className="footer__brand">
              <h3 className="footer__logo">AnimeHub</h3>
              <p className="footer__description">
                Your ultimate destination for discovering and watching the best
                anime shows from around the world.
              </p>
              <div className="footer__social">
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.72 0c-.37 0-.67-.3-.67-.67v-4.01c0-.37.3-.67.67-.67s.67.3.67.67v4.01c0 .37-.3.67-.67.67zm1.344-5.697c-.37 0-.67-.3-.67-.67v-.672c0-.37.3-.67.67-.67s.67.3.67.67v.672c0 .37-.3.67-.67.67z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Discord">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 01-5.547 1.706 13.71 13.71 0 00-2.828-3.36 19.651 19.651 0 00-5.116 2.01A19.749 19.749 0 003.654 3.8a20.847 20.847 0 00-1.923 2.36 20.696 20.696 0 00-1.51 3.762 20.153 20.153 0 00-.48 4.114c0 1.4.17 2.79.51 4.13a20.696 20.696 0 001.51 3.76 20.847 20.847 0 001.923 2.36 19.749 19.749 0 002.172 1.93 19.651 19.651 0 005.116 2.01 13.71 13.71 0 002.828-3.36 19.791 19.791 0 005.547 1.71 20.036 20.036 0 001.92-2.36 20.696 20.696 0 001.51-3.76 20.153 20.153 0 00.48-4.114 20.153 20.153 0 00-.48-4.114 20.696 20.696 0 00-1.51-3.762 20.036 20.036 0 00-1.92-2.36zm-8.317 12.63c-2.4 0-4.4-1.9-4.4-4.4s1.9-4.4 4.4-4.4 4.4 1.9 4.4 4.4-2 4.4-4.4 4.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__title">Explore</h4>
            <ul className="footer__links">
              <li>
                <Link to="/browse" className="footer__link">
                  Browse Anime
                </Link>
              </li>
              <li>
                <Link to="/trending" className="footer__link">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/popular" className="footer__link">
                  Popular
                </Link>
              </li>
              <li>
                <Link to="/recent" className="footer__link">
                  Recently Added
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="footer__link">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/genres" className="footer__link">
                  Genres
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="footer__section">
            <h4 className="footer__title">Community</h4>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Recommendations
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer__section">
            <h4 className="footer__title">Support</h4>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Bug Reports
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Feature Requests
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__section">
            <h4 className="footer__title">Legal</h4>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  DMCA
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <div className="footer__copyright">
            <p>&copy; {currentYear} AnimeHub. All rights reserved.</p>
            <p className="footer__disclaimer">
              This site does not store any files on its server. All contents are
              provided by non-affiliated third parties.
            </p>
          </div>

          <div className="footer__badges">
            <span className="footer__badge">HD Quality</span>
            <span className="footer__badge">No Ads</span>
            <span className="footer__badge">Free Streaming</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
