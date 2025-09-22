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
        <div className="mt-15 flex flex-col items-center lg:flex-row lg:justify-evenly xl:justify-between">
          <div>
            <img src={PS5} alt="" className="cursor-pointer h-auto lg:w-[450px] xl:w-[570px]" />
          </div>
          <div className="mt-5 lg:mt-0">
            <div>
              <img src={WomenCollections} alt="" className="cursor-pointer lg:w-[500px] xl:w-[570px]" />
            </div>
            
            <div className="flex justify-evenly lg:justify-between mt-5 xl:mt-8">
                <img
                  src={Speakers}
                  alt=""
                  className="cursor-pointer w-35 sm:w-43 md:w-60 lg:w-50 xl:w-67.5 h-auto lg:h-[200px] xl:h-auto"
                />
                <img
                  src={Perfume}
                  alt=""
                  className="cursor-pointer w-35 sm:w-43 md:w-60 lg:w-55 h-[] xl:w-67.5 h-auto lg:h-[200px] xl:h-auto"
                />
            </div>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrival;
