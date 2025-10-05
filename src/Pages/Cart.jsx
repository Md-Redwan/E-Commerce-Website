import Container from '../Component/Container'
import Header from '../Component/Header'
import NavBar from '../Component/NavBar'
import CartMonitor from "../assets/CartMonitor.png"
import CartGamepad from "../assets/CartGamepad.png"
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import React, { useState } from "react";
import CartSectionBtn from '../Component/CartSectionBtn'
import Button from '../Component/Button'
import Footer from '../Component/Footer'



const Cart = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };



  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    setCount2(count2 - 1);
  };

  return (
    <div>
      <Header/>
      <NavBar/>
      <Container className="font-[poppins] leading-6 pb-35">
        <p className="mt-20 text-[#7D8184] text-[14px] leading-[21px]">
          Home / {" "}
          <span className="text-black">Cart</span>
        </p>
        <div className='mt-20 flex justify-between rounded-sm shadow-sm py-6 px-10'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Subtotal</h1>
        </div>
        <div className='flex items-center justify-between rounded-sm mt-20 shadow-sm pl-10 pr-16.5 py-5 relative group'>
          <div className='flex gap-5 items-center'>
            <img src={CartMonitor} alt="" />
            <h3>LCD Monitor</h3>
          </div>
          <div className='absolute top-4 left-7 text-[0px] text-[#DB4444] group-hover:text-2xl duration-300 ease-linear'>
            <MdCancel/>
          </div>
          <div className='flex gap-70.5 items-center'>
            <h2>$650</h2>
          <div className='w-18 h-11 flex justify-center items-center gap-4 border-2 border-gray-400 rounded-sm'>
            <h2 className='w-4 h-6'>{count}</h2>
            <div className='w-4 h-8'>
              <MdKeyboardArrowUp onClick={increment}/>
              <MdKeyboardArrowDown onClick={decrement}/>
            </div>
          </div>
          <h2>$650</h2>
          </div>
          
        </div>
        <div className='flex items-center justify-between rounded-sm mt-20 mb-6 shadow-sm pl-10 pr-16.5 py-5 relative group'>
          <div className='flex gap-5 items-center'>
            <img src={CartGamepad} alt="" />
            <h3>H1 Gamepad</h3>
          </div>
          <div className='absolute top-4 left-7 text-[0px] text-[#DB4444] group-hover:text-2xl duration-300 ease-linear'>
            <MdCancel/>
          </div>
          <div className='flex gap-70.5 items-center'>
            <h2>$1100</h2>
          <div className='w-18 h-11 flex justify-center items-center gap-4 border-2 border-gray-400 rounded-sm'>
            <h2 className='w-4 h-6'>{count2}</h2>
            <div className='w-4 h-8'>
              <MdKeyboardArrowUp onClick={increment2}/>
              <MdKeyboardArrowDown onClick={decrement2}/>
            </div>
          </div>
          <h2>$1100</h2>
          </div>
          
        </div>
        <div className='flex justify-between items-center mb-20'>
          <CartSectionBtn CartSectionBtn="Return To Shop"/>
          <CartSectionBtn CartSectionBtn="Update Cart"/>
        </div>
        <div className='flex justify-between font-[poppins] leading-6'>
          <div className='flex gap-4'>
            <div>
              <input type="text" placeholder='Coupon Code' className='border-1 border-gray-500 py-4 px-6 rounded-sm w-[300px]'/>
            </div>
            <Button buttonName="Apply Coupon"/>
          </div>
          <div className='w-[470px] py-8 px-6 border-2 rounded-sm'>
            <h3 className='text-[20px] leading-7'>Cart Total</h3>
            <div className='flex justify-between mt-6 pb-4 border-b-1 border-gray-400'>
              <h4>Subtotal</h4>
              <h4>$1750</h4>
            </div>
            <div className='flex justify-between mt-6 pb-4 border-b-1 border-gray-400'>
              <h4>Shipping</h4>
              <h4>Free</h4>
            </div>
            <div className='flex justify-between mt-6 pb-4'>
              <h4>Total:</h4>
              <h4>$1750</h4>
            </div>
            <div className='flex justify-center'>
              <Button buttonName="Procees to checkout"/>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Cart
