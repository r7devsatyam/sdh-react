import React from 'react'

const Service = () => {
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
                        <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp" data-wow-delay="0.2s">
                            <div className="s-block" data-tilt data-tilt-max="5" data-tilt-speed="1000">
                                <div className="s-card-icon"><img src="images/icons/branding.svg" alt="service" className="img-fluid" /></div>
                                <h4>Logo & Branding Service</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0)">Learn More <i className="fas fa-chevron-right fa-icon"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp" data-wow-delay="0.4s">
                            <div className="s-block" data-tilt data-tilt-max="5" data-tilt-speed="1000">
                                <div className="s-card-icon"><img src="images/icons/development.svg" alt="service" className="img-fluid" /></div>
                                <h4>Website Design & Development</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0)">Learn More <i className="fas fa-chevron-right fa-icon"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp" data-wow-delay="0.6s">
                            <div className="s-block" data-tilt data-tilt-max="5" data-tilt-speed="1000">
                                <div className="s-card-icon"><img src="images/icons/app.svg" alt="service" className="img-fluid" /></div>
                                <h4>Mobile App Development</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0)">Learn More <i className="fas fa-chevron-right fa-icon"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp" data-wow-delay="0.8s">
                            <div className="s-block mb0" data-tilt data-tilt-max="5" data-tilt-speed="1000">
                                <div className="s-card-icon"><img src="images/icons/marketing.svg" alt="service" className="img-fluid" /></div>
                                <h4>Digital Marketing Service</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0)">Learn More <i className="fas fa-chevron-right fa-icon"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="-cta-btn mt70">
                        <div className="free-cta-title v-center wow zoomInDown" data-wow-delay=".9s">
                            <p>Hire a <span>Dedicated Developer</span></p>
                            <a href="#" className="btn-main bg-btn2 lnk">Hire Now<i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Service;
