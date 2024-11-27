import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__about">
          <h4 className="footer__title">About Leno</h4>
          <p className="footer__description">
            Leno is a mobile app that helps you stay focused and improve your
            productivity. The app provides you with tools to set goals, track
            your progress, and maintain a healthy work-life balance.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links-list">
            <li className="footer__links-item">
              <a href="/" className="footer__links-link">
                Home
              </a>
            </li>
            <li className="footer__links-item">
              <a href="/#testimonials" className="footer__links-link">
                Testimonials
              </a>
            </li>
            <li className="footer__links-item">
              <a href="/#features" className="footer__links-link">
                Features
              </a>
            </li>
            <li className="footer__links-item">
              <a href="/#preview" className="footer__links-link">
                Preview
              </a>
            </li>
            <li className="footer__links-item">
              <a href="/#details" className="footer__links-link">
                Details
              </a>
            </li>
            <li className="footer__links-item">
              <a href="/#download" className="footer__links-link">
                Download
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <Link href="#" className="footer__social-link">
            <i className="fa-brands fa-facebook fa-3x"></i>
          </Link>
          <Link href="#" className="footer__social-link">
            <i className="fa-brands fa-twitter fa-3x"></i>
          </Link>
          <Link href="#" className="footer__social-link">
            <i className="fa-brands fa-instagram fa-3x"></i>
          </Link>
          <Link href="#" className="footer__social-link">
            <i className="fa-brands fa-linkedin fa-3x"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
