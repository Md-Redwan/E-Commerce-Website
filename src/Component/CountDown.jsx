import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const CountDown = () => {
  const conduct_date = "2025-10-10 12:00:00";

  // const countDown = countDownDateAndTime(conduct_date);

  const [count, setCount] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown);
    };
    updateCountdown();

    setInterval(updateCountdown, 1000);
  }, []);

  

  return (
    <div className='flex justify-center'>
      <div className="flex gap-[17px] font-[poppins]">
        <div>
          <h5 className="text-[12px] font-medium leading-4.5">Days</h5>
          <h2 className="text-[32px] font-bold leading-7.5 tracking-[4%] font-[inter] mt-1">
            {count.days}
          </h2>
        </div>
        <h2 className="text-[#E07575] text-3xl font-medium flex items-end-safe">
          :
        </h2>
        <div>
          <h5 className="text-[12px] font-medium leading-4.5">Hours</h5>
          <h2 className="text-[32px] font-bold leading-7.5 tracking-[4%] font-[inter] mt-1">
            {count.hours}
          </h2>
        </div>
        <h2 className="text-[#E07575] text-3xl font-medium flex items-end-safe">
          :
        </h2>
        <div>
          <h5 className="text-[12px] font-medium leading-4.5">Minutes</h5>
          <h2 className="text-[32px] font-bold leading-7.5 tracking-[4%] font-[inter] mt-1">
            {count.minutes}
          </h2>
        </div>
        <h2 className="text-[#E07575] text-3xl font-medium flex items-end-safe">
          :
        </h2>
        <div>
          <h5 className="text-[12px] font-medium leading-4.5">Seconds</h5>
          <h2 className="text-[32px] font-bold leading-7.5 tracking-[4%] font-[inter] mt-1">
            {count.seconds}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
