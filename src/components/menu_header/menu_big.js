import React from "react";

import { get_css_value}  from "../../utils/utils";
import { MenuContent} from "./menu_content";

const style_box = {
	margin: "0 auto",
	display: "flex",
	alignItem: "center",
	justifyContent: "space-between",
	maxWidth: "1000px",
}

const style_cell = {
	// display: "block",
	width: "70px",
	height: "40px",
	color: get_css_value("--color_0"),
	fontFamily:"sans-serif",
	border: "1px "+ get_css_value("--color_0") + " solid",
	cursor: "pointer",
}

export function MenuBig() {
	return <MenuContent style_box={style_box} style_cell={style_cell}/>
}