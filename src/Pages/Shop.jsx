import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import Container from "../Component/Container";
import List from "../Component/List";
import ListItem from "../Component/ListItem";
import { GoDotFill } from "react-icons/go";

import Pagination from "../Component/Pagination";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data)=>{
        setProducts(data.products)
      });
  }, []);
  console.log(products)

  return (
    <div>
      <Header />
      <NavBar />
      <Container className="font-[poppins]">
        <p className="mt-20 text-[#7D8184] text-[14px] leading-[21px]">
          home / shop
        </p>
        <div className="flex justify-between mt-12.5">
          <div className="w-[25%]">
            <div>
              <h2 className="text-xl font-bold">Shop by Category</h2>
              <List className="mt-[15px] flex flex-col gap-4 leading-6">
                <ListItem>Woman’s Fashion</ListItem>
                <ListItem>Men’s Fashion</ListItem>
                <ListItem>Electronics</ListItem>
                <ListItem>Home & Lifestyle</ListItem>
                <ListItem>Medicine</ListItem>
                <ListItem>Sports & Outdoor</ListItem>
                <ListItem>Baby’s & Toys</ListItem>
                <ListItem>Groceries</ListItem>
                <ListItem>Health & Beauty</ListItem>
              </List>
            </div>
            <div className="mt-10">
              <h2 className="text-xl font-bold">Shop by Color</h2>
              <List className="leading-7.5 text-[#767676] mt-[15px]">
                <ListItem className="flex gap-2.5 items-center">
                  <GoDotFill className="text-[20px] text-black" />
                  Color 1
                </ListItem>
                <ListItem className="flex gap-2.5 items-center py-4.5">
                  <GoDotFill className="text-[20px] text-[#FF0000]" />
                  Color 2
                </ListItem>
                <ListItem className="flex gap-2.5 items-center">
                  <GoDotFill className="text-[20px] text-[#00FF38]" />
                  Color 3
                </ListItem>
              </List>
            </div>
          </div>
          <div className="w-[75%]">
            <div className="flex gap-3 justify-end items-center">
              <h5 className="leading-6">Show :</h5>
              <select
                name=""
                id=""
                className="px-[43px] py-[3px] border-1 border-[#D9D9D9] rounded-[5px]"
              >
                <option value="">6</option>
                <option value="">9</option>
                <option value="">12</option>
              </select>
            </div>
            <div className="">
              {
                // products.map((item)=>{
                //   return(
                
                //   )
                // })
                  <Pagination itemsPerPage={6} products={products}/>
              }
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default Shop;
