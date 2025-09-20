import React from "react";
import Slider from "react-slick";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Container from "./Container";
import Flex from "./Flex";
import DogFood from "../assets/DogFood.png";
import Camera from "../assets/Camera.png";
import Laptop from "../assets/Laptop.png";
import GroomingProducts from "../assets/GroomingProducts.png";

import KidsCar from "../assets/KidsCar.png";
import SoccerCleats from "../assets/SoccerCleats.png";
import GP11Gamepad from "../assets/GP11Gamepad.png";
import Jacket from "../assets/Jacket.png";

import TitleCard from "./TitleCard";
import CountDown from "./CountDown";
import ItemCard from "./ItemCard";

const FlashSales = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="hidden w-11.5 h-11.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center absolute -top-10 right-5.5 cursor-pointer"
        onClick={onClick}
      >
        <FiArrowRight className="text-2xl " />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="hidden w-11.5 h-11.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center absolute -top-10 right-19 cursor-pointer"
        onClick={onClick}
      >
        <FiArrowLeft className="text-2xl " />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="mt-38.5 ">
      <Container className="pb-15 border-b-1 border-[#cfcece]">
        <div className="lg:flex justify-between items-end">
          <div className="lg:flex items-end gap-22">
            <TitleCard
              titleName="Our Products"
              titleHeading="Explore Our Products"
            />
          </div>
        </div>

        <Slider {...settings} className=" flex gap-2">
          {/* first column */}
          <div>
            <ItemCard
              image={DogFood}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={KidsCar}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>

          {/* second column */}
          <div>
            <ItemCard
              image={Camera}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={SoccerCleats}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>


          {/* third column */}
          <div>
            <ItemCard
              image={Laptop}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={GP11Gamepad}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>


          {/* fourth column */}
          <div>
            <ItemCard
              image={GroomingProducts}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={Jacket}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>


          {/* fifth column */}
          <div>
            <ItemCard
              image={DogFood}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={KidsCar}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>
          {/* sixth column */}
          <div>
            <ItemCard
              image={Camera}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={SoccerCleats}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>

          {/* seventh column */}
          <div>
            <ItemCard
              image={Laptop}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={GP11Gamepad}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>

          {/* eighth column */}
          <div>
            <ItemCard
              image={GroomingProducts}
              productName="HAVIT HV-G92 Gamepad"
              discountPrice="$120"
              review="88"
            />

            <ItemCard
              image={Jacket}
              productName="AK-900 Wired Keyboard"
              discountPrice="$960"
              review="75"
            />
          </div>
        </Slider>

        <div className="flex justify-center mt-[37px]">
          <button className="bg-[#DB4444] font-[poppins] font-medium leading-6 text-white py-4 px-12 rounded-sm cursor-pointer">
            View All Products
          </button>
        </div>
      </Container>
    </div>
  );
};

export default FlashSales;
