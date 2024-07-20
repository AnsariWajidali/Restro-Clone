import React, { useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/Hero/Hero.jsx";
import Banner from "./Component/Banner/Banner.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Popup from "./Component/Popup/Popup.jsx";
import AOS from "aos";
import { useState } from "react";
import "aos/dist/aos.css"

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    AOS.refresh();
  }, [])
  

  return (
    <div className=" overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup} />
      <Hero />
      <Banner />
      <About HandlePopup={HandlePopup} />
      <Banner />
      <Contact />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
