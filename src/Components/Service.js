import React from "react";
import ServiceComponent from "./Service.component";

const Service = (props) => {
  return (
    <div>
      <section className="service-section web-servic pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading">
                <span>Services We’re Provided</span>
                <h2 className="mb30">Our Design & Development Services</h2>
              </div>
            </div>
          </div>
          <div className="row upset link-hover shape-num justify-content-center">
            <ServiceComponent
              key={"card-1"}
              name={"Website Design and Development"}
              para={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              }
            />
            <ServiceComponent
              key={"card-2"}
              name={"Mobile App Development"}
              para={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              }
            />
            <ServiceComponent
              key={"card-3"}
              name={"Digital Marketing Service"}
              para={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
              }
            />
          </div>
          <div className="-cta-btn mt70">
            <div
              className="free-cta-title v-center wow zoomInDown"
              data-wow-delay=".9s"
            >
              <p>
                Hire a <span>Dedicated Developer</span>
              </p>
              <a href="#" className="btn-main bg-btn2 lnk">
                Hire Now
                <i className="fas fa-chevron-right fa-icon" />
                <span className="circle" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
