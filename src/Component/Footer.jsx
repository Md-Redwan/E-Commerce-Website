import React from 'react'
import Container from "./Container";
import { VscSend } from "react-icons/vsc";
import Scanner from '../assets/Scanner.png'
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black text-white font-[poppins] mt-35'>
      <Container className="pt-20">
        <div className='flex flex-col gap-15 px-5 xl:px-0 lg:flex-row justify-between'>
            <div className='w-[217px]'>
                <h2 className='font-[inter] font-bold text-2xl leading-6 tracking-[3px]'>Exclusive</h2>
                <h5 className='font-medium text-[20px] leading-7 py-6'>Subscribe</h5>
                <p className='leading-6 pb-4'>Get 10% off your first order</p>
                <div className='flex w-[217px] justify-between items-center border-1 border-white rounded-sm'>
                    <input type="email" placeholder='Enter your email' className='pl-4 w-[80%] py-3'/>
                    <VscSend  className='text-2xl w-[20%] cursor-pointer'/>
                </div>
            </div>
            <div className='w-[175px]'>
                <h3 className='text-[20px] font-medium leading-7'>Support</h3>
                <p className='leading-6 pt-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p className='leading-6 py-4'>exclusive@gmail.com</p>
                <p className='leading-6'>+88015-88888-9999</p>
            </div>
            <div className='w-[123px]'>
                <h3 className='text-[20px] font-medium leading-7'>Support</h3>
                <h4 className='leading-6 pt-6'>My Account</h4>
                <h4 className='leading-6 py-4'>Login / Register</h4>
                <h4 className='leading-6'>Cart</h4>
                <h4 className='leading-6 py-4'>Wishlist</h4>
                <h4 className='leading-6'>Shop</h4>
            </div>
            <div className='w-[109px]'>
                <h3 className='text-[20px] font-medium leading-7'>Quick Link</h3>
                <h4 className='leading-6 pt-6'>Privacy Policy</h4>
                <h4 className='leading-6 py-4'>Terms Of Use</h4>
                <h4 className='leading-6'>FAQ</h4>
                <h4 className='leading-6 py-4'>Contact</h4>
            </div>
            <div className='w-49.5'>
                <h3 className='text-[20px] font-medium leading-7'>Download App</h3>
                <p className='font-medium text-[12px] leading-4.5 text-[#aeaeaf] pt-6 pb-2'>Save $3 with App New User Only</p>
                <img src={Scanner} alt="" />
                <div className='text-2xl flex gap-6 items-center pt-6'>
                    <RiFacebookLine className='cursor-pointer'/>
                    <FiTwitter className='cursor-pointer'/>
                    <CiInstagram className='cursor-pointer'/>
                    <RiLinkedinLine className='cursor-pointer'/>
                </div>
            </div>
        </div>
        <p className='text-sm flex gap-1 justify-center items-center leading-6 text-[#3c3d3c] mt-19 pb-6 text-center'><FaRegCopyright className='lg:text-[20px]'/>Copyright Rimel 2022. All right reserved</p>
      </Container>
    </div>
  )
}

export default Footer
