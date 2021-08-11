import React from 'react'

const About = () => {
    return (
        <div>
            <section className="about-agency pad-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 v-center">
                            <div className="image-block">
                                <img src="images/about/about-image.png" alt="about" className="img-fluid no-shadow" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="common-heading text-l">
                                <span>We Are Creative Agency</span>
                                <h2>About Agency</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry. </p>
                                <p className="quote">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="user- mt30">
                                    <div className="media">
                                        <div className="user-image bdr-radius"><img src="images/user-thumb/girl2.jpg" alt="girl" className="img-fluid" /></div>
                                        <div className="media-body user-info v-center">
                                            <h5>Moana Smile</h5>
                                            <p>Founder of <span>Niwax</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
