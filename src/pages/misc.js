// REACT
import React from "react";
// APP
import { LayoutMain } from "../components/h.js";
import { RenderPage, RenderHead } from "../components/render/render_page";

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


