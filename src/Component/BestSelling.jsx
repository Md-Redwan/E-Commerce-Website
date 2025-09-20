import React from 'react'
import Slider from "react-slick";
import Container from './Container'
import TitleCard from './TitleCard'
import Button from './Button'
import ItemCard from './ItemCard'
import Coat from '../assets/Coat.png'
import Bag from '../assets/Bag.png'
import CpuCooler from '../assets/CpuCooler.png'
import BookSelf from '../assets/BookSelf.png'
import ButtonTwo from './ButtonTwo';

const BestSelling = () => {


    var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
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
    <div className='mt-17.5'>
      <Container>
        <div className=' lg:flex lg:justify-between lg:items-end'>
            <TitleCard className="hidden" titleName="This Month" titleHeading="Best Selling Products"/>
            <Button buttonName="View All"/>
        </div>

        <Slider {...settings} className="mt-10 flex gap-2">
            <ItemCard image={Coat}  productName="The north coat"  discountPrice= "$260" price= "$360" review="65"/>
            <ItemCard image={Bag}  productName="Gucci duffle bag"  discountPrice= "$960" price= "$1160" review="70"/>
            <ItemCard image={CpuCooler}  productName="RGB liquid CPU Cooler"  discountPrice= "$160" price= "$170" review="90"/>
            <ItemCard image={BookSelf}  productName="Small BookSelf" discountPrice= "$360" review="58"/>


            <ItemCard image={Coat}  productName="The north coat"  discountPrice= "$260" price= "$360" review="65"/>
            <ItemCard image={Bag}  productName="Gucci duffle bag"  discountPrice= "$960" price= "$1160" review="70"/>
            <ItemCard image={CpuCooler}  productName="RGB liquid CPU Cooler"  discountPrice= "$160" price= "$170" review="90"/>
            <ItemCard image={BookSelf}  productName="Small BookSelf" discountPrice= "$360" review="58"/>
        </Slider>
        <div className='mt-10 flex justify-center'>
            <ButtonTwo buttonTwoName="View All"/>
        </div>
      </Container>
    </div>
  )
}

export default BestSelling
