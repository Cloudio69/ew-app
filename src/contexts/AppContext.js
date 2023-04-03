import React, { useState } from "react";

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AppContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </AppContext.Provider>
  );
};
