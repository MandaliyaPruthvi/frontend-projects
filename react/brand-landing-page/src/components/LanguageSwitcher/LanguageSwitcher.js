import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../LanguageSwitcher/LanguageSwitcher.css";

const LanguageSwitcher = ({ items }) => {
  const { i18n } = useTranslation();
  const language = localStorage.getItem("language") || "en";
  const displayLanguage = items.filter((element) => {
    return element.code === language;
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
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
