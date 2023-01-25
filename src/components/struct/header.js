import React from "react";
import { use_width_higher_than } from "../../utils/canvas";
import { get_css_value}  from "../../utils/utils";
import { MenuBig, MenuSmall} from "./../h.js"

const header_style = {
	background: get_css_value("--color_4"),
}

export function Header() {
	return <div style={header_style}>
		{use_width_higher_than(600) ? <MenuBig/> : <MenuSmall/>}
	</div>
}