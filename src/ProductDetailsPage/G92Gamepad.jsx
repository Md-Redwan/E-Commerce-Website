import Header from "../Component/Header";
import NavBar from "../Component/NavBar";
import Container from "../Component/Container";
import G92picMain from "../assets/G92picMain.png";
import G92pic1 from "../assets/G92pic1.png";
import G92pic2 from "../assets/G92pic2.png";
import G92pic3 from "../assets/G92pic3.png";
import G92pic4 from "../assets/G92pic4.png";
import { FaStar } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";
import Flex from "../Component/Flex";
import { IoHeart } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";



const G92Gamepad = () => {
  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState(0);

  const handleHeartClick = () => {
    setHeart(!heart);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="font-[poppins]">
      <Header />
      <NavBar />
      <Container>
        <p className="mt-20 text-[#7D8184] text-[14px] leading-[21px]">
          Account / Gaming /{" "}
          <span className="text-black">Havic HV G-92 Gamepad</span>
        </p>
        <div className="flex justify-between mt-20">
          <div className="w-[55%] flex gap-7.5">
            <div className="flex flex-col gap-4">
              <img src={G92pic1} alt="" />
              <img src={G92pic2} alt="" />
              <img src={G92pic3} alt="" />
              <img src={G92pic4} alt="" />
            </div>
            <div>
              <img src={G92picMain} alt="" />
            </div>
          </div>
          <div className="w-[35%]">
            <h2 className="font-semibold font-[inter] text-2xl leading-6 tracking-[3px]">
              Havic HV G-92 Gamepad
            </h2>
            <div className="flex items-center gap-1 mt-4">
              <FaStar className="text-[#FFAD33]" />
              <FaStar className="text-[#FFAD33]" />
              <FaStar className="text-[#FFAD33]" />
              <FaStar className="text-[#FFAD33]" />
              <FaStar className="text-[#FFAD33]" />
              <p className="flex gap-4 items-center ml-2 text-[#818081] text-[14px] leading-[21px]">
                (150 Reviews)
                <span className="text-black text-[16px]">|</span>
                <span className="text-[#00FF66]">In Stock</span>
              </p>
            </div>
            <h5 className="text-2xl font-[inter] leading-6 tracking-[3px] mt-4">
              $192.00
            </h5>
            <p className="text-sm leading-[21px] py-6 border-b-1 border-[#7D8184]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="flex gap-6 mt-6">
              <h6 className="font-[inter] text-[20px] leading-5 tracking-[2px]">
                Colours:
              </h6>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-[#A0BCE0] hover:border-2 border-purple-700"></div>
                <div className="w-5 h-5 rounded-full bg-[#E07575] hover:border-2 border-purple-700"></div>
              </div>
            </div>
            <div className="flex gap-6 items-center mt-6">
              <h4 className="font-[inter] text-[20px] leading-5 tracking-[2px]">
                Size:
              </h4>
              <div className="flex gap-4">
                <div className="font-[poppins] text-sm font-medium leading-[21px] w-8 h-8 border-1 border-[#7D8184] rounded-sm flex justify-center items-center hover:bg-[#DB4444] hover:text-white">
                  <p>XS</p>
                </div>
                <div className="font-[poppins] text-sm font-medium leading-[21px] w-8 h-8 border-1 border-[#7D8184] rounded-sm flex justify-center items-center hover:bg-[#DB4444] hover:text-white">
                  <p>S</p>
                </div>
                <div className="font-[poppins] text-sm font-medium leading-[21px] w-8 h-8 border-1 border-[#7D8184] rounded-sm flex justify-center items-center hover:bg-[#DB4444] hover:text-white">
                  <p>M</p>
                </div>
                <div className="font-[poppins] text-sm font-medium leading-[21px] w-8 h-8 border-1 border-[#7D8184] rounded-sm flex justify-center items-center hover:bg-[#DB4444] hover:text-white">
                  <p>L</p>
                </div>
                <div className="font-[poppins] text-sm font-medium leading-[21px] w-8 h-8 border-1 border-[#7D8184] rounded-sm flex justify-center items-center hover:bg-[#DB4444] hover:text-white">
                  <p>XL</p>
                </div>
              </div>
            </div>
            <Flex className="justify-between items-center  mt-6">
              <div className="flex justify-between items-center w-[159px] border-1 border-gray-400 rounded-sm">
                <div className="flex justify-center items-center h-11 w-10 text-2xl border-r-1 border-gray-500 hover:bg-[#DB4444] hover:text-white">
                  <FiMinus onClick={decrement} />
                </div>
                <p className="font-[poppins leading-7 text-[20px] font-medium">
                  {count}
                </p>
                <div className="flex justify-center items-center h-11 w-10 text-2xl border-l-1 border-gray-500 hover:bg-[#DB4444] hover:text-white">
                  <FiPlus onClick={increment} />
                </div>
              </div>
              <button className="py-2.5 px-12 border-1 border-gray-400 rounded-sm hover:bg-[#DB4444] hover:text-white">
                Buy Now
              </button>
              <div className="w-11 h-11 border-1 border-gray-400 flex justify-center items-center rounded-sm">
                <IoHeart
                  onClick={handleHeartClick}
                  className={`w-8 h-8 cursor-pointer text-black  transition-colors ${
                    heart ? "text-red-500" : ""
                  }`}
                />
              </div>
            </Flex>
            <div className="border-1 border-gray-400 rounded-sm font-[poppins] font-medium">
              <div>
                <TbTruckDelivery className="text-[40px]"/>
                <div>
                  <p className=" leading-6">Free Delivery</p>
                  <p className="leading-4.5 text-xs">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default G92Gamepad;
