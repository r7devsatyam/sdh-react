import React from "react";
import StatisticsComponent from "./StatisticsComponent";

const Statistics = (props) => {
  return (
    <div>
      <div className="statistics-section bg-gradient pad-tb tilt3d">
        <div className="container">
          <div className="row justify-content-center t-ctr">
            <div className="col-lg-4 col-sm-6">
              <div className="statistics">
                <div
                  data-tilt
                  data-tilt-max="20"
                  data-tilt-speed="1000"
                  className="statistics-img"
                >
                  <img
                    src="images/icons/startup.svg"
                    alt="years"
                    className="img-fluid"
                  />
                </div>
                <div className="statnumb">
                  <span className="counter">15</span>
                  <span>+</span>
                  <p>Year In Business</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="statistics">
                <div
                  data-tilt
                  data-tilt-max="20"
                  data-tilt-speed="1000"
                  className="statistics-img"
                >
                  <img
                    src="images/icons/team.svg"
                    alt="team"
                    className="img-fluid"
                  />
                </div>
                <div className="statnumb">
                  <span className="counter">80</span>
                  <span>+</span>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row small t-ctr">
            <StatisticsComponent
              key={"Card-1"}
              num="450"
              name="Happy Clients"
            />
            <StatisticsComponent
              key={"Card-2"}
              num="48k"
              name="Projects Done"
            />
            <StatisticsComponent key={"Card-3"} num="95k" name="Hours Worked" />
            <StatisticsComponent
              key={"Card-4"}
              num="24/7"
              name="Support Available"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
