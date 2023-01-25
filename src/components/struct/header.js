import React from "react";
import { get_css_value, use_width_higher_than }  from "../../utils/h";
import { MenuBig, MenuSmall} from "./../h";
// import "./layout.css";


export function Header() {
	return <div className="header">
		{use_width_higher_than(600) ? <MenuBig/> : <MenuSmall/>}
	</div>
}

// const header_style = {
// 	background: get_css_value("--color_header"),
// }

// export function Header() {
// 	return <div style={header_style}>
// 		{use_width_higher_than(600) ? <MenuBig/> : <MenuSmall/>}
// 	</div>
// }