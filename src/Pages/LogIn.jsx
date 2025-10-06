import React from "react";
import Header from "../Component/Header";
import SignUpImage from "../assets/SignUpImage.png";
import { FcGoogle } from "react-icons/fc";
import Footer from "../Component/Footer";
import NavBarTwo from "../Component/NavBarTwo";
import { Link } from "react-router";
import Button from "../Component/Button";
import Container from "../Component/Container";

const LogIn = () => {
  return (
    <div>
      <Header/>
      <NavBarTwo/>
      <Container className="flex gap-32 pt-15 mb-35">
        <div className="w-auto">
          <img src={SignUpImage} alt="" className="w-[805px] h-[781px]" />
        </div>
        <div className="w-[371px] font-[poppins] leading-6 flex flex-col items-start ">
          <h1 className="font-[inter] font-medium text-4xl leading-7.5 tracking-[2px] mt-31.5">
            Log in to Exclusive
          </h1>
          <h4 className="mt-6">Enter your details below</h4>
          <input
            type="email,number"
            placeholder="Email or Phone Number"
            className="border-b-2 border-gray-400 w-92.5 pb-2 mt-10"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 border-gray-400 w-92.5 pb-2 mt-10 mb-10"
          />

            <div className="w-full flex justify-between items-center">
                <Button buttonName="Log In"/>
                <h2 className="text-[#DB4444] cursor-pointer">Forget Password?</h2>
            </div>
          <div className="w-full flex justify-center">
            <div className="flex gap-4 mt-8">
              <p>Don't have an account?</p>
              <Link to="/SignUp" ><button className="border-b-2 border-gray-500 cursor-pointer">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default LogIn
