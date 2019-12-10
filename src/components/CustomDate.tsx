import React from "react";

const CustomDate = () => {
  let date: string = new Date().toDateString();
  return (
    <div>
      {date}
      <button>Get the Date</button>
    </div>
  );
};

export default CustomDate;
