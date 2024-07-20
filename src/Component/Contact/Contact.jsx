import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div data-aos="fade-down" className="mt-10 mb-36 bg-gradient-to-b from-primary to-primaryDark rounded-3xl mx-60 ">
        <div>
          <h1 className="py-8 tracking-wider text-4xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
        <div className=" pb-16 flex justify-center items-center gap-60 text-white">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <IoLocationSharp className=" cursor-pointer text-4xl" />
            </div>

            <p>#92, 3rd Main, Virgo Nagar, Post,</p>
            <p>Seegehalli, Bengaluru, Karnataka 560049</p>
          </div>

          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <MdEmail className=" cursor-pointer text-4xl" />
            </div>

            <p>info@goodfood.com</p>
            <p>info@goodfood.com</p>
          </div>

          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <FaPhone className=" cursor-pointer text-4xl" />
            </div>

            <p>+91 9643224232 - Sales and Services</p>
            <p>+91 9623423436 - Hiring Queries</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
