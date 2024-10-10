import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "../Testimonials/Testimonials.css";
import { useTranslation } from "react-i18next";

import image1 from "../../assets/carousel_images/1.png";
import image2 from "../../assets/carousel_images/2.png";
import image3 from "../../assets/carousel_images/3.png";

const TestimonialsElement = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <Element name="testimonials_element" className="testimonials_element">
      <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>
        {t("testimonials")}
      </h1>

      <div className="testimonials_container">
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div className="myCarousel_Container">
            <img src={image1} alt="client_1" />
            <div className="myCarousel">
              <h3>{t("client_one_name")}</h3>
              <h4>{t("client_one_role")}</h4>
              <p>{t("client_one_description")}</p>
            </div>
          </div>

          <div className="myCarousel_Container">
            <img src={image2} alt="client_2" />
            <div className="myCarousel">
              <h3>{t("client_two_name")}</h3>
              <h4>{t("client_two_role")}</h4>
              <p>{t("client_two_description")}</p>
            </div>
          </div>

          <div className="myCarousel_Container">
            <img src={image3} alt="client_3" />
            <div className="myCarousel">
              <h3>{t("client_two_name")}</h3>
              <h4>{t("client_two_role")}</h4>
              <p>{t("client_two_description")}</p>
            </div>
          </div>
        </Carousel>
      </div>
    </Element>
  );
};

export default TestimonialsElement;
