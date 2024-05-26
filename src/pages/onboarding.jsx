import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BsStars } from "react-icons/bs";
import {RiClosedCaptioningFill } from 'react-icons/ri'
import { MdMoneyOffCsred, MdKeyboardArrowRight } from "react-icons/md";
import { BiMobileLandscape } from "react-icons/bi";
import { useParams } from 'react-router-dom';

const OnboardingScreen = () => {

 const { id } = useParams();

 const [orientation, setOrientation] = useState(window.screen.orientation.type);
 
 
 useEffect(() => {
  const updateOrientation = () => {
    setOrientation(window.screen.orientation.type);
   // Added debugging statement
   console.log(window.screen.orientation.type)
  };

  updateOrientation(); // Initial update

  window.addEventListener('orientationchange', updateOrientation);

  return () => {
    window.removeEventListener('orientationchange', updateOrientation);
  };
}, []);




    const [eventInformation, setEventInformation] = useState([]);

    const getEventInformation = async() => {
        try{
    const info = await axios.get(`https://sonic-script-api.onrender.com/transcripts/${id}`)
    if(info.data.isStreaming === false){
    
    }
    setEventInformation(info.data)
        }catch(e){
    console.log(e)
        }
      }

      useEffect(()=>{
        getEventInformation()
      }, [])



if (eventInformation === null) {
   
    return <div>Loading...</div>;
  }

  const [iconSize, setIconSize] = useState(56)
  const [marginTop, setMarginTop]  = useState(0)

  useEffect(() => {
if(orientation === 'landscape-primary'){
  console.log("less")
  setIconSize(28)
  setMarginTop(0)
}else if(orientation === "portrait-primary"){
  console.log("greater")
  setMarginTop(20)
}
  }, [orientation])

  console.log(marginTop)
  console.log(window.innerHeight)

  return (
    <section className='h-screen pribacColor text-white'>
<div className='h-1/4 relative'>
    <img className='block w-full h-full object-cover' src="event.png" style={{ margin: 0, padding: 0 }} />
    <div className='absolute top-0 left-0 w-full h-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'flex-end' }}>
        <h2 className=' font-bold text-3xl mx-4 my-4'>{eventInformation?.name}</h2>
    </div>
</div>


<div class={`h-3/4  relative flex flex-col justify-center  items-center ${window.innerHeight > 500 ? 'space-y-16' : 'space-y-4'}`}>



    <h1 className={`text-[24px] mt-[${marginTop}px]  lg:text-[36px] text-center font-bold`}>
        Welcome to Seymour
    </h1>

<section className='space-y-4 mb-4'>
    <div className='flex items-center space-x-5 px-8'>
    <RiClosedCaptioningFill color="white" size={iconSize}/>
        <p>Computer generated caption for live events</p>
    </div>
    <div className='flex items-center space-x-5 px-8'>
    <MdMoneyOffCsred color="white" size={iconSize}/>
        <p>Free for event attendee provided by the venue</p>
    </div>
    <div className='flex items-center space-x-5 px-8'>
    <BiMobileLandscape color="white" size={iconSize}/>

        <p>Captions are best used in landscape</p>
    </div>
</section>
<section className='px-8'>


  <Link  to= {`/home/${id}`}   title="Visit the home page" aria-label="Go to captions">
  <div className='flex justify-center'>
    <div className='bg-purple-400 w-full px-4 py-1 rounded-md border-2 flex justify-center items-center space-x-1 border-white'>
      <h3 className='text-lg md:text-2xl text-center'>View Captions</h3>
      <MdKeyboardArrowRight color='white' size={orientation === "landscape-primary"  ? 28 : 42} />
    </div>
  </div>
  </Link>
</section>


        </div>
    </section>
  )
}

export default OnboardingScreen