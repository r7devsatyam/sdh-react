import React from 'react'

const Statistics = () => {
    return (
        <div>
            <div className="statistics-section bg-gradient pad-tb tilt3d">
                <div className="container">
                    <div className="row justify-content-center t-ctr">
                        <div className="col-lg-4 col-sm-6">
                            <div className="statistics">
                                <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                                    <img src="images/icons/startup.svg" alt="years" className="img-fluid" />
                                </div>
                                <div className="statnumb">
                                    <span className="counter">15</span><span>+</span>
                                    <p>Year In Business</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="statistics">
                                <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                                    <img src="images/icons/team.svg" alt="team" className="img-fluid" />
                                </div>
                                <div className="statnumb">
                                    <span className="counter">80</span><span>+</span>
                                    <p>Team Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row small t-ctr">
                        <div className="col-lg-3 col-sm-6">
                            <div className="statistics">
                                <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                                    <img src="images/icons/deal.svg" alt="happy" className="img-fluid" />
                                </div>
                                <div className="statnumb">
                                    <span className="counter">450</span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="statistics">
                                <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                                    <img src="images/icons/computers.svg" alt="project" className="img-fluid" />
                                </div>
                                <div className="statnumb counter-number">
                                    <span className="counter">48</span><span>k</span>
                                    <p>Projects Done</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="statistics">
                                <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                                    <img src="images/icons/worker.svg" alt="work" className="img-fluid" />
                                </div>
                                <div className="statnumb">
                                    <span className="counter">95</span><span>k</span>
                                    <p>Hours Worked</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="statistics mb0">
                                <div data-tilt data-tilt-max="20" data-tilt-speed="1000" className="statistics-img">
                                    <img src="images/icons/customer-service.svg" alt="support" className="img-fluid" />
                                </div>
                                <div className="statnumb">
                                    <span>24/7</span>
                                    <p>Support Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics
