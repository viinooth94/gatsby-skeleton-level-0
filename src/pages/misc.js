import React from "react";

import { LayoutMain } from "../components/h.js"

/*
it's necessary to export the Components Page as default
If it's not do, Gatby Router don't find the page and return an error
*/
export default function Misc () {
  return <LayoutMain>
    <h1>Misc</h1>
  </LayoutMain>;
};

export const Head = () => <title>Misc</title>


