import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import FeedbackOverlay from "../components/feedback";
import RealCaption from "../components/real";
import axios from 'axios'
import ScheduleScreen from "../components/schedule";
import { apiURL} from '../api/api'
import { useContext } from "react";
import {AppContext} from '../context/context'
import { useParams } from "react-router-dom";
import MainFeeback from "../components/feedback/mainfeeback";
import script from './script.json'

const HomeScreen = () => {
  const [status, setStatus] = useState("");
  const socketRef = useRef(null);
  const [transcripts, setTranscripts] = useState([]);
  const [eventInformation, setEventInformation] = useState([]);
  const [showSetting, setShowSetting] = useState(false)
  const [step, setStep] = useState(0);
  const { textColor, fontSize, backgroundColor } = useContext(AppContext);
  

  const { id } = useParams();

  const getEventInformation = async() => {
    try{
const info = await axios.get(`https://sonic-script-api.onrender.com/transcripts/${id}`)

if(info.data.isStreaming === false){
  setStatus("Scheduled")
}
setEventInformation(info.data)
    }catch(e){
console.log(e)
    }
  }


  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextStep = step + 1;
      const newtrans = [...transcripts]
      if (script[nextStep]) {
        newtrans.push(script[nextStep])
        setTranscripts(newtrans);
        setStep(nextStep);
      } else {
        newtrans.push(script[0])
        setTranscripts(newtrans);
        setStep(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [step])


  useEffect(() => {

    getEventInformation()



    socketRef.current = new WebSocket(apiURL, ["event", id]);

    socketRef.current.onopen = () => {
      // setStatus("Connected");
      console.log({ event: "onopen" });
    };

    socketRef.current.onmessage = (event) => {
      const received = JSON.parse(event.data);
      console.log("received", received);
      setStatus("Connected")
  
      // Scroll to bottom on text change
      if (scrollRef.current) {
      const isScrollable = scrollRef.current.scrollHeight > scrollRef.current.clientHeight
      if(isScrollable){
        const newHeight = height + 10;
        scrollRef.current.scrollTop = newHeight;
        setHeight(newHeight)
      }
      }
  
      return () => clearInterval(interval);


      if (received.type === "transcript") {
        setTranscripts((prevTranscripts) => [
          ...prevTranscripts,
          {
            transcript: received.transcript,
            speaker: received.speaker,
          },
        ]);
      } else if (received.type === "endstream") {
        setStatus("ended");
      }
    };

    socketRef.current.onclose = () => {
      // setStatus("connecting");
    };

    socketRef.current.onerror = (error) => {
      // setStatus("connecting");
    };

    return () => {
      socketRef.current.close();
    };
  }, [transcripts]);

  const renderStatus = (status, showSetting) => {
    if (status === "Scheduled") return <ScheduleScreen data={eventInformation} showSetting={showSetting} />
    else if (status === "ended") return <MainFeeback />
    else return <RealCaption showSetting={showSetting} transcript={transcripts} data={eventInformation} />;
  }

  return (
    
    <div className={`h-screen ${status === "Scheduled" ? 'bg-black' : `bg-${backgroundColor}`}`}>
 
      {eventInformation.length === 0 ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          <Navbar
            status={status}
            data={eventInformation}
            showSetting={showSetting}
            setShowSetting={setShowSetting}
          />
          {renderStatus(status, showSetting)}
        </div>
      )}
    </div>
  );
  
};

export default HomeScreen;