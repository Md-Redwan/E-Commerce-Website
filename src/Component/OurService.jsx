import React from 'react'
import Container from "./Container";
import CustomerService from '../assets/CustomerService.png'
import FastDelivery from '../assets/FastDelivery.png'
import Guarantee from '../assets/Guarantee.png'


const OurService = () => {
  return (
    <div className='mt-34'>
      <Container>
        <div className='font-[poppins] flex flex-col gap-10 lg:flex-row lg:justify-evenly'>
            <div className='flex flex-col items-center'>
                <img src={FastDelivery} alt="" />
                <h5 className='font-semibold text-[20px] leading-7 mt-6 mb-2'>FREE AND FAST DELIVERY</h5>
                <p className='text-[14px] leading-5'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={CustomerService} alt="" />
                <h5 className='font-semibold text-[20px] leading-7 mt-6 mb-2'>24/7 CUSTOMER SERVICE</h5>
                <p className='text-[14px] leading-5'>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col items-center'>
                <img src={Guarantee} alt="" />
                <h5 className='font-semibold text-[20px] leading-7 mt-6 mb-2'>MONEY BACK GUARANTEE</h5>
                <p className='text-[14px] leading-5'>We reurn money within 30 days</p>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default OurService
