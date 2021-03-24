import WorkerInfo from "./WorkerInfo";
import React from "react";

const InfoCard = (props) => {
  console.log("InfoCard started");
  //Destructuring the props
  const { workOrder } = props;

  //Creating a date from the epoch time
  const d = new Date(workOrder.deadline * 1000);

  return (
    <div className="InfoCard">
      <h2>{workOrder.name}</h2>

      <p>{workOrder.description}</p>
      <div>
        <WorkerInfo id={workOrder.workerId} />
      </div>

      <p>{d.toDateString()}</p>
    </div>
  );
};

export default InfoCard;
