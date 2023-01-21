import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { get_css_value } from "../../utils/utils";
import "./layout.css";


export function LayoutHome({children}) {
	return <>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_3")}}>{children}</div>
		<Footer/>
	</>
}

export function LayoutMain({children}) {
	return <>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_2")}}>{children}</div>
		<Footer/>
	</>
}

export function LayoutMarkdown({children}) {
	return <>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_4")}}>{children}</div>
		<Footer/>
	</>
}

export function Layout404({children}) {
	return <>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_0"), color:get_css_value("--color_1")}}>{children}</div>
		<Footer/>
	</>
}
