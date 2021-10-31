import { useEffect, useState } from "react";

const ClockExample = () => {
  const [myDate, setMyDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMyDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  });
  return (
    <div>
      <h3>Example React</h3>
      <input />
      <div>{myDate.toString()}</div>
    </div>
  );
};

export default ClockExample;
