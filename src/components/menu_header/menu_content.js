import React from "react";
import { NavCell, NavCellBox, Dropdown} from "../gui";
import { MenuMarkdown } from "./menu_markdown";
import tree from "./../../../media/tree.json";
import { get_css_value }  from "../../utils/h";

import home_logo from "./../../../media/images/home.png";

export function GoHome({className, style}) {
	return <NavCell to="/" className={className} style={style}>
		<img style={{maxWidth: "100%", maxHeight: "100%"}} alt="Home" src={home_logo}/>
	</NavCell>
}


export function MenuContent({className_box, style_box, className_cell,  style_cell, in_line}) {
	const temp_box = {
		position: "relative",
		top: 0,
		background: get_css_value("--color_menu_big"),
	};
	if(in_line === false) {
		temp_box["left"] = "50%";
		temp_box["background"] = get_css_value("--color_menu_small");
	}
	
	const temp_cell = {
		whiteSpace: "nowrap",
		position: "absolute",
		top: "50%",
		left: "50%",
		webkitTransform: "translate(-50%, -50%)",
		transform: "translate(-50%, -50%)",
	};

	const box = Object.assign({}, style_cell, temp_box);
	const cell = Object.assign({}, temp_cell);

	return <div className={className_box} style={style_box}>
		{in_line !== false ? <div style={box}><GoHome style={cell}/></div> : <></>}
		<NavCellBox to="/main" style_box={box} style_cell={cell}>{tree.fr.main}</NavCellBox>
		<NavCellBox to="/about" style_box={box} style_cell={cell}>{tree.fr.about}</NavCellBox>
		<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree.fr.contact}</NavCellBox>
		{/* two ways to display the dynamic content */}
		<Dropdown style_box={box} style_cell={cell} name={tree.fr.other}>
			<MenuMarkdown style_box={box} style_cell={cell}/>
		</Dropdown>
		{/* <MenuMarkdown style_box={box} style_cell={cell}/> */}

		{/* create a false account to give the opportunity to connect */}
		<NavCellBox to="/account" style_box={box} style_cell={cell}>{tree.fr.login}</NavCellBox>
	</div>
}