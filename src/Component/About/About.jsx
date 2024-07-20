import React from "react";
import AboutBG from "../../assets/AboutBG.jpeg";
import { FaUser } from "react-icons/fa";

const BgStyle = {
  backgroundImage: `url(${AboutBG})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const About = ({HandlePopup}) => {
  return (
    <>
      <div style={BgStyle} className=" pb-20 relative ">
        <div>
          <h1 className="py-8 tracking-wider text-4xl font-bold text-white text-center">
            About us
          </h1>
        </div>
        <div className="bg-white p-14 pb-30 container">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              doloribus blanditiis culpa ipsa autem! Quas in ut cumque quo, eum
              ab ea inventore voluptatum at dignissimos repellat placeat quaerat
              veniam fugit? Quasi quidem, saepe tenetur quam nihil velit nobis
              eum ad hic odio mollitia itaque consectetur eaque unde cumque
              possimus reprehenderit quas beatae praesentium consequatur? Eum
              magni doloremque obcaecati necessitatibus soluta doloribus quos
              temporibus aperiam, at harum earum, commodi, eligendi omnis fugiat
              error exercitationem ullam labore culpa aliquam possimus pariatur?
              Atque repudiandae beatae animi ducimus voluptate minima temporibus
              neque libero dolore ipsam, accusamus omnis ullam id aspernatur,
              quas fuga esse.
            </p>
          </div>
          <div className="flex cursor-pointer justify-center items-center pt-14">
          <button onClick={HandlePopup} className="flex cursor-pointer items-center gap-2 justify-center font-semibold bg-primary p-2 px-5 text-gray-200 ">
                <FaUser/>
                My Login
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
