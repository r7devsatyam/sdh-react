import React from "react";

const ServiceComponent = (props) => {
  let { name, para } = props;
  return (
    <div
      className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp"
      data-wow-delay="0.2s"
    >
      <div
        className="s-block"
        data-tilt
        data-tilt-max="5"
        data-tilt-speed="1000"
      >
        <div className="s-card-icon">
          <img
            src="images/icons/branding.svg"
            alt="service"
            className="img-fluid"
          />
        </div>
        <h4>{name}</h4>
        <p>{para}</p>
        <a href="#">
          Learn More <i className="fas fa-chevron-right fa-icon" />
        </a>
      </div>
    </div>
  );
};

export default ServiceComponent;
