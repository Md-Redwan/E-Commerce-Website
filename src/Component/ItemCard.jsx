import React from "react";
import Flex from "./Flex";

import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router";



const ItemCard = ({image,discount,productName,discountPrice,price,review,productLink,percentage,className,dollar}) => {
  
  const navigate = useNavigate();
  
  function handleProductDetails() {
    navigate("/Productdetails")
  }

  return (
    <div className="flex justify-center mt-15">
      <div className="w-auto h-auto lg:w-[270px] lg:h-[350px] group font-[poppins]" onClick={handleProductDetails}>
        <div className="relative overflow-hidden bg-[#F5F5F5] rounded-sm">
          <img src={image} alt="" className="w-full"/>
          <h2 className={` bg-[#DB4444] leading-4.5 text-xs text-white inline rounded-sm absolute top-3 left-3 ${className}`}>
            {discount}{percentage}
          </h2>
          <div className="absolute top-3 right-3">
            <div className="w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center text-2xl cursor-pointer">
              <IoHeartOutline />
            </div>
            <div className="w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center mt-2 text-2xl cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
          <div className="font-medium leading-6 text-white bg-black text-center py-2 rounded-b-sm absolute -bottom-10 w-full group-hover:bottom-0 duration-200 ease-linear">
            <a href="#">Add To Cart</a>
          </div>
        </div>
        
        <Link to={productLink} className="leading-6 font-medium mt-4">{productName}</Link>
        <Flex className="font-medium gap-3 mt-2">
          <h3 className="text-[#DB4444] leading-6">{dollar}{discountPrice}</h3>
          <h3 className="text-[#818081] leading-6 line-through">{dollar}{price}</h3>
        </Flex>
        <div className="flex items-center gap-1 mt-2">
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <FaStar className="text-[#FFAD33]" />
          <p className="ml-2 text-[#818081] font-semibold text-[14px] leading-[21px]">
            ({review})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
