import React from 'react'

const Button = ({buttonName}) => {
  return (
    <div>
        <button className=' hidden lg:flex py-4 px-12 bg-[#DB4444] text-white font-[poppins] font-normal leading-6 rounded-sm cursor-pointer'>{buttonName}</button>
    </div>
  )
}

export default Button
