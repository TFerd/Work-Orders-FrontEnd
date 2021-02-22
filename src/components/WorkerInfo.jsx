import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";


const WorkerInfo = (props) => {
    const {id} = props;
    const [workerInfo, setWorkerInfo] = useState();

    //Fetches data from the workers API based on the ID passed by the props.
    //Sets the results of the call into a state variable that's used to
    //populate the component.
    useEffect(() => {
        axios.get(`https://api.hatchways.io/assessment/workers/${id}`)
        .then((res) => {
            const response = res.data.worker;
            setWorkerInfo(response);
        })
    }, []);

    const { id: workerId, name, email, companyName, image } = workerInfo || {};

    //If workerInfo is empty, display a loading message,
    //else show the workerInfo
    return (
        <div>
        {workerInfo ? (
        <div className="WorkerInfo">
            <img src={image} />
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
}

export default WorkerInfo;