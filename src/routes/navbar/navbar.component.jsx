import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import { logo } from "../../assets/images";
import "./navbar.styles.scss";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      if (window.scrollY > 0) {
        navbar.classList.add("navbar--scroll");
      } else {
        navbar.classList.remove("navbar--scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenuForMobile = () => {
    const mobileMenuList = document.querySelector(".navbar__mobile-menu-items");

    mobileMenuList.classList.toggle("active");
  };
  return (
    <>
      <nav className="navbar ">
        <div className="navbar__container container">
          <div className="navbar__logo">
            <img src={logo} alt="Leno" />
          </div>
          <div className="navbar__menu">
            <ul className="navbar__menu-list">
              <li className="navbar__menu-item">
                <a href="/" className="navbar__menu-link">
                  Home
                </a>
              </li>
              <li className="navbar__menu-item">
                <a href="#features" className="navbar__menu-link">
                  Features
                </a>
              </li>
              <li className="navbar__menu-item">
                <a href="#preview" className="navbar__menu-link">
                  Preview
                </a>
              </li>
              <li className="navbar__menu-item">
                <a href="#details" className="navbar__menu-link">
                  Details
                </a>
              </li>
              <li className="navbar__menu-item">
                <a href="#download" className="navbar__menu-link">
                  Download
                </a>
              </li>
              <li className="navbar__menu-item">
                <Link to="#" className="navbar__menu-link--primary">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link to="#" className="navbar__menu-link--primary">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu & Hamburger Icon */}
          <div className="navbar__mobile-menu">
            <div
              className="navbar__mobile-menu-toggle"
              onClick={handleToggleMenuForMobile}
            >
              <i className="fas fa-bars fa-2x"></i>
            </div>
            {/* Mobile Menu Items */}
            <div className="navbar__mobile-menu-items">
              <ul className="navbar__mobile-menu-list">
                <li className="navbar__mobile-menu-item">
                  <a href="/" className="navbar__mobile-menu-link">
                    Home
                  </a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="#features" className="navbar__mobile-menu-link">
                    Features
                  </a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="#preview" className="navbar__mobile-menu-link">
                    Preview
                  </a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a href="#details" className="navbar__mobile-menu-link">
                    Details
                  </a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <a
                    href="m
                    #download"
                    className="navbar__mobile-menu-link"
                  >
                    Download
                  </a>
                </li>
                <li className="navbar__mobile-menu-item">
                  <Link to="#" className="navbar__mobile-menu-link--primary">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li className="navbar__mobile-menu-item">
                  <Link to="#" className="navbar__mobile-menu-link--primary">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
