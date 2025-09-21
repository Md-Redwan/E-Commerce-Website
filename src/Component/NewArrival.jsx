import React from "react";
import Container from "./Container";
import TitleCard from "./TitleCard";
import PS5 from "../assets/PS5.png";
import WomenCollections from "../assets/WomenCollections.png";
import Perfume from "../assets/Perfume.png";
import Speakers from "../assets/Speakers.png";

const NewArrival = () => {
  return (
    <div className="mt-28 mb-20">
      <Container>
        <TitleCard titleName="Featured" titleHeading="New Arrival" />
        <div className="mt-15 lg:flex lg:justify-between justify-center">
          <div>
            <img src={PS5} alt="" className="cursor-pointer" />
          </div>
          <div className="mt-5 lg:mt-0">
            <div>
              <img src={WomenCollections} alt="" className="cursor-pointer" />
            </div>
            <div className="flex justify-center">
              <div className="flex gap-5 lg:justify-between mt-8">
                <img
                  src={Speakers}
                  alt=""
                  className="cursor-pointer w-35 sm:w-43  md:w-67.5 h-auto"
                />
                <img
                  src={Perfume}
                  alt=""
                  className="cursor-pointer w-35 sm:w-43  md:w-67.5 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
