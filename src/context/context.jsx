import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [textColor, setTextColor] = useState('white');
    const [fontSize, setFontSize] = useState('36');
    const [backgroundColor, setBackgroundColor] = useState('black');


  
    const contextValue = {
      textColor,
      fontSize,
      backgroundColor,
      setTextColor,
      setFontSize,
      setBackgroundColor,
    };
  
    return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
    );
  };
  
export { AppContext, AppProvider };
