import React from "react";
import { LinkCell, NavCell} from "../goto";
import { MenuMarkdown } from "./menu_markdown";

export function MenuContent({style_box, style_cell, className_box, className_cell}) {
	return <div className={className_box} style={style_box}>
		<LinkCell to="/" className={className_cell} style={style_cell}>Home</LinkCell>
		<NavCell to="/page-a" className={className_cell} style={style_cell}>AAA</NavCell>
		<LinkCell to="/page-b" className={className_cell} style={style_cell}>BBB</LinkCell>
		<LinkCell to="/page-c" className={className_cell} style={style_cell}>CCC</LinkCell>
		<MenuMarkdown className={className_cell} style={style_cell}/>
		<LinkCell to="/404" className={className_cell} style={style_cell}>404</LinkCell>
	</div>
}