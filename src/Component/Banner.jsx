import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { IoIosArrowForward } from "react-icons/io";
import bannerImg1 from "../assets/bannerImg1.webp";
import bannerImg2 from "../assets/bannerImg2.webp";
import bannerImg3 from "../assets/bannerImg3.webp";
import bannerImg4 from "../assets/bannerImg4.webp";
import { BiCategory } from "react-icons/bi";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul className="absolute -top-15 left-[38%] lg:-top-20 lg:left-[45%]"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className="w-[12px] h-[12px] rounded-full bg-[#7f7f7f] flex gap-3"
      >
        {}
      </div>
    )
  };

  const [showCategory, setShowCategory] = useState(true);
  function handleCategory() {
    setShowCategory(!showCategory)
  }

  return (
    <div>
      <Container>
        <div className="lg:flex justify-between">
            <div className="lg:hidden flex text-[20px] font-medium gap-2 items-center">
              <BiCategory onClick={handleCategory} className="w-8 h-8 cursor-pointer"/>Category
            </div>
          <div className={` ${showCategory ? "hidden" : "block"} lg:block lg:w-[20%] lg:border-r-1 lg:border-gray-300`}>
            <List className="text-[18px] pr-5.5 mt-10 flex flex-col gap-4">
              <ListItem className="flex gap-10 items-center">
                Woman’s Fashion
                <IoIosArrowForward className="text-2xl cursor-pointer" />
              </ListItem>
              <ListItem className="flex gap-16 items-center">
                Men’s Fashion
                <IoIosArrowForward className="text-2xl cursor-pointer" />
              </ListItem>
              <ListItem>Electronics</ListItem>
              <ListItem>Home & Lifestyle</ListItem>
              <ListItem>Medicine</ListItem>
              <ListItem>Sports & Outdoor</ListItem>
              <ListItem>Baby’s & Toys</ListItem>
              <ListItem>Groceries</ListItem>
              <ListItem>Health</ListItem>
              <ListItem>Beauty</ListItem>
            </List>
          </div>
          <div className="lg:w-[70%] mt-5 rounded-lg">
            <Slider {...settings}>
              <div >
                <img className="rounded-lg" src={bannerImg1} alt="" />
              </div>
              <div>
                <img className="rounded-lg" src={bannerImg2} alt="" />
              </div>
              <div>
                <img className="rounded-lg" src={bannerImg3} alt="" />
              </div>
              <div>
                <img className="rounded-lg" src={bannerImg4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
