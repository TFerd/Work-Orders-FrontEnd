import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorker } from "../redux/ducks/worker";

const WorkerInfo = (props) => {
  // console.log("WorkerInfo started");

  const dispatch = useDispatch();
  const workerInfo = useSelector((state) => state.worker.worker);

  const { id } = props;
  // const [workerInfo, setWorkerInfo] = useState();
  console.log("WorkerInfo started, id:");

  //Fetches data from the workers API based on the ID passed by the props.
  //Sets the results of the call into a state variable that's used to
  //populate the component.
  useEffect(() => {
    // axios.get(`https://api.hatchways.io/assessment/workers/${id}`)
    // .then((res) => {
    //     const response = res.data.worker;
    //     setWorkerInfo(response);
    // })
    console.log("calling get worker with id of", id);
    dispatch(getWorker(id));
  }, []);

  const { id: workerId, name, email, companyName, image } = workerInfo || {};

  //If workerInfo is empty, display a loading message,
  //else show the workerInfo
  return (
    <div>
      {workerInfo ? (
        <div className="WorkerInfo">
          <img alt="worker_picture_here" src={image} />
          <div>
            <h3>{name}</h3>
            <h4>{companyName}</h4>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default WorkerInfo;
