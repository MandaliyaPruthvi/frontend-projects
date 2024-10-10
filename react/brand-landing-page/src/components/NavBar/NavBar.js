import React, { useState, useEffect } from "react";

import "../NavBar/NavBar.css";

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { CiFacebook, CiPhone, CiInstagram, CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";

import logo from "../../assets/myAgency.png";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import useScreenSize from "../../hooks/useScreenSize";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function NavBar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    console.log("Testing");
    setClick(!click);
  };

  const screenSize = useScreenSize();

  const { width: windowWidth } = screenSize;

  const handleSetActive = (to) => {
    console.log(to);
  };

  const dropdownItems = [
    { title: "English", code: "en" },
    { title: "French", code: "fr" },
    { title: "German", code: "gb" },
    { title: "Italian", code: "it" },
    { title: "Español", code: "sp" },
  ];

  useEffect(() => {
    window.onbeforeunload = function () {
      localStorage.setItem("language", "en");
      return true;
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <>
      <div className="social-media">
        <div className="social-media-icons">
          <CiFacebook />
          <CiInstagram />
          <CiMail />
          <CiPhone />
        </div>
        <div className="language-item">
          <span className="language_label">{t("nav_bar_language")}</span>
          <LanguageSwitcher items={dropdownItems} />
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="/" className="nav-logo">
            <img src={logo} alt="" style={{ width: "8rem" }} />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home_element"
                spy={windowWidth > 750 ? true : false}
                spyThrottle={500}
                offset={-200}
                smooth={true}
                duration={500}
                delay={50}
                className="nav-links"
                onSetActive={handleSetActive}
              >
                {windowWidth > 750 ? (
                  t("sections_1_display_name")
                ) : (
                  <div onClick={handleClick}>
                    {t("sections_1_display_name")}
                  </div>
                )}
              </Link>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <Link
                activeClass="active"
                to="services_element"
                spy={windowWidth > 750 ? true : false}
                spyThrottle={500}
                offset={-200}
                smooth={true}
                duration={500}
                delay={100}
                className="nav-links"
                onSetActive={handleClick}
              >
                {windowWidth > 750 ? (
                  t("sections_2_display_name")
                ) : (
                  <div onClick={handleClick}>
                    {t("sections_2_display_name")}
                  </div>
                )}
              </Link>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <Link
                activeClass="active"
                to="contacts_element"
                spy={windowWidth > 750 ? true : false}
                spyThrottle={500}
                offset={-200}
                smooth={true}
                duration={500}
                delay={100}
                className="nav-links"
                onSetActive={handleClick}
              >
                {windowWidth > 750 ? (
                  t("sections_3_display_name")
                ) : (
                  <div onClick={handleClick}>
                    {t("sections_3_display_name")}
                  </div>
                )}
              </Link>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <Link
                activeClass="active"
                to="payments_element"
                spy={windowWidth > 750 ? true : false}
                spyThrottle={500}
                offset={-200}
                smooth={true}
                duration={500}
                delay={100}
                className="nav-links"
                onSetActive={handleClick}
              >
                {windowWidth > 750 ? (
                  t("sections_4_display_name")
                ) : (
                  <div onClick={handleClick}>
                    {t("sections_4_display_name")}
                  </div>
                )}
              </Link>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <Link
                activeClass="active"
                to="about_element"
                spy={windowWidth > 750 ? true : false}
                spyThrottle={500}
                offset={-200}
                smooth={true}
                duration={500}
                delay={100}
                className="nav-links"
                onSetActive={handleClick}
              >
                {windowWidth > 750 ? (
                  t("sections_5_display_name")
                ) : (
                  <div onClick={handleClick}>
                    {t("sections_5_display_name")}
                  </div>
                )}
              </Link>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <Link
                activeClass="active"
                to="testimonials_element"
                spy={windowWidth > 750 ? true : false}
                spyThrottle={500}
                offset={-200}
                smooth={true}
                duration={500}
                delay={100}
                className="nav-links"
                onSetActive={handleClick}
              >
                {windowWidth > 750 ? (
                  t("sections_6_display_name")
                ) : (
                  <div onClick={handleClick}>
                    {t("sections_6_display_name")}
                  </div>
                )}
              </Link>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {!click ? (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
