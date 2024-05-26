
import React, {useState} from 'react';
import {ElapsedTime} from '../components/timer'
import ScheduleScreen from './schedule';
import { TbDotsVertical } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { LiveSettingScren } from './setting/liveSetting';


const Navbar = ({ data,status , showSetting, setShowSetting }) => {

const getStringLength = () => {
  if(showSetting){
    if(data?.name?.length <= 20){
      return data?.name
    }
    return data?.name?.substring(0, 20) + "...";
  }else{
   if(data?.name?.length <= 40){
    return data.name.substring(0, 40) 
   }else{
    return data?.name?.substring(0, 40) + "..."
   }
  }
}

 
      
    const getStatusColor = () => {
        switch (status) {
          case 'Connected':
            return 'bg-[#21a746]'; 
          case 'connecting':
            return 'bg-[#e97f16]'; 
          case 'ended':
            return 'bg-[#e52d27]'; 
          case 'Scheduled':
            return 'bg-[#e97f16]'
          default:
            return 'pribacColor'; 
        }
      };

  return (
    <nav className="pribacColor select-none px-4 w-screen  relative flex items-center justify-between  h-[48px]">

        <section className='flex items-center space-x-6 '>

          {/* logo section */}
      <div className=''>
       
       <img src="https://seymourcaptions.com/wp-content/uploads/2022/11/seymour-logo-512-x512-px.jpg" alt="Logo" className="h-9 w-9 rounded-full" />
     </div>

     {/* status section */}

     <div className={`${getStatusColor()}  px-3 py-1 rounded-md`}>
          <div className="text-white ">
          {status === 'Connected' && <div>Live</div>}
{status === 'Scheduled' && 'Scheduled'}
            {status === 'connecting' && 'Conn...'}
            {status === 'ended' && 'Ended'}
          </div>
        </div>

        {/* event name */}

        <h3 className='text-white text-2xl'>{getStringLength()}</h3>

        </section>


    
     
        <section className='flex items-center  space-x-1 '>
     <div className={`hidden md:flex`}>
     {showSetting && status !== "Scheduled" && window.innerWidth > 768 && <LiveSettingScren /> }
     </div>
          
   {showSetting? <MdClose color='white' size={32} onClick={()=> {
    setShowSetting(!showSetting);
   }} /> :   <TbDotsVertical onClick={()=> {
    setShowSetting(!showSetting);
   }} color='white' size={32} /> }
      
        </section>

    </nav>
  );
};

export default Navbar;
