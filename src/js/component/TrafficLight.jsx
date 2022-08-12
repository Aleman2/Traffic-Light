import React from "react";
import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(-1);
  let array = ["red", "orange", "green", "purple"];

  useEffect(() => {
    if (change > 3) {
      setChange(0);
    } else {
      setColor(array[change]);
    }
  }, [change]);

  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        <ul className="trafficlight red orange green purple">
          <li
            onClick={() => setColor("red")}
            id={color == "red" ? "red" : ""}
          ></li>
          <li
            onClick={() => setColor("orange")}
            id={color == "orange" ? "orange" : ""}
          ></li>
          <li
            onClick={() => setColor("green")}
            id={color == "green" ? "green" : ""}
          ></li>
          {show ? (
            <li
              onClick={() => setColor("purple")}
              id={color == "purple" ? "purple" : ""}
            ></li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="w-25 mx-auto mt-5 d-flex justify-content-around">
        <button className="btn btn-success" onClick={() => setShow(true)}>
          Show
        </button>
        <button className="btn btn-danger" onClick={() => setShow(false)}>
          Hide
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setChange(change + 1)}
        >
          Change
        </button>
      </div>
    </>
  );
};

export default TrafficLight;
