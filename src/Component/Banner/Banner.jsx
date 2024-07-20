import React from "react";
import Apple from "../../assets/png/apple.png";
import Kiwi from "../../assets/png/kiwi.png";
import Leaf from "../../assets/png/leaf.png";
import lemon from "../../assets/png/lemon.png";
import tomato from "../../assets/png/tomato.png";
import PrimaryButton from "../Shared/PrimaryButton";



const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div className="relative z-20">
          <h1 data-aos="fade-up" data-aos-delay="500"  className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
            Taste the healthy Diffrence
          </h1>
        </div>

        {/* Text Content Section */}

        <div className="space-y-7">
          <div  className="grid grid-cols-1 sm:grid-cols-2 aos-init aos-animate gap-4 py-10">
            <div data-aos="fade-up" data-aos-delay="500" >
              <p>
                We know that{" "}
                <span className="text-primary font-semibold"> time</span> is the
                greatest value in the Modern world. Our healthy Meal plan
                delivery service Good food in Miami is the answer for those who
                want to eat healthily, saving time for buying food and preparing
                Delicious, healthy meals.
              </p>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-1 aos-init aos-animate sm:grid-cols-2 gap-4 py-10">
            <div></div>
            <div data-aos="fade-up" data-aos-delay="500" >
              <p>
                We know that{" "}
                <span   className="text-primary font-semibold"> time</span> is the
                greatest value in the Modern world. Our healthy Meal plan
                delivery service Good food in Miami is the answer for those who
                want to eat healthily, saving time for buying food and preparing
                Delicious, healthy meals.
              </p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className=" flex justify-center mt-10 sm:mt-14">
          <PrimaryButton />
        </div>

        {/* BG fruits Section */}

        <div className=" absolute left-15 top-2 opacity-50 sm:left-0 sm:bottom-0 sm:opacity-100">
          <img data-aos="fade-up" className=" max-w-[170px]" src={Leaf} alt="" />
        </div>

        <div className=" absolute right-15 overflow-hidden top-2 opacity-50 sm:right-0 sm:bottom-0 sm:opacity-100">
          <img data-aos="fade-up" className=" max-w-[190px]" src={lemon} alt="" />
        </div>

        <div className=" flex gap-60 absolute left-80 bottom-16 top-80 opacity-50 sm:left-0 sm:bottom-0 sm:opacity-100">
          <img data-aos="fade-right" className=" max-w-[260px]" src={tomato} alt="" />
          <img data-aos="fade-up" className="max-w-[170px] max-h-[170px]" src={Kiwi} alt="" />
        </div>

        <div className=" absolute right-10 bottom-10 opacity-50 sm:right-0 sm:block overflow-hidden sm:opacity-100">
          <img data-aos="fade-left" className=" max-w-[190px]" src={Apple} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
