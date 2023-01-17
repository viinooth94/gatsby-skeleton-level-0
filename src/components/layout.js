
import React from "react";
import { Menu } from "./menu/menu";

import { GetWidth }  from "../utils/canvas"


export function LayoutHome({children}) {
	console.log("LayoutHome",GetWidth());
	return <div style={{background: "yellow"}}>
		<Menu/>
		{children}
	</div>
}


export function LayoutMain({children}) {
	console.log("LayoutMain",GetWidth());
	return <div style={{background: "magenta"}}>
		<Menu/>
		{children}
	</div>
}

export function LayoutMarkdown({children}) {
	console.log("LayoutMarkdown",GetWidth());
	return <div style={{background: "cyan"}}>
		<Menu/>
		{children}
	</div>
}

export function Layout404({children}) {
	console.log("Layout404",GetWidth());
	return <div style={{background: "black", color:"white"}}>
		<Menu/>
		{children}
	</div>
}
