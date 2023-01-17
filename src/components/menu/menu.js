import React from "react";
// import {useState, useEffect} from "react";
import { LinkCell, NavCell} from "../goto";
import { MenuMarkdown } from "./menu_markdown";
import { get_css_value}  from "../../utils/utils"
import { Window_is_higher_than, GetWidth }  from "../../utils/canvas"

const big_box = {
	boxShadow:"none",
	display: "flex",
	alignItem :"center",
	background: "red",
}

const big_cell = {
	padding: "1em",
	color:"white",
	fontFamily:"sans-serif",
	border: "1px black solid",
	// border: "1px "+   get_css_value("--color_3") + " solid",
	cursor: "pointer",
}

function MenuBig() {
	return <div style={big_box}>
		<LinkCell to="/" style={big_cell}>Home</LinkCell>
		<NavCell to="/page-a" style={big_cell}>AAA</NavCell>
		<LinkCell to="/page-b" style={big_cell}>BBB</LinkCell>
		<LinkCell to="/page-c" style={big_cell}>CCC</LinkCell>
		<MenuMarkdown style={big_cell}/>
		<LinkCell to="/404" style={big_cell}>404</LinkCell>
	</div>
}


const small_box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

	width: "100%",
	height: "40px",
	background: "magenta",
	// background: get_css_value("--color_4"),

}

const small_cell = {
	width: "30px",
	height: "30px",
	background: "yellow",
	// background : get_css_value("--color_2"),
}

function MenuSmall() {

	return <div style={small_box}>
		<div style={small_cell}></div>
	</div>
}




export function Menu() {
	// const [higher, set_higher] = useState(Window_is_higher_than(600));
	

	// useEffect(() => {
	// 	// console.log(Window_is_higher_than(600));
	// 	// console.log(window_is_higher_than(600));
	// 	// if(window_is_higher_than(600)) {
	// 	// 	set_higher(true);
	// 	// } else {
	// 	// 	set_higher(false);
	// 	// }
	// }, [higher]);

	// return <div>Truc</div>
	// console.log("Menu(): width",GetWidth());
	// Window_is_higher_than(600
	if(true) {
		// console.log("GRAND");
		return <MenuBig/>
	} else {
		console.log("PETIT");
		return <MenuSmall/>
	}
}

// export function Menu() {
// 	if(window_is_higher_than(600)) {
// 		return <MenuBig/>
// 	} else {
// 		return <MenuSmall/>
// 	}
// }