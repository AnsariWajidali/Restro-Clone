import React from 'react'
import HeroImg from '../../assets/hero.png'
import PrimaryButton from '../Shared/PrimaryButton'
import HeroBg from '../../assets/heroBg.png'


const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%"
};


const Hero = () => {
  return (
    <>

    <div style={BgStyle} className=' relative z-[-1]'>
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]"> 
          {/* Text-Content-Section */}
          <div className=' space-y-4 text-dark order-1 sm:order-1'>
            <h1 data-aos="fade-up" className='text-5xl font-sem'>Freash & Healthy Meal Plan{" "} <span className=' font-cursive text-secondary text-7xl'>Delivery </span>{" "} in Miami</h1>
            <p data-aos="fade-down" className=' lg:pr-64'>Delicious Meals Delivered to Your Door From $132.95 per week</p>
            <PrimaryButton data-aos="fade-up"/>
          </div>
          {/* Image-Section */}
          <div data-aos="zoom-in" data-aos-delay="500" className=' relative z-30 order-1 sm:order-2'>
            <img src={HeroImg} className='w-full sm:scale-100 sm:translate-y-16' alt="" />
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Hero
