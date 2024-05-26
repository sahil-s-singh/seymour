import React, { useState, useEffect } from 'react';

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDay = date.getDate().toString().padStart(2, "0");
  const formattedYear = date.getFullYear();

  return `${formattedMonth}/${formattedDay}/${formattedYear}`;
};

const ElapsedTime = ({ startTime }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const difference = now - startTime;
      setElapsedTime(difference);
    }, 1000); 

    return () => clearInterval(intervalId);
  }, [startTime]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  
    const formattedParts = [];
    if (hours > 0) {
      formattedParts.push(`${hours} hours`);
    }
    if (minutes >= 0) {
      formattedParts.push(`${minutes} mins`);
    }
  
    return formattedParts.join(' ');
  };


  

  return (
    <span className="text-pink">{formatTime(elapsedTime)}</span>
  );
};

export  {ElapsedTime, formatDate};
