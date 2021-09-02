import React from "react";

const Clients = () => {
  return (
    <div>
      <section className="clients-section pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading">
                <span>Our happy customers</span>
                <h2>Some of our Clients</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="opl">
                <ul>
                  <li className=" wow fadeIn" data-wow-delay=".2s">
                    <div className="clients-logo">
                      <img
                        src="images/client/clients-1.png"
                        alt="text"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li className=" wow fadeIn" data-wow-delay=".4s">
                    <div className="clients-logo">
                      <img
                        src="images/client/clients-2.png"
                        alt="text"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li className=" wow fadeIn" data-wow-delay=".6s">
                    <div className="clients-logo">
                      <img
                        src="images/client/clients-3.png"
                        alt="text"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li className=" wow fadeIn" data-wow-delay=".8s">
                    <div className="clients-logo">
                      <img
                        src="images/client/clients-4.png"
                        alt="text"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                  <li className=" wow fadeIn" data-wow-delay="1s">
                    <div className="clients-logo">
                      <img
                        src="images/client/clients-5.png"
                        alt="text"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="-cta-btn mt70">
            <div
              className="free-cta-title v-center wow zoomInDown"
              data-wow-delay="1.2s"
            >
              <p>
                We <span>Promise.</span> We <span>Deliver.</span>
              </p>
              <a href="#" className="btn-main bg-btn2 lnk">
                Let's Work Together
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

export default Clients;
