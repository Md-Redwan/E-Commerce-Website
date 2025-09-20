import React from 'react'
import Header from '../Component/Header'
import NavBar from '../Component/NavBar'
import Banner from '../Component/Banner'
import FlashSales from '../Component/FlashSales'
import Category from '../Component/Category'
import BestSelling from '../Component/BestSelling'
import Music from '../Component/Music'
import OurProducts from '../Component/OurProducts'

const Home = () => {
  return (
    <>
       <Header/>
       <NavBar/>
       <Banner/>
       <FlashSales/>
       <Category/>
       <BestSelling/>
       <Music/>
       <OurProducts/>
    </>
  )
}

export default Home
