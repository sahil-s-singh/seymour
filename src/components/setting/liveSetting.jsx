import React from 'react'
import { useContext } from "react";
import {AppContext} from '../../context/context'

export const LiveSettingScren = () => {
  const { textColor, fontSize, backgroundColor, setFontSize, setTextColor, setBackgroundColor } = useContext(AppContext);

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 16)); 
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 2, 46)); 
  };



  return (

    


  <div className='  flex space-x-4 items-center   rounded-md  '>


  {/* <div onClick={()=>decreaseFontSize()} className={`w-[36px] h-[36px] rounded-md border-2 border-[#6A6680] p-2 text-lg flex items-center justify-center font-semibold text-white`}>-</div>

  <div onClick={()=>increaseFontSize()} className={`w-[36px] h-[36px] rounded-md border-2 border-[#6A6680] p-2 text-lg flex items-center justify-center font-semibold text-white`}>+</div> */}

{/* <div className='w-[2px] h-[28px] bg-[#4A4759]'></div> */}

    <div onClick={()=>{setBackgroundColor("black"); setTextColor("white") }} className='w-[36px] h-[36px] rounded-md border-2 border-[#6A6680] bg-black text-white p-2 text-lg flex items-center justify-center font-semibold'>Aa</div>
    <div onClick={()=> {setBackgroundColor("white"); setTextColor("black")}} className='w-[36px] h-[36px] rounded-md border-2 border-[#6A6680] p-2 text-lg flex items-center justify-center font-semibold bg-white text-black'>Aa</div>
    <div onClick={()=> {setBackgroundColor("black"); setTextColor("yellow-400")}}   className={`w-[36px] h-[36px] rounded-md border-2 border-[#6A6680] p-2 text-lg flex items-center justify-center font-semibold bg-black text-yellow-400 `}>Aa</div>
    <div onClick={()=> {setBackgroundColor("yellow-400"); setTextColor("black")}}  className='w-[36px] h-[36px] rounded-md border-2 border-[#6A6680] p-2 text-lg flex items-center justify-center font-semibold bg-yellow-400 text-black'>Aa</div>
  </div>
   


  
   
  
  )
}
