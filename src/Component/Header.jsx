import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className=" bg-black text-white text-[14px] leading-5 font-normal  ">
        <Container>
          <div className="flex items-center">
            <div className="w-[80%] flex justify-center py-3  ">
              <h5>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!{" "}
                <a
                  href="#"
                  className="font-semibold text-[14px] leading-6 underline"
                >
                  ShopNow
                </a>
              </h5>
            </div>
            <div className="w-[20%] flex justify-end">
              <select name="" id="" className="bg-black">
                <option value="">English</option>
                <option value="">Bangla</option>
              </select>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
