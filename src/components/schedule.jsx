import React, { useEffect, useState } from 'react'

import { FullSettingScreen } from './setting/fullSetting'

const ScheduleScreen = ({data, showSetting}) => {
  const [orientation, setOrientation] = useState(window.screen.orientation.type);
  
  const [boxWidth, setBoxWidth] = useState(450)
 
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



  


  useEffect(() => {
    if(orientation === 'landscape-primary' && window.innerWidth > 600){
      console.log("less")
    setBoxWidth(550)
    }else if(orientation === "portrait-primary" && window.innerWidth < 600){
    setBoxWidth(300)
    }else if(orientation === "portrait-secondary" && window.innerWidth > 600){
      setBoxWidth(550)
    }
  }, [orientation])

  return (
<div>
  {
    showSetting? <FullSettingScreen /> :    <div className='text-white px-16 py-8 text-4xl'>
    <h1 className='py-6 font-medium'>{data.name}</h1>
    <h2 className='pb-6 font-medium'>{data.location}</h2>
<div className={`bg-[#17002E] w-[${boxWidth}px] md:w-[${boxWidth}px] max-w-[800px] py-3 px-4 border-2 rounded-md`}>
<p className='text-2xl'>Captions for this event provided by Seymour.</p>
    <p className='text-2xl '>Captions works best in landscape view</p>
</div>
  </div>
  }
</div>
  )
}

export default ScheduleScreen