import React from "react";

const Testimonial = ({ imgURL, altText, testimonial, testifier }) => {
  return (
    <div className="testimonials__card">
      <div className="testimonials__image">
        <img src={imgURL} alt={altText} />
      </div>
      <div className="testimonials__card--content">
        <p className="testimonials__card-text">{testimonial}</p>
        <h3 className="testimonials__card-title">{testifier}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
