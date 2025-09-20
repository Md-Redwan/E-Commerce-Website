import React from 'react'

const ButtonTwo = ({buttonTwoName}) => {
  return (
    <div>
        <button className='lg:hidden py-4 px-12 bg-[#DB4444] text-white font-[poppins] font-normal leading-6 rounded-sm cursor-pointer'>{buttonTwoName}</button>
    </div>
  )
}

export default ButtonTwo
