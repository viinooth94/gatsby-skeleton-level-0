import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { get_css_value } from "../../utils/utils";

export function LayoutHome({children}) {
	return <div style={{background: get_css_value("--color_3")}}>
		<Header/>
		{children}
		<Footer/>
	</div>
}

export function LayoutMain({children}) {
	return <div style={{background: get_css_value("--color_2")}}>
		<Header/>
		{children}
		<Footer/>
	</div>
}

export function LayoutMarkdown({children}) {
	return <div style={{background: get_css_value("--color_4")}}>
		<Header/>
		{children}
		<Footer/>
	</div>
}

export function Layout404({children}) {
	return <div style={{background: get_css_value("--color_0"), color:get_css_value("--color_1")}}>
		<Header/>
		{children}
		<Footer/>
	</div>
}
