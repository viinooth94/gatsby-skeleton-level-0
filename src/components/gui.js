// REACT
import React from "react";
import {useState, useEffect} from "react";
// GATSBY
import { Link, navigate } from "gatsby";
// APP
import { get_css_value }  from "../utils/h";
import { DropdownContextProvider } from "../context"

export function Box(props) {
	// don't use a strict aguality with === to be sure to catch the value.
	if(get_css_value("--box_default_design") == 1) {
		const style = Object.assign({}, props.style)
		style["border"] = "1px solid black";
		return <div className={props.className} style={style} onClick={props.onClick}>{props.children}</div>
	} else {
		return <div className={props.className} style={props.style} onClick={props.onClick}>{props.children}</div>
	}
}

export function Hamburger(props) {
	return <Box className={props.className_box} style={props.style_box}>
		{props.children}
	</Box>
}

export function LinkCell ({to, className, style, children}) {
	return <div className={className} style={style}>
		<Link to={to}>{children}</Link>	
	</div>
}

export function NavCell({to, className, style, children}) {
	function mouse_click(event) {
		event.preventDefault();
		navigate(to);
	}
	return <div className={className} style={style} onClick={mouse_click}>{children}</div>
}

export function NavCellBox({to, className_box, style_box, className_cell, style_cell, children}) {
	return <Box className={className_box} style={style_box}>
			<NavCell to={to} className={className_cell} style={style_cell}>{children}</NavCell>
		</Box>
}



//////////////////////
// DROPDOWN
///////////////////////


export function Dropdown({name,
													className_box, style_box, className_cell, style_cell, offset,
													is, set_is,  
													children}) {
	const style_display = {
		display: "flex",
		flexDirection: "column",
		padding: offset + " 0",
	}

	function mouse_click(event) {
		event.preventDefault();
		is ? set_is(false) : set_is(true); // context
 	}

	return <Box className={className_box} style={style_box}>
		<div className={className_cell} style={style_cell} onClick={mouse_click}>{name}</div>
		{is ? 
			<div style={style_display}>
				{children}
			</div> : <></>}
	</Box>
}

