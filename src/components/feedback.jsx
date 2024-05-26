import React, { useState } from 'react';

const FeedbackOverlay = () => {
 
const emojifeedback = [
    "😖",
    "😒",
    "😐",
    "🙂",
    "😍"
]

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
        <div className="card-container relative">
<p className='text-white w-fit h-fit absolute top-2 right-5 '>x</p>
<h2 className='text-white font-bold pt-4 text-xl text-center'> How was your overall experience ?</h2>
<div className='flex space-x-6 justify-center my-4'>
{emojifeedback.map((item, index) => (
  
  <dv key={index} className='text-3xl emoji-container '>{item}</dv>

))}
</div>
<div className='flex w-full justify-center mb-4 '> 
<textarea
            type="text"
            className="text-field"
            placeholder="Your feedback will help make events more accessible"
          />

</div>

<div className='flƒex items-center justify-center'>
<button type="button" className="text-white border-[1px] bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 w-[320px]">Send</button>
</div>


</div>
    </div>
  );
};

export default FeedbackOverlay;
