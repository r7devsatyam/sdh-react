import React from "react";

const WorkCategoryComponent = (props) => {
  let { name } = props;
  return (
    <div className="icon-set wow fadeIn" data-wow-delay=".2s">
      <div className="work-card cd1">
        <div className="icon-bg">
          <img src="images/icons/icon-1.png" alt="Industries" />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default WorkCategoryComponent;
