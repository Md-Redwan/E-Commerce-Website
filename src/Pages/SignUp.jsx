import React from "react";
import Header from "../Component/Header";
import SignUpImage from "../assets/SignUpImage.png";
import { FcGoogle } from "react-icons/fc";
import Footer from "../Component/Footer";
import NavBarTwo from "../Component/NavBarTwo";
import { Link } from "react-router";
import Container from "../Component/Container";

const SignUp = () => {
  return (
    <div>
      <Header />
      <NavBarTwo/>
      <Container className="flex gap-32 pt-15 mb-35">
        <div className="w-auto">
          <img src={SignUpImage} alt="" className="w-[805px] h-[781px]" />
        </div>
        <div className="w-[371px] font-[poppins] leading-6 flex flex-col items-start ">
          <h1 className="font-[inter] font-medium text-4xl leading-7.5 tracking-[2px] mt-31.5">
            Create an account
          </h1>
          <h4 className="mt-6">Enter your details below</h4>
          <input
            type="text"
            placeholder="Name"
            className="border-b-2 border-gray-400 w-92.5 pb-2 mt-12"
          />
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

          <div className="flex flex-col items-center">
            <button className="py-4 px-30.5 bg-[#DB4444] text-white rounded-sm cursor-pointer">
              Create Account
            </button>

            <button className="flex gap-2 items-center mt-4 py-4 px-21 text-black rounded-sm border-2 border-gray-400 cursor-pointer">
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
            <div className="flex gap-4 mt-8">
              <p>Already have account?</p>
              <Link to="/LogIn" ><button className="border-b-2 border-gray-500 cursor-pointer">Loge in</button></Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default SignUp;
