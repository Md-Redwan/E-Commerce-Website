import Container from "./Container";
import Logo from "../assets/Logo.png";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { IoCartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import {NavLink, Link } from "react-router-dom";
import { LuUser } from "react-icons/lu";



const NavBar = () => {
  const [heart, setHeart] = useState(false);
  const [show, setShow] = useState(false);

  const handleHeartClick = () => {
    setHeart(!heart);
  };

  function handleClick() {
    setShow(!show);
  }

  return (
    <nav className="mt-10 pb-4 border-b-1 border-gray-300">
      <Container>
        <Flex className="relative justify-between items-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <div
              className={`${
                !show ? "hidden" : "block"
              } bg-[#1f2937] text-white w-full absolute top-12 left-0 z-10 text-left px-5 pb-5 pt-3 rounded-lg lg:flex items-center gap-10 lg:text-black lg:static lg:top-0 lg:left-0 lg:px-0 lg:pb-0 lg:pt-0 lg:bg-transparent `}
            >
              <List className="lg:flex lg:gap-12 text-[20px] leading-6 ">
                <NavLink to="/" className="hover:bg-blue-700 hover:rounded-lg px-2 py-2.5 lg:px-0 lg:py-0 lg:hover:bg-transparent">Home</NavLink>
                <NavLink to="/Shop" className="hover:bg-blue-700 hover:rounded-lg px-2 py-2.5 lg:px-0 lg:py-0 lg:hover:bg-transparent">Shop</NavLink>
                <NavLink className="hover:bg-blue-700 hover:rounded-lg px-2 py-2.5 lg:px-0 lg:py-0 lg:hover:bg-transparent">About</NavLink>
                <NavLink className="hover:bg-blue-700 hover:rounded-lg px-2 py-2.5 lg:px-0 lg:py-0 lg:hover:bg-transparent">Contact</NavLink>
                <NavLink className="hover:bg-blue-700 hover:rounded-lg px-2 py-2.5 lg:px-0 lg:py-0 lg:hover:bg-transparent">Sign Up</NavLink>
              </List>
              <div className="lg:flex items-center gap-6">
                <div className="flex bg-[#F5F5F5] items-center rounded-lg gap-4 py-2 px-3 mt-4 lg:ps-7 lg:pe-4 lg:gap-5 lg:py-3.5 lg:mt-0">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="text-[15px] outline-0 leading-4.5 text-black w-full lg:w-fit"
                  />
                  <FiSearch className="w-6 h-6 cursor-pointer text-black" />
                </div>

                <div className="hidden lg:flex justify-around gap-4">
                  <IoHeart
                    onClick={handleHeartClick}
                    className={`w-8 h-8 cursor-pointer rounded-full text-black  transition-colors ${
                      heart ? "text-red-500" : ""
                    }`}
                  />

                  <Link to="/Cart">
                    <IoCartOutline className="w-8 h-8 cursor-pointer" />
                  </Link>

                  <LuUser className="w-8 h-8 cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden justify-between gap-3">
            <IoHeart
              onClick={handleHeartClick}
              className={`w-8 h-8 cursor-pointer rounded-full text-black  transition-colors ${
                heart ? "text-red-500" : ""
              }`}
            />

            <Link to="/Cart">
              <IoCartOutline className="w-8 h-8 cursor-pointer" />
            </Link>
            <LuUser className="w-8 h-8 cursor-pointer"/>
            <HiMiniBars3BottomRight
              onClick={handleClick}
              className="w-8 h-8 lg:hidden block cursor-pointer"
            />
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
