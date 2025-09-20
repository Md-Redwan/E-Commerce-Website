import React from 'react'
import Container from './Container'
import SecondCountDown from './SecondCountDown'
import MusicBox from '../assets/MusicBox.png'

const Music = () => {
  return (
    <div className='mt-[140px]'>
      <Container>
        <div className="bg-[url('./assets/MusicBackground.png')] bg-center bg-cover bg-no-repeat w-auto h-auto lg:w-full lg:h-[500px] flex items-center">
          <div className='lg:w-[45%] flex flex-col items-center text-center lg:text-start lg:items-start py-5 lg:py-0'>
            <h4 className='text-[#00FF66] font-[poppins] font-semibold leading-5 lg:pl-14 '>Categories</h4>
            <h2 className='lg:text-5xl text-3xl md:text-4xl font-semibold leading-15 font-[inter] tracking-[2px] text-white lg:pt-8 lg:pl-14'>Enhance Your Music Experience</h2>
            <img src={MusicBox} alt="" className='lg:hidden w-auto h-auto px-7'/>
            <SecondCountDown/>
            <button className='font-[poppins] font-medium leading-6 text-white py-4 px-12 bg-[#00FF66] rounded-sm lg:ml-14 mt-10 cursor-pointer'>Buy Now!</button>
          </div>
          <div className='lg:w-[50%] hidden lg:flex'>
            <img src={MusicBox} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Music
