import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { get_css_value } from "../../utils/utils";
import "./layout.css";
import { RegionContextProvider } from "./../../context";

function LayoutRegion({children}) {
	return <div className="global">
		<RegionContextProvider>
			{children}
		</RegionContextProvider>
	</div>

}


export function LayoutHome({children}) {
	return <LayoutRegion>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_3")}}>{children}</div>
		<Footer/>
	</LayoutRegion>
}

export function LayoutMain({children}) {
	return <LayoutRegion>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_2")}}>{children}</div>
		<Footer/>
	</LayoutRegion>
}

export function LayoutMarkdown({children}) {
	return  <LayoutRegion>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_4")}}>{children}</div>
		<Footer/>
	</LayoutRegion>
}

export function Layout404({children}) {
	return  <LayoutRegion>
		<Header/>
		<div className="children" style={{background: get_css_value("--color_0"), color:get_css_value("--color_1")}}>{children}</div>
		<Footer/>
	</LayoutRegion>
}
