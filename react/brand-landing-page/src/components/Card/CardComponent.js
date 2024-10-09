import React from "react";
import "../Card/CardComponent.css";

const CardComponent = (props) => {
  const { header, imgSrc, contentList, contentValue, footer, popular } = props;

  return (
    <div
      className={`card_container ${popular && "card_container_popular_border"}`}
    >
      <div className="card_wrapper">
        {popular && (
          <div className="card_popular_wrapper">
            <p className="card_popular_text">Popular</p>
          </div>
        )}

        <div
          className={`card_header_wrapper ${
            !popular && "card_top_radius_border"
          }`}
        >
          {header && header.icon && (
            <div className="card_header_icon">{header.icon}</div>
          )}
          <h3 className="card_header_title">{header.title}</h3>
        </div>

        {imgSrc && (
          <div className="card_image_wrapper">
            <img
              className="card_image_element"
              src={imgSrc}
              alt={header.title + "_image"}
            />
          </div>
        )}

        {contentList && (
          <div className="card_content_wrapper">
            <ul className="card_content_list">
              {contentList &&
                contentList.map((element, index) => {
                  return (
                    <li className="card_content_list_item" key={index}>
                      {element}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}

        {contentValue && (
          <div className="card_content_value_wrapper">
            <p className="card_content_value_description">{contentValue}</p>
          </div>
        )}

        {footer && (
          <div className="card_footer_wrapper">
            <h3>{footer}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
