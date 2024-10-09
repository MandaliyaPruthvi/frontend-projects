import React from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import "../Services/Services.css";

const ServicesElement = ({ servicesListData }) => {
  const services = [
    {
      title: "Access Local Services",
      description: `Our VPS allows you to connect to critical services in Iran that require local presence, including:
      - Online Banking
      - Notary Services
      - Real Estate Transactions
      - Internet Service Providers
      - Phone Services
      - and more!`,
    },
    {
      title: "Secure Connection",
      description:
        "Your data is our priority. We utilize advanced firewalls and end-to-end encryption to ensure that all information (text, files, etc.) exchanged between you and the online services remains secure.",
    },
    {
      title: "Easy Setup",
      description:
        "Getting started is simple! Just fill out the form below, and within 24 hours of successful payment, you will receive your unique username, password, and a link to access your VPS.",
    },
  ];

  const { t } = useTranslation();

  return (
    <Element name="services_element" className="services_element">
      <div className="services_container">
        <div className="services_header_container">
          <h1 style={{ textAlign: "center" }}>{t("services_title")}</h1>
        </div>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-sub-card">
                <div className="service-icon">🛠️ </div>
                <h3 className="service-title">
                  {" "}
                  {t(`service_${index + 1}_title`)}
                </h3>
              </div>
              <p className="service-description">
                {t(`service_${index + 1}_description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ServicesElement;
