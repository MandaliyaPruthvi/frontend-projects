import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = ({ data, showThumbs, autoPlay, showStatus }) => {
  return (
    <Carousel
      autoPlay={autoPlay}
      showThumbs={showThumbs}
      showStatus={showStatus}
      showArrows={false}
    >
      {data &&
        data.map((map, index) => {
          return (
            <div key={index}>
              <img src={map.imgSrc} alt={"imamge" + index} />
              <p className="legend">{map.title}</p>
            </div>
          );
        })}
    </Carousel>
  );
};

export default CarouselComponent;
