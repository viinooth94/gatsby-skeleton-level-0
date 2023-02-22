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
		<div className="children" style={{background: get_css_value("layout_home_bg")}}>{children}</div>
		<Footer/>
	</Layout>
}

export function LayoutMain({children}) {
	return <Layout>
		<Header/>
		<div className="children" style={{background: get_css_value("--layout_main_bg")}}>{children}</div>
		<Footer/>
	</Layout>
}

export function LayoutMarkdown({children}) {
	return  <Layout>
		<Header/>
		<div className="children" style={{background: get_css_value("--layout_log_bg")}}>{children}</div>
		<Footer/>
	</Layout>
}

export function Layout404({children}) {
	return  <Layout>
		<Header/>
		<div className="children" style={{background: get_css_value("--layout_404_bg"), color:get_css_value("--color_text_light")}}>{children}</div>
		<Footer/>
	</Layout>
}
