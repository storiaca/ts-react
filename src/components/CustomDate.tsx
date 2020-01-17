import React, { useState } from "react";

const CustomDate = () => {
  let [time, setTime] = useState("");
  let getTime = () => {
    setTime(new Date().toTimeString());
  };
  return (
    <div>
      {time}
      <button onClick={getTime}>Get the Time</button>
    </div>
  );
};

export default CustomDate;
