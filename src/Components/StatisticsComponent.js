import React from "react";

const StatisticsComponent = (props) => {
  let { num, name } = props;
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="statistics">
          <div
            data-tilt
            data-tilt-max="20"
            data-tilt-speed="1000"
            className="statistics-img"
          >
            <img
              src="images/icons/deal.svg"
              alt="happy"
              className="img-fluid"
            />
          </div>
          <div className="statnumb">
            <span className="counter">{num}</span>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsComponent;
