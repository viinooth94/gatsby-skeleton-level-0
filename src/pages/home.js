// REACT
import React from "react";
// APP
import { LayoutHome } from "../components/struct/layout.js";
import { RenderPage, RenderHead } from "../components/render/render_page";

export default function Home() {
  return <LayoutHome>
    <h1>Back Home</h1>
  </LayoutHome>;
};

export const Head = () => <title>Home</title>



