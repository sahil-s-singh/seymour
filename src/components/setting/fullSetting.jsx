import React from 'react'
import { useContext } from "react";
import { AppContext } from '../../context/context';

export const FullSettingScreen = () => {
  const { textColor, fontSize, backgroundColor, setFontSize, setTextColor, setBackgroundColor } = useContext(AppContext);
  

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 16)); 
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 2, 46)); 
  };



  return (
    <div className='text-white  flex-col px-10 justify-between py-6 overflow-hidden'>
     <section className=''>
<div className='mb-8'>
  <h1 className='font-bold text-2xl'>Caption color</h1>
  <div className='border-purple-300 px-2 py-[5px] flex justify-between border-2 w-[250px] md:h-[80px] md:w-[300px] rounded-md h-[60px] md:py-2'>
    <div onClick={()=>{setBackgroundColor("black"); setTextColor("white") }} className='md:w-[60px] w-[46px] h-[46px] md:h-[60px]  rounded-md border-2 border-purple-300 p-2 text-xl md:text-3xl text-center font-semibold'>Aa</div>
    <div onClick={()=> {setBackgroundColor("white"); setTextColor("black")}} className='md:w-[60px] w-[46px] h-[46px] md:h-[60px] rounded-md border-2 border-white p-2 text-xl md:text-3xl text-center font-semibold bg-white text-black'>Aa</div>
    <div onClick={()=> {setBackgroundColor("black"); setTextColor("yellow-400")}}   className='md:w-[60px] w-[46px] h-[46px] md:h-[60px] rounded-md border-2 border-white p-2 text-xl md:text-3xl text-center font-semibold text-yellow-400'>Aa</div>
    <div onClick={()=> {setBackgroundColor("yellow-400"); setTextColor("black")}}  className='md:w-[60px] w-[46px] h-[46px] md:h-[60px] rounded-md border-2 border-white p-2 text-xl md:text-3xl text-center font-semibold bg-yellow-400 text-black'>Aa</div>
  </div>
   </div>

   {/* <div>
  <h1 className='font-bold text-lg md:text-2xl'>Caption font</h1>
  <div onClick={decreaseFontSize} className='border-purple-300 px-2 py-2 flex justify-between border-2 md:w-[300px] w-[250px] rounded-md h-[60px] md:h-[80px]'>
    <div className='w-[60px] md:h-60px] rounded-md border-2 border-purple-300 p-2 text-xl md:text-3xl text-center font-semibold'>-</div>
    <div onClick={()=>{ setFontSize(36) }} className='w-[60px] md:h-60px] rounded-md border-2 border-white p-2 text-xl md:text-3xl text-center font-semibold '>Aa</div>
    <div onClick={()=>{  setFontSize(46) }}  className='w-[60px] md:h-60px] rounded-md border-2 border-white p-2 text-xl md:text-3xl text-center font-semibold'>Aa</div>
    <div onClick={increaseFontSize} className='w-[60px] md:h-60px] rounded-md border-2 border-white p-2 text-xl md:text-3xl text-center font-semibold '>+</div>
  </div>
   </div> */}
     </section>
     <section className="flex-col mt-8 md:mt-0 space-y-8">
    <div    className={`w-fit h-fit max-h-[300px] max-w-[350px] bg-${backgroundColor} rounded-lg border-2 border-pink-300 px-2 py-2 flex-col`}
      style={{ fontSize: `${fontSize}px` }}>
      <p className={`text-${textColor}`}>Tweak font and colors</p>
    </div>
    {/* <button className='w-[280px] md:w-[350px] bg-purple-400 text-center rounded-md border-2 border-white py-2'>
      Ready
    </button> */}
      </section>
    </div>
  )
}