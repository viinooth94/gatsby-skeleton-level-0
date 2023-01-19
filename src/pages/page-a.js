import React from "react";
import {LayoutMain} from "../components/struct/layout.js";

/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
export default function PageA () {
  return <LayoutMain>
    <h1>PAGE A</h1>
  </LayoutMain>;
};

export const Head = () => <title>About page A</title>


