// REACT
import React from "react";
// APP
import { Header } from "./header";
import { Footer } from "./footer";
import { get_css_value } from "../../utils/utils";
import "./layout.css";


function Layout({children}) {
	return <div className="global">
		{children}
	</div>
}


export function LayoutHome({children}) {
	return <Layout>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_3")}}>{children}</div>
		<Footer/>
	</Layout>
}

export function LayoutMain({children}) {
	return <Layout>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_2")}}>{children}</div>
		<Footer/>
	</Layout>
}

export function LayoutMarkdown({children}) {
	return  <Layout>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_4")}}>{children}</div>
		<Footer/>
	</Layout>
}

export function Layout404({children}) {
	return  <Layout>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_0"), color:get_css_value("--color_1")}}>{children}</div>
		<Footer/>
	</Layout>
}
