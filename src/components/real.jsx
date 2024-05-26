import React, { useEffect, useState, useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/context';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { FaArrowCircleDown } from "react-icons/fa";
import useWindowDimensions from '../utility/dimension';
import { LiveSettingScren } from './setting/liveSetting';
import { useWakeLock } from 'react-screen-wake-lock';


// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// const MyDocument = ({ transcript }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Captions Were provided by Seymour</Text>
//         {/* Render transcript lines */}
//         {transcript.map((line, index) => (
//           <View key={index}>
//             <Text style={styles.speaker}>{line.speaker}</Text>
//             <Text>{line.transcript}</Text>
//           </View>
//         ))}
//       </View>
//     </Page>
//   </Document>
// );

const RealCaption = ({ transcript, showSetting }) => {
  
  const { backgroundColor, textColor, fontSize, setFontSize } = useContext(AppContext);
  const [displayedText, setDisplayedText] = useState('');
  const [textIndexToHighlight, setTextIndexToHighlight] = React.useState(0);
  const [displayedTextWithHighlighter, setDisplayedTextWithHighlighter] = useState('');
  const [scrollSpeed, setScrollSpeed] = React.useState(1);
  const [highlightSpeed, setHighlightSpeed] = React.useState(300);

  const transcriptContainerRef = useRef(null);

  const [previousSpeaker, setPreviousSpeaker] = useState('');
  const [currentSpeaker, setCurrentSpeaker] = useState('');
  const [transcriptHeight, setTranscriptHeight] = useState(0);

//   const [orientation, setOrientation] = useState(window.screen.orientation.type);
  
 
//   useEffect(() => {
//    const updateOrientation = () => {
//      setOrientation(window.screen.orientation.type);
//     // Added debugging statement
//     console.log(window.screen.orientation.type)
//    };
 
//    updateOrientation(); // Initial update
 
//    window.addEventListener('orientationchange', updateOrientation);
 
//    return () => {
//      window.removeEventListener('orientationchange', updateOrientation);
//    };
//  }, []);

  

useEffect(() => {
  const scrollContainer = transcriptContainerRef.current;

  const scrollAmount = scrollSpeed;

  let animationFrameId;

  const scrollText = () => {
    if (scrollContainer.scrollTop < scrollContainer.scrollHeight - scrollContainer.clientHeight) {
      scrollContainer.scrollTop += scrollAmount;
      animationFrameId = requestAnimationFrame(scrollText);
    }
  };

  const startScrolling = () => {
    animationFrameId = requestAnimationFrame(scrollText);
  };

  const stopScrolling = () => {
    cancelAnimationFrame(animationFrameId);
  };

  startScrolling();

  return () => {
    stopScrolling();
  };
}, [transcript]);

  
React.useEffect(() => {
  const interval = setInterval(() => {
    const parts = displayedText.split(' ')

    const displayedTextWithHighlighter = parts.map((part, index) => {
      if(index === textIndexToHighlight) {
        const nextIndex = textIndexToHighlight+1;
        parts[nextIndex] && setTextIndexToHighlight(nextIndex)
        return  `<span style="background-color: #e8bb49">${part}</span>`
      }
      return part
    }).join(' ')
    setDisplayedTextWithHighlighter(displayedTextWithHighlighter)
  }, highlightSpeed);

  return () => clearInterval(interval);
}, [textIndexToHighlight, displayedText]);
  


//   useEffect(() => {
//     if(orientation === 'landscape-primary' && window.innerWidth > 600){
//       console.log("less")
// setFontSize(46)
//     }else if(orientation === "portrait-primary" && window.innerWidth < 600){
// setFontSize(24)
//     }else if(orientation === "portrait-secondary" && window.innerWidth > 600){
//    setFontSize(32)
//     }
//   }, [orientation, fontSize, setFontSize])

const { isSupported, released, request, release } = useWakeLock({
  onRequest: () => alert('Screen Wake Lock: requested!'),
  onError: () => alert('An error happened 💥'),
  onRelease: () => alert('Screen Wake Lock: released!'),
});


useEffect(()=> {
if(transcriptContainerRef.current){
  setTranscriptHeight(transcriptContainerRef.current.offsetHeight)
}
}, [transcriptContainerRef])


  useEffect(() => {
    if (transcript.length > 0) {
      const latestLine = transcript[transcript.length - 1];

      // Update displayed text
      const combinedText = transcript.map((line) => {
        if (line.speaker === currentSpeaker) {
          return line.transcript;
        }
        return '';
      }).join(' ');
      setDisplayedText(combinedText);

      // Update current speaker
      setCurrentSpeaker(latestLine?.speaker || '');

      // Update previous speaker if different from the current one
      if (latestLine?.speaker !== previousSpeaker) {
        setPreviousSpeaker(latestLine?.speaker);
      }

      // Scroll to the bottom of the container
      if (transcriptContainerRef.current) {
        const isScrollable = transcriptContainerRef.current.scrollHeight > transcriptContainerRef.current.clientHeight

        if(isScrollable){
          const newHeight = transcriptHeight + 15;
          // transcriptContainerRef.current.scrollTop = newHeight;
          setTranscriptHeight(newHeight)
        }
      }
    }
  }, [transcript, previousSpeaker, currentSpeaker]);


  const handleDownloadPDF = async () => {
    // No need to render the PDF here, just provide the MyDocument component
    // The rendering will happen when the PDFDownloadLink is clicked
  };


  console.log('new array', transcript);
  console.log(showSetting)
console.log(displayedTextWithHighlighter, 'displayedTextWithHighlighter')
  return (
    <section className={` md:flex w-screen bg-${backgroundColor}  primaryFont h-[600px] overflow-y-hidden relative`}>

{showSetting &&
      <div className='absolute rounded-md bg-purple-600 px-2 py-2 top-1 right-5 md:hidden'>
      <LiveSettingScren />
      </div>
}
{currentSpeaker && (
  <div className={`pl-6 pr-4 pt-4 relative  text-${textColor} ${showSetting ? 'mt-10' : 'mt-0'}`}>

    <p className={`font-bold text-center text-lg`}>
      {currentSpeaker && currentSpeaker.length >= 2 && window.innerWidth >= 720 ? 
        currentSpeaker.substring(0, 1) + currentSpeaker.substring(currentSpeaker.length - 1) :
        currentSpeaker
      }
    </p>
    <FaArrowCircleDown onClick={()=>{
        if (transcriptContainerRef.current) {
          transcriptContainerRef.current.scrollTop = transcriptContainerRef.current.scrollHeight;
        }
    }} size={32} color={backgroundColor === "black"? "white": "yellow"} fill={textColor === "yellow-400" ? "white" : textColor} className='absolute hidden sm:block sm:top-1/4 md:top-1/2' />
  </div>
)}



      <div
        id='transcript'
        ref={transcriptContainerRef}
        className={`pl-4 pr-4 pt-4 w-screen max-w-6xl  px-16 h-[150px] sm:h-[420px]  md:h-[280px] lg:h-[350px] flex flex-col space-x-5 text-${textColor} text-[24px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] overflow-y-scroll scroll-smooth `}
      >
        <p key={1} className='pb-2' dangerouslySetInnerHTML={{ __html: displayedTextWithHighlighter }} />
     
      </div>

      {/* <PDFDownloadLink document={<MyDocument transcript={transcript} />} fileName="example.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink> */}
    <div className='flex w-screen justify-center mt-8 sm:w-0 sm-h-0'>
    <FaArrowCircleDown onClick={()=>{
            if (transcriptContainerRef.current) {
              transcriptContainerRef.current.scrollTop = transcriptContainerRef.current.scrollHeight;
            }}} size={32} color='blue' className='' />
    </div>
    </section>
  );
};

export default RealCaption;
