//REACT
import React from "react";
// APP
import "./src/global.css";
import { RegionContextProvider } from "./src/context/context"

// The context Region is here to can manage all the pages of app
export const wrapRootElement = ({ element }) => (
  <RegionContextProvider>{element}</RegionContextProvider>
)