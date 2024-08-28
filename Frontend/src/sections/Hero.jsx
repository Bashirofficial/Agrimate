import React from 'react'
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { downArrow } from "../assets/icons"
import { farmerPic1 } from '../assets/images'
import { useNavigate } from 'react-router-dom'
import { navLinks } from '../constants'

function Hero() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleKnowMoreClick = () => {
    navigate('/SignUp'); // Navigate to the login page
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const aboutSection = navLinks.find(link => link.label === 'About Us')?.href;
  return (
    <section
    id="home"
    className="relative w-full   justify-center mt-2 overflow-hidden
    min-h-screen"
    style={{ 
      boxShadow: "inset 0 10px 40px rgba(0, 0, 0, 0.1)",
      backgroundImage: `url(${farmerPic1})`,
      backgroundSize: "cover",
      }}
    >
      <div 
      className=" justify-center items-start w-70
      max-xl:padding-x padding-x pt-28 ">
        
        <h1 className="font-palanquin text-7xl max-sm:text-[72px] max-sm:leading-[82] font-bold text-white-400 "
        >
        Connecting Farmers
        <br/>
        with Experts for a
        <br/>
        Greener Future
        </h1>
        <p className="font-montserrat text-white text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
        Harvest the Power of Expert Advice
        </p>
        <Button
          className="hover:bg-gray-800"
          backgroundColor="bg-green-800"
          textColor="text-white"  
          label="Know More" 
          iconUrl={arrowRight}
          onClick={handleKnowMoreClick}
          />      
      </div>
      <div 
        className='absolute bottom-1 left-1/2 justify-center transform -translate-x-1/2 z-20 
           cursor-pointer bg-gray-300  rounded-full hover:bg-gray-400 transition-colors duration-300'
        onClick={() => scrollToSection(aboutSection)}>

        <div className='flex  items-center px-5 py-2'>
          
          <img 
          src={downArrow}
          alt='down arrow'
          height={50}
          width={50}
          className="w-8 h-auto"
          />
        </div>
      </div>
      
    </section>
  )
}

export default Hero