import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //Wrapping whole app in Provider
  return <AppContext.Provider value="Hello">{children}</AppContext.Provider>;
};

// Custom hook

export { AppContext, AppProvider };
