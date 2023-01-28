//REACT
import React from "react";
// import { useState, useEffect } from "react"
// APP
import Home from "./home";

const IndexPage = () => {
  // const [first, set_first] = useState(false);

  // useEffect(() => {
  //   if(first === false) {
  //     set_first(true);
  //     window.location.reload();
  //     console.log("first", first);
  //   }

  // }, [first]);
  

  return (
    <div>
      <Home/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Index</title>
