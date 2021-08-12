import React from 'react'

const Form = () => {
    return (
        <div>
            <section className="enquire-form pad-tb">
                <div className="container">
                    <div className="row light-bgs">
                        <div className="col-lg-6">
                            <div className="common-heading text-l">
                                <span>Contact Now</span>
                                <h2 className="mt0">Have Question? Write a Message</h2>
                            </div>
                            <div className="form-block">
                                <form action="#" method="post" name="feedback-form">
                                    <div className="fieldsets row">
                                        <div className="col-md-6"><input type="text" placeholder="Full Name" name="name"/></div>
                                            <div className="col-md-6"><input type="email" placeholder="Email Address" name="email"/></div>
                                            </div>
                                            <div className="fieldsets row">
                                                <div className="col-md-6"><input type="number" placeholder="Contact Number" name="phone"/></div>
                                                    <div className="col-md-6"><input type="text" placeholder="Subject" name="subject"/></div>
                                                    </div>
                                                    <div className="fieldsets"><textarea placeholder="Message" name="message"></textarea></div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" checked="defaultChecked"/>
                                                            <label className="custom-control-label" htmlFor="customCheck">I agree to the <a href="javascript:void(0)">Terms &amp; Conditions</a> of Business Name.</label>
                                             </div>
                                                        <div className="fieldsets mt20"> <button type="submit" name="submit" className="lnk btn-main bg-btn">Submit <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></button> </div>
                                                        <p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.</p>
                                            </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 v-center">
                                                <div className="enquire-image">
                                                    <img src="images/about/hellopic.png" alt="enquire" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </section>
                                <section className="our-office pad-tb">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="common-heading">
                                                    <span>Our Locations</span>
                                                    <h2>Our office</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center upset shape-numm">
                                            <div className="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".2s">
                                                <div className="office-card">
                                                    <div className="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
                                                        <img src="images/location/newyork.png" alt="New York" className="img-fluid" />
                                                    </div>
                                                    <div className="office-text">
                                                        <h4>New York</h4>
                                                        <p>603 FA Forest Avenue, New York, USA 10021</p>
                                                        <a href="javascript:void(0)" target="blank" className="btn-outline">View on Map <i className="fas fa-chevron-right fa-icon"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".4s">
                                                <div className="office-card">
                                                    <div className="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
                                                        <img src="images/location/sydeny.png" alt="sydney" className="img-fluid" />
                                                    </div>
                                                    <div className="office-text">
                                                        <h4>Sydney</h4>
                                                        <p>2449 Columbia Boulevard, Sydney, 10021</p>
                                                        <a href="javascript:void(0)" target="blank" className="btn-outline">View on Map <i className="fas fa-chevron-right fa-icon"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6 shape-loc wow fadeInUp" data-wow-delay=".6s">
                                                <div className="office-card mb0">
                                                    <div className="skyline-img" data-tilt data-tilt-max="4" data-tilt-speed="1000">
                                                        <img src="images/location/rome.png" alt="rome" className="img-fluid" />
                                                    </div>
                                                    <div className="office-text">
                                                        <h4>Rome</h4>
                                                        <p>9988 Piazzetta Scalette Rubiani 99, Rome, 84090</p>
                                                        <a href="javascript:void(0)" target="blank" className="btn-outline">View on Map <i className="fas fa-chevron-right fa-icon"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            )
}

                            export default Form
