import React, { useState } from "react";
import AxiosTest from "./AxiosTest";

const ClickCount = () => {
  const [count, setCount] = useState(0);
  const [speedometer, setSpeedometer] = useState(20);

  React.useEffect(() => {
    console.log("ClickCount.js Mounted");
    return () => {
      console.log("ClickCount is closed");
    };
  }, []);

  React.useEffect(() => {
    console.log("Speedometer: ", speedometer);
    return () => {
      console.log("Speedometer click complete");
    };
  }, [speedometer]); //This is dependency, usually pointing to a variable that changes

  function increaseCount() {
    setCount(count + 1); //you cannot use count++ as count is immutable
  }
  return (
    <div>
      <h1>Click Counts</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <h3> {count}</h3>
      <button
        onClick={() => {
          setSpeedometer(speedometer + 5);
        }}
      >
        Speedometer: {speedometer}
      </button>
      <AxiosTest />
    </div>
  );
};

export default ClickCount;
