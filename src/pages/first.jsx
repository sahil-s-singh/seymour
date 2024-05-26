import React, { useState, useRef } from 'react';
import VideoPlayer from '../components/player';
import emailjs from '@emailjs/browser';
import { IoCloseCircleSharp } from "react-icons/io5";
// re_TC7rZPay_LbHVNcfLsLeFjpnkEG9fXvzV



const First = () => {
  const form = useRef();
  const [useEmail, setUserEmail] = useState("enter your email")

console.log(useEmail)

  const sendEmail = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_ytuz9bl';
    const templateId = 'template_dhrm09t';
    const publicKey = 'ChBZB2OU9f5MQyeYQ';

    // Create a new object that contains dynamic template params
    const templateParams = {
   
      from_email: useEmail,
      
     
    };
console.log(useEmail)

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
       
        setUserEmail('enter your email');
        setShowConfirmation(true)
       
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });   
  }


  const testimonials = [
    {
      id: 1,
      userImage: "https://t4.ftcdn.net/jpg/03/43/33/89/360_F_343338946_JF4izSZaeeoV3b9Nwh7rAemCJ4M8SyEb.jpg",
      testimonial: "I am regular audience, I have no hearing problem but I normally find it hard to keep up with english speakers so reading transcript for events meant the world to me.",
      userName: "Alice Johnson"
    },
    {
      id: 2,
      userImage: "https://readymadeui.com/profile_2.webp",
      testimonial: "I never thought live events could be so accessible until I discovered Seymour. Their real-time captions have made a world of difference for me. Highly recommended!",
      userName: "Bob Smith"
    },
    {
      id: 3,
      userImage: "https://readymadeui.com/profile_3.webp",
      testimonial: "As someone who is hard of hearing, I've always felt excluded at events. Seymour changed that. Now, I can follow along seamlessly and feel included. Thank you, Seymour!",
      userName: "Emily Chen"
    }
  ];
  
  const [currentTestimonialIndex, setTestimonialIndex] = useState(0)
 
  const handleNextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const url = "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8";
  
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (

<section className=' h-screen  overflow-x-hidden select-none bg-white'>

<header class="flex fixed flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 pribacColor">
  <nav class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-center py-2 sm:px-6 lg:px-8" aria-label="Global">
    <div class="flex items-center justify-center"> 
      <img src="https://seymourcaptions.com/wp-content/uploads/2022/11/seymour-logo-512-x512-px.jpg" class='w-12 h-12 rounded-full' alt="seymour logo" /> 
    </div>
  </nav>
</header>


{/* hero */}


<div class="max-w-[85rem] bg-white mt-36 mx-auto px-4 sm:px-6 lg:px-8 relative">



<div id="toast-simple" class={`${showConfirmation? 'flex' : 'hidden'} items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 absolute top-0 right-10`} role="alert ">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
    </svg>
    <div  class="ps-4 text-sm font-normal">Application sent successfully.</div>
    <IoCloseCircleSharp onClick={() => setShowConfirmation(false)} className='pl-2' size={36}  />
</div>


  <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div class="lg:col-span-3">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-6xl md:text-5xl lg:text-6xl ">Bring live captions to your venue with Seymour!</h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Join us as a beta tester venue today and bring accessibility at your events! Apply now to secure your spot and lock in legacy pricing.</p>

      <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <form ref={form} type="submit" onSubmit={sendEmail} class="w-full sm:w-auto sm:flex space-y-5 sm:space-y-0 ">
          <label for="hero-input" class="sr-only">Search</label>
          <input 
           onChange={(e) => setUserEmail(e.target.value)} 
           value={useEmail}
           type="text" id="hero-input"  class="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:focus:ring-gray-600" placeholder="Enter work email" />
          
          <button type="submit" class="w-full sm:ml-8 min-w-32 sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Apply Now
        </button>
        </form>
     
      </div>


    
 
    </div>


    <div class="lg:col-span-4 mt-10 lg:mt-0">
      <img class="w-full rounded-xl" src="https://i.ibb.co/98n9Fkj/iphone-multiple-screens-mockup-1.png" />
    </div>
  
  </div>

</div>

{/* gallery 1 */}

<h2 className='mt-32 text-center font-bold text-4xl mb-4'>Screenshots of Audio Engineer App</h2>

<div class="grid grid-cols-1  md:grid-cols-3 px-8 gap-4  py-4 mb-24 ">

  
       
     

 
        <div className='shadow-lg hover:scale-95 transition duration-500'>
            <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/D5FR1Z7/iphone-x-mockup-7.png" alt="" />
        </div>
        <div className='shadow-lg hover:scale-95 transition duration-500'>
            <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/RYY0pKs/iphone-x-mockup-5.png" alt="" />
        </div>
        <div className='shadow-lg hover:scale-95 transition duration-500'>
            <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/NtGx5J1/iphone-x-mockup.png" alt=" " />
        </div>
     
 
</div>

{/* gallery 2 */}

<h2 className=' text-center font-bold text-4xl mb-4'>Screenshots of Attendee App</h2>

<div class="grid grid-cols-1 md:grid-cols-3 px-16 gap-4 mb-32">  
       
        <div className='shadow-lg hover:scale-95 transition duration-500'>
            <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/sHdpzH6/imac-screen-mockup-1.png" alt="" />
        </div>
      
        <div className='shadow-lg hover:scale-95 transition duration-500'>
            <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Hgv82jH/tablet-in-hand-mockup.png" alt="" />
        </div>
        <div className='shadow-lg hover:scale-95 transition duration-500'>
            <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/94XwTQG/minimalistic-smartphone-screen.png" alt="" />
        </div>
    
</div>


{/* how it works
<section class="py-32 bg-white overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap lg:items-center -m-8">
      <div class="w-full md:w-1/2 p-8">
      <VideoPlayer url={url} />
   
      </div>
      <div class="w-full md:w-1/2 p-8">
        <h2 class="mb-20 text-6xl md:text-4xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">How Seymour helps you get a broader audience for your events.</h2>
        <div class="flex flex-wrap -m-1.5">
          <div class="w-full p-1.5">
            <div class="flex flex-wrap -m-6">
              <div class="w-auto p-6">
                <div class="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                  <img class="absolute top-0 left-0" src="flaro-assets/images/how-it-works/gradient.svg" alt="" />
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                </div>
                <img class="relative left-3" src="flaro-assets/images/how-it-works/line.svg" alt="" />
              </div>
              <div class="flex-1 p-6">
                <div class="md:max-w-xs">
                  <h3 class="mb-3 text-2xl font-semibold leading-snug">Sign up</h3>
                  <p class="text-gray-700 font-medium leading-relaxed">As an event organizer or owner, you will sign up and create an event which you will then receive a link to share</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-1.5">
            <div class="flex flex-wrap -m-6">
              <div class="w-auto p-6">
                <div class="relative -left-1 mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                  <img class="absolute top-0 left-0" src="flaro-assets/images/how-it-works/gradient.svg" alt="" />
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">2</span>
                </div>
                <img class="relative left-3" src="flaro-assets/images/how-it-works/line2.svg" alt="" />
              </div>
              <div class="flex-1 p-6">
                <div class="md:max-w-xs">
                  <h3 class="mb-3 text-2xl font-semibold leading-snug">Connect</h3>
                  <p class="text-gray-700 font-medium leading-relaxed">Participant you share your link to will join on their device </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-1.5">
            <div class="flex flex-wrap -m-6">
              <div class="w-auto p-6">
                <div class="relative left-5 mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                  <img class="absolute top-0 left-0" src="flaro-assets/images/how-it-works/gradient.svg" alt="" />
                  <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">3</span>
                </div>
              </div>
              <div class="flex-1 p-6">
                <div class="md:max-w-xs">
                  <h3 class="mb-3 text-2xl font-semibold leading-snug">Communication</h3>
                  <p class="text-gray-700 font-medium leading-relaxed">The audio engineer will speak using his/her instrument and this will be turned into text which will then be reflected on user screen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


{/* testimonials */}
{/* <div class="bg-gray-200 ">
  <div class="max-w-6xl mx-auto px-8 py-16">
    <div class="relative">
      <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
        <div class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
 
     
          <img src={`${testimonials[currentTestimonialIndex].userImage}`}  />
        
      
        </div>
        <div class="relative lg:w-7/12 bg-white">
          <svg class="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"/>
        </svg>
          <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
            <p>
           {testimonials[currentTestimonialIndex].testimonial}
            </p>
          
          </div>
        </div>
      </div>
      <div onClick={handlePrevTestimonial} class="absolute inset-y-0 left-0 lg:flex lg:items-center">
        <button class="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <svg class="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
        </svg>
      </button>
      </div>
      <div onClick={handleNextTestimonial} class="absolute inset-y-0 right-0 lg:flex lg:items-center">
        <button class="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <svg class="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/>
        </svg>
      </button>
      </div>
    </div>
  </div>
</div> */}

{/* sign up form */}
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up to be a beta tester</h2>
          <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Empower the Deaf and Hard of Hearing to Experience Events Fully. Sign Up Now to Bring Accessibility to Your Venue!</p>
          <form ref={form} onSubmit={sendEmail}>
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" 
                      type="email" id="email" value={useEmail} required="" onChange={(e) => setUserEmail(e.target.value)} />
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
            
          </form>
      </div>
  </div>
</section>

</section>
    
  );
};

export default First;
