
import { farmerPic4 } from "../assets/images";
import Button from "../components/Button";
import {  blob2 }  from "../assets/icons";

function AboutUs() {
  return (
    <section
    id='about-us'
    
  >
  
  <div className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container '>
    <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        
        <span className='text-green-700'> About </span>
        <span className='text-green-700'>Us </span> 
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
      Welcome to Agrimate, your trusted platform for connecting farmers with agricultural experts. 
      Our mission is to empower farmers by providing access to valuable knowledge, resources, and a 
      supportive community.
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
      Join us on Agrimate and be a part of a community dedicated to making a difference in the world of farming. 
      </p>
      <div className='mt-11'>
        <Button label='View details' />
      </div>
    </div>

    <div className='flex-1 flex justify-center items-center'>
    <img 
      src={ blob2 }
      className="absolute"
      z-index="-10"
    />
    
    <img
        src={farmerPic4}
        alt='product detail'
        width={400}
        height={100}
        className='relative object-cover object-center  h-full max-h-[400px]'
        z-index="50"
        
      />
    </div>
  </div>
  </section>
  )
}

export default AboutUs