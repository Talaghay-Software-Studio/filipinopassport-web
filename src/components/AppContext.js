import React, {createContext,useState} from "react";

export const AppContext = React.createContext({
  requirements: " ",
  destination: "",
});

export default AppContext;
