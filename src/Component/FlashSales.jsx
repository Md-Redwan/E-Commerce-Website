import React from "react";
import Slider from "react-slick";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Container from './Container'
import Flex from './Flex'
import Monitor from "../assets/Monitor.png";
import Gamepad from "../assets/Gamepad.png";
import Keyboard from "../assets/Keyboard.png";
import Chair from "../assets/Chair.png";



import TitleCard from './TitleCard';
import CountDown from './CountDown';
import ItemCard from './ItemCard';



const FlashSales = () => {

  function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden w-11.5 h-11.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center absolute -top-19 right-5.5 cursor-pointer"
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
      className="hidden w-11.5 h-11.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center absolute -top-19 right-19 cursor-pointer"
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
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="mt-38.5 ">
      <Container className="pb-15 border-b-1 border-[#cfcece]">
        <div className="lg:flex justify-between items-end">
          <div className="lg:flex items-end gap-22">
            
              <TitleCard titleName="Today's" titleHeading="Flash Sales"/>
            
              <CountDown/>
            
          </div>
          
        </div>
        <Slider {...settings} className="mt-10 flex gap-2">
          <ItemCard className="py-1 px-3" productLink="/G92Gamepad" image={Gamepad} discount="-40%"  productName="HAVIT HV-G92 Gamepad"  discountPrice= "$120" price= "$160" review="88"/>

          <ItemCard className="py-1 px-3" image={Keyboard} discount="-35%"  productName="AK-900 Wired Keyboard"  discountPrice= "$960" price= "$1160" review="75"/>

          <ItemCard className="py-1 px-3" image={Monitor} discount="-30%"  productName="IPS LCD Gaming Monitor"  discountPrice= "$370" price= "$400" review="99"/>

          <ItemCard className="py-1 px-3" image={Chair} discount="-25%"  productName="S-Series Comfort Chair"  discountPrice= "$375" price= "$400" review="99"/>


          
          <ItemCard className="py-1 px-3" image={Gamepad} discount="-40%"  productName="HAVIT HV-G92 Gamepad"  discountPrice= "$120" price= "$160" review="88"/>

          <ItemCard className="py-1 px-3" image={Keyboard} discount="-35%"  productName="AK-900 Wired Keyboard"  discountPrice= "$960" price= "$1160" review="75"/>

          <ItemCard className="py-1 px-3" image={Monitor} discount="-30%"  productName="IPS LCD Gaming Monitor"  discountPrice= "$370" price= "$400" review="99"/>

          <ItemCard className="py-1 px-3" image={Chair} discount="-25%"  productName="S-Series Comfort Chair"  discountPrice= "$375" price= "$400" review="99"/>
        </Slider>

        <div className="flex justify-center mt-[37px]">
          <button className="bg-[#DB4444] font-[poppins] font-medium leading-6 text-white py-4 px-12 rounded-sm cursor-pointer">View All Products</button>
        </div>
      </Container>
    </div>
  );
}

export default FlashSales


