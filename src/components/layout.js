
import React from "react";
import { Menu } from "./menu/menu";


export function LayoutHome({children}) {
	return <div style={{background: "yellow"}}>
		<Menu/>
		{children}
	</div>
}


export function LayoutMain({children}) {
	return <div style={{background: "magenta"}}>
		<Menu/>
		{children}
	</div>
}

export function LayoutMarkdown({children}) {
	return <div style={{background: "cyan"}}>
		<Menu/>
		{children}
	</div>
}

export function Layout404({children}) {
	return <div style={{background: "black", color:"white"}}>
		<Menu/>
		{children}
	</div>
}
