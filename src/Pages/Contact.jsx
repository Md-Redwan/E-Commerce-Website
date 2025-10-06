import React from "react";
import Header from "../Component/Header";
import NavBar from "../Component/NavBar";
import Container from "../Component/Container";
import { FaSquarePhone } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import Button from "../Component/Button";
import Footer from "../Component/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Container className="pb-35">
        <p className="mt-20 text-[#7D8184] text-[14px] leading-[21px]">
          Home / <span className="text-black">Contact</span>
        </p>
        <div className="flex gap-7.5 mt-20">
          <div className="w-[30%] py-10 px-8.5 box-shadow rounded-sm font-[poppins]">
            <div className="pb-8 border-b-2 border-b-gray-400">
              <div className="flex items-center gap-4">
                <FaSquarePhone className="text-[40px] text-[#DB4444]" />
                <h4 className="font-medium leading-6">Call To Us</h4>
              </div>
              <p className="text-sm leading-[21px] mt-6 mb-4">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm leading-[21px]">Phone: +8801611112222</p>
            </div>
            <div className="pt-8">
              <div className="flex items-center gap-4">
                <ImMail className="text-[40px] text-[#DB4444]" />
                <h4 className="font-medium leading-6">Call To Us</h4>
              </div>
              <p className="text-sm leading-[21px] mt-6 mb-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm leading-[21px]">
                Emails: customer@exclusive.com
              </p>
              <p className="text-sm leading-[21px] mt-4">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
          <div className="w-[70%] box-shadow py-10 px-8">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#F5F5F5] py-[13px] px-[16px] rounded-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-[#F5F5F5] py-[13px] px-[16px] rounded-sm"
              />
              <input
                type="number"
                placeholder="Your Number"
                required
                className="bg-[#F5F5F5] py-[13px] px-[16px] rounded-sm"
              />
            </div>
            <div className="mt-8">
              <textarea
                rows="8"
                className="bg-[#F5F5F5] px-4 pt-[13px] w-full rounded-sm  text-black "
                placeholder="Your Massage"
              ></textarea>
              <div className="flex justify-end mt-8">
                <Button buttonName="Send Massage"/>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default Contact;
