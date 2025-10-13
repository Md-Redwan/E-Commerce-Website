import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import Container from "../Component/Container";
import List from "../Component/List";
import ListItem from "../Component/ListItem";
import { GoDotFill } from "react-icons/go";
import Pagination from "../Component/Pagination";
import Skeleton from "../Component/Skeleton";
import BreadCrumb from "../Component/BreadCrumb";
import { useDispatch } from 'react-redux'
import { ProductReducer } from "../ProductSlices/ProductSlices";



const Shop = () => {

  const [products, setProducts] = useState([]);
  
  const [loading,setLoading] = useState(false);

  const [value,setValue] = useState(6)

  const [category, setCategory] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
       .then((data)=>{
        setProducts(data.products)
        dispatch(ProductReducer(data.products))
        setLoading(true)
       });
      
  },[])

  useEffect(()=>{
    const uniqueCategories = [...new Set(products.map(item => item.category))]
    setCategory(uniqueCategories)
  },[products])

  return (
    <div>
      <Header />
      <NavBar />
      <Container className="font-[poppins]">
        <BreadCrumb/>
        <div className="flex justify-between mt-12.5">
          <div className="w-[25%]">
            <div>
              <h2 className="text-xl font-bold">Shop by Category</h2>
              <List className="mt-[15px] flex flex-col gap-4 leading-6">
                {/* <ListItem>Woman’s Fashion</ListItem>
                <ListItem>Men’s Fashion</ListItem>
                <ListItem>Electronics</ListItem>
                <ListItem>Home & Lifestyle</ListItem>
                <ListItem>Medicine</ListItem>
                <ListItem>Sports & Outdoor</ListItem>
                <ListItem>Baby’s & Toys</ListItem>
                <ListItem>Groceries</ListItem>
                <ListItem>Health & Beauty</ListItem> */}

                { category.map((item,idx)=>(
                  <ListItem key={idx} className="pt-[15px] capitalize cursor-pointer" >{item}</ListItem>
                ))}
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
                onChange={(e)=> setValue(e.target.value)}
                className="px-[43px] py-[3px] border-1 border-[#D9D9D9] rounded-[5px]"
              >
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="">
              {
                loading ?
                  <Pagination itemsPerPage={value} />
                  : <div className="flex flex-wrap mt-7.5 gap-7.5">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                  </div>
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
