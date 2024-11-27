import React from "react";

const Features = ({ heading, description, iconClass }) => {
  return (
    <div className="details-features__list-item">
      <i className={iconClass}></i>
      <div className="details-features__list-text">
        <h3 className="details-features__list-title">{heading}</h3>
        <p className="details-features__list-description">{description}</p>
      </div>
    </div>
  );
};

export default Features;
