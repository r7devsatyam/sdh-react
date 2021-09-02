import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero-section hero-bg-bg1 bg-gradient">
        <div className="text-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 v-center">
                <div className="header-heading">
                  <h1 className="wow fadeInUp" data-wow-delay=".2s">
                    Creative Web Development Company
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse faucibus, risus sit amet auctor sodales, justo
                    erat tempor eros.
                  </p>
                  <a
                    href="#"
                    className="btn-main bg-btn lnk wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    View Case Studies{" "}
                    <i className="fas fa-chevron-right fa-icon" />
                    <span className="circle" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 v-center">
                <div className="single-image wow fadeIn" data-wow-delay=".5s">
                  <img
                    src="images/hero/hero-image.png"
                    alt="web development"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
