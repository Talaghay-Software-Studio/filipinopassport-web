import React, {createContext,useState} from "react";

export const AppContext = React.createContext({
  requirements: "visa required",
  destination: "Algeria",
});

export default AppContext;
