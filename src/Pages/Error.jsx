import React from 'react'
import Header from '../Component/Header'
import NavBar from '../Component/NavBar'
import Container from '../Component/Container'
import Button from '../Component/Button'
import Footer from '../Component/Footer'
import { Link } from "react-router";


const Error = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Container className="pb-35">
        <p className="mt-20 text-[#7D8184] text-[14px] leading-[21px]">
          Home / {" "}
          <span className="text-black">404 Error</span>
        </p>
        <div className='mt-35 flex flex-col items-center text-center'>
            <h1 className='font-[inter] font-medium text-[110px] leading-28.5 tracking-[3px]'>404 Not Found</h1>
            <p className='font-[poppins] leading-6 mt-10 mb-20'>Your visited page not found. You may go home page.</p>
            <Link to="/">
                <Button buttonName="Back to home page"/>
            </Link>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Error
