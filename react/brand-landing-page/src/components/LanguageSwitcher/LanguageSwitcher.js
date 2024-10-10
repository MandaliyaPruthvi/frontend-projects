import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../LanguageSwitcher/LanguageSwitcher.css";
// import Loader from "../Loader/Loader";

const LanguageSwitcher = ({ items }) => {
  const { i18n } = useTranslation();
  const language = localStorage.getItem("language") || "en";
  // const [loading, setLoading] = useState(false);
  const displayLanguage = items.filter((element) => {
    return element.code === language;
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    // setLoading(true);
    toggleDropdown();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {displayLanguage[0].title}
      </button>
      {/* {loading && <Loader />} */}
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => changeLanguage(item.code)}
              className="dropdown-item"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
