import React from "react";
import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import { useDispatch } from "react-redux";

const WorkOrderList = () => {
  const dispatch = useDispatch();

  const [workOrders, setWorkOrders] = useState();
  const [searchTerm, setSearchTerm] = useState(""); //Used for filtering work orders
  const [isSortByLatest, setIsSortByLatest] = useState(true); //Used for sorting work orders

  //Equivalent to onDidMount();
  useEffect(() => {
    if (!workOrders) {
      // loadWorkOrders(setWorkOrders);
    }
  }, []);

  //Handles the search bar and updates the searchTerm, which is
  //passed into a filter function to determine which work orders to render.
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //Handles the checkbox for sorting the work orders by date
  const handleChecked = () => {
    setIsSortByLatest(!isSortByLatest);
  };

  return (
    //If there are work orders, display them,
    //Else, display loading.
    <>
      {workOrders ? (
        <div>
          <input
            type="text"
            placeholder="Search by name..."
            onChange={handleChange}
            value={searchTerm}
            id="name-input"
          />

          <input
            type="checkbox"
            id="deadline-input"
            name="Sort by Latest"
            checked={isSortByLatest}
            onChange={handleChecked}
          />
          <label for="deadline-input">Sort by Latest</label>

          {
            //Filters the work orders based on the input in the search bar
            workOrders
              .filter((orders) => orders.worker.name.includes(searchTerm))
              //Sorts the work orders based on the checkbox
              .sort((x, y) => {
                return isSortByLatest
                  ? y.deadline - x.deadline
                  : x.deadline - y.deadline;
              })
              .map((workOrder) => {
                return <InfoCard key={workOrder.id} workOrder={workOrder} />;
              })
          }
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

//Async function that fetches data from the work_orders api and creates a promise for each work order.
//Work orders are looped by a forEach that asynchronously calls loadWorkerDetails and adds them to a promises array.
//Promise.all(promises) ensures that all async calls are completed before moving on.
async function loadWorkOrders(setWorkOrders) {
  fetch("https://api.hatchways.io/assessment/work_orders")
    .then((response) => response.json())
    .then((data) => {
      const workOrders = data.orders;

      const promises = [];
      workOrders.forEach((workOrder) => {
        promises.push(loadWorkerDetails(workOrder));
      });
      Promise.all(promises).then((values) => {
        setWorkOrders(values);
      });
    });
}

//Async function that loads the worker details for each workOrder
async function loadWorkerDetails(workOrder) {
  const url =
    "https://api.hatchways.io/assessment/workers/" + workOrder.workerId;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      workOrder.worker = data.worker || "";
      return workOrder;
    });
}

export default WorkOrderList;
