import React, { useEffect, useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import axios from 'axios'
const Stepper = () => {
  const steps = [
    "My captions clearly displayed",
    "My captions were accurate",
    "My captions were displayed in a timely manner"
  ]
  const feedbackList = [
    "😖",
    "😒",
    "😐",
    "🙂",
    "😍"
];

const ratingMap = {
    "😖": 0,
    "😒": 1,
    "😐": 2,
    "🙂": 3,
    "😍": 4
};

const [finalFeedback, setFinalFeedback]  = useState([])

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [greeting, setGreeting] = useState(false);

  const { id } = useParams();

  console.log(id)

  const sendFeedback = async () => {
    try {
      await axios.post(`https://sonic-script-api.onrender.com/transcripts/${id}/post-review`, finalFeedback);
      console.log("Feedback sent successfully.");

    } catch (error) {
      console.error("Error sending feedback:", error);
  
    }
  };
  

useEffect(() => {
  if(currentStep === 4){
    setGreeting(true)
    sendFeedback()
  }
}, [currentStep, setCurrentStep, complete])
console.log(currentStep)

  return (greeting)?       
    <div className="greeting-container w-[350px] sm:w-[500px] md:w-[800px]">
      <h3 className="greeting text-center">Thanks for using Seymour Captions</h3>
    </div>
    : (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
         
          </div>
        ))}
      </div>


<h2 className="text-white text-3xl text-center ">
  {steps[currentStep -1]}
</h2>


{/* <div className="flex flex-col space-y-3 px-4 justify-start items-center md:h-16 w-screen md:flex-row md:justify-center md:items-center md:space-x-5 overflow-x-hidden">
  {feedbackList.map((item, index) => (
    <button
      key={index}
      onClick={() => {
        currentStep === steps.length + 1
          ? setComplete(true)
          : setCurrentStep((prev) => prev + 1);
      }}
      className={` ${index === 0 ? ' bg-slate-500 rounded-md text-white w-full px-4 py-2 md:w-42' : 'w-full md:w-42 px-4 py-2  bg-slate-500 rounded-md text-white '}` }
    >
      {item}
    </button>
  ))}
</div> */}

<div className='flex space-x-6 justify-center '>
{feedbackList.map((item, index) => (
  
  <div    onClick={ async () => {
   
    setFinalFeedback(prevFeedback => [
      ...prevFeedback,
      {
        comment: steps[currentStep - 1],
        rating: ratingMap[item]
      }
    ]);
    
    console.log("hey")
    
    currentStep === steps.length + 1
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  }} key={index} className='text-3xl md:text-5xl emoji-container py-[5px] px-[8px] md:py-[8px] md:px-[9px] '>{item}</div>

))}
</div>


    </>
  );
};

export default Stepper;