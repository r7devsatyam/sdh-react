import React from "react";

const ServiceCard = (props) => {
  let { name, para } = props;
  return (
    <div
      className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp"
      data-wow-delay="0.2s"
    >
      <div className="s-block" data-tilt-max="5" data-tilt-speed="1000">
        <div className="s-card-icon">
          <img
            src="images/icons/branding.svg"
            alt="service"
            className="img-fluid"
          />
        </div>
        <h4>Website Design and Development</h4>
        <h2>{name}</h2>
        <p>{para}</p>
        <a href="#">
          Learn More <i className="fas fa-chevron-right fa-icon" />
        </a>
      </div>
    </div>
  );
};

export default ServiceComponent;
