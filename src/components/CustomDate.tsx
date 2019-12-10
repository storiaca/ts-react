import React, { useState } from "react";

const CustomDate = () => {
  let [date, setDate] = useState("");
  let getDate = () => {
    setDate(new Date().toDateString());
  };
  return (
    <div>
      {date}
      <button onClick={getDate}>Get the Date</button>
    </div>
  );
};

export default CustomDate;
