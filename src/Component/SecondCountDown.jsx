import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const SecondCountDown = () => {
  const conduct_date = "2025-11-11 12:00:00";

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
    <div className='lg:pl-14 pt-8'>
      <div className="flex gap-[17px] font-[poppins] text-white">
        <div className='w-15.5 h-15.5 bg-white text-black rounded-full flex flex-col justify-center items-center'>
          <h2 className="font-semibold leading-5">
            {count.days}
          </h2>
          <h5 className="text-[11px] font-normal leading-4.5">Days</h5>
        </div>
        
        <div className='w-15.5 h-15.5 bg-white text-black rounded-full flex flex-col justify-center items-center'>
          <h2 className="font-semibold leading-5">
            {count.hours}
          </h2>
          <h5 className="text-[11px] font-normal leading-4.5">Hours</h5>
        </div>
        
        <div className='w-15.5 h-15.5 bg-white text-black rounded-full flex flex-col justify-center items-center'>
          <h2 className="font-semibold leading-5">
            {count.minutes}
          </h2>
          <h5 className="text-[11px] font-normal leading-4.5">Minutes</h5>
        </div>
        
        <div className='w-15.5 h-15.5 bg-white text-black rounded-full flex flex-col justify-center items-center'>
          <h2 className="font-semibold leading-5">
            {count.seconds}
          </h2>
          <h5 className="text-[11px] font-normal leading-4.5">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default SecondCountDown;
