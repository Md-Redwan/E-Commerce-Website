import React from "react";
import Slider from "react-slick";
import Container from './Container'
import TitleCard from './TitleCard'
import CategoryCard from './CategoryCard'
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesLight } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const Category = () => {

   function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center absolute z-10 top-[35%] right-0 lg:-top-23 lg:right-5.5 cursor-pointer"
        onClick={onClick}
      >
        <FiArrowRight className="text-2xl "/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className=" w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center absolute z-10 top-[35%] lg:-top-23 lg:right-19 cursor-pointer"
        onClick={onClick}
      >
        <FiArrowLeft className="text-2xl "/>
      </div>
    );
  }

  
    var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      }
    ]
  };



  return (
    <div className='mt-20'>
      <Container className="pb-15 border-b-1 border-[#cfcece]">
        <TitleCard titleName="Categories" titleHeading="Browse By Category"/>

        <Slider {...settings} className="mt-15">
            <CategoryCard categoryIcon={<IoIosPhonePortrait/>} categoryName="Phones"/>
            <CategoryCard categoryIcon={<HiOutlineComputerDesktop/>} categoryName="Computers"/>
            <CategoryCard categoryIcon={<BsSmartwatch/>} categoryName="SmartWatch"/>
            <CategoryCard categoryIcon={<CiCamera/>} categoryName="Camera"/>
            <CategoryCard categoryIcon={<PiHeadphonesLight/>} categoryName="HeadPhones"/>
            <CategoryCard categoryIcon={<LuGamepad/>} categoryName="Gaming"/>


            <CategoryCard categoryIcon={<IoIosPhonePortrait/>} categoryName="Phones"/>
            <CategoryCard categoryIcon={<HiOutlineComputerDesktop/>} categoryName="Computers"/>
            <CategoryCard categoryIcon={<BsSmartwatch/>} categoryName="SmartWatch"/>
            <CategoryCard categoryIcon={<CiCamera/>} categoryName="Camera"/>
            <CategoryCard categoryIcon={<PiHeadphonesLight/>} categoryName="HeadPhones"/>
            <CategoryCard categoryIcon={<LuGamepad/>} categoryName="Gaming"/>
        </Slider>
      </Container>
    </div>
  )
}

export default Category
