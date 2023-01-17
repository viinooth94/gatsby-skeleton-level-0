import React from "react";
import {Layout404} from "../components/layout.js";

export default function NotFoundPage () {
  return <Layout404><h1>Page not found : 404</h1></Layout404>;
}

export const Head = () => <title>Not found 404</title>
