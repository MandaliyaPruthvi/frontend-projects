import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Footer/Footer.css";
import logo from "../../assets/myAgency.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <NavLink exact="true" to="/" className="footer-logo">
            <img src={logo} alt="" style={{ width: "7rem" }} />
          </NavLink>

          <h5 style={{ fontSize: 24 }}>© My Agency</h5>
        </div>
      </footer>
    </>
  );
}

export default Footer;
