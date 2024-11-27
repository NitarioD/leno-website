import React from "react";
import "./grid_item.styles.scss";

const GridItem = ({ title, text, iconClasses }) => {
  return (
    <div className="features__grid-item">
      <div className="features__grid-item-text">
        <h4 className="features__grid-item-text-title">{title}</h4>
        <p className="features__grid-item-text-description">{text}</p>
      </div>
      <div className="features__grid-item-icon">
        <i className={iconClasses}></i>
      </div>
    </div>
  );
};

export default GridItem;
