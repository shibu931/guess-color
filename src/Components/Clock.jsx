import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(7200);

    useEffect(() => {
    const intervalID = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalID);
    }, [7200]);

  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);
  return (
    <span className="text-6xl font-extralight">{formattedTime}</span>
  )
}

export default Clock