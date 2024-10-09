import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "../Testimonials/Testimonials.css";

import image1 from "../../assets/carousel_images/1.png";
import image2 from "../../assets/carousel_images/2.png";
import image3 from "../../assets/carousel_images/3.png";

const TestimonialsElement = () => {
  //   const { t } = useTranslation(); // Get translation function

  return (
    <Element name="testimonials_element" className="testimonials_element">
      <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>Testimonials</h1>

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
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </div>
          </div>

          <div className="myCarousel_Container">
            <img src={image2} alt="client_2" />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I
                highly recommend Fetch to my peers.
              </p>
            </div>
          </div>

          <div className="myCarousel_Container">
            <img src={image3} alt="client_3" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </Element>
  );
};

export default TestimonialsElement;
