// REACT
import React from "react";
import {useState, useEffect, useContext} from "react";
// GATSBY
import { Link, navigate } from "gatsby";
// APP
import { get_css_value }  from "../utils/h";
// APP DROPDOWN
import { DropdownRadioContext } from "../context";
import './gui.css'

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

/////////////////
// LINK
////////////////
export function LinkCell ({to, className, style, children}) {
	return <div className={className} style={style}>
		<Link to={to}>{children}</Link>	
	</div>
}

/////////////
// NAVIGATION
/////////////

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



//////////////////
// DROPDOWN SIMPLE
//////////////////


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


//////////////////
// DROPDOWN RADIO
//////////////////

export function DropdownRadio({	name,
																className_box, style_box, className_cell, style_cell, offset,
																value, is, set_is,  
																children}) {
	// context
	const [toggle_is, onChange] = useContext(DropdownRadioContext);
	const checked = value === toggle_is;


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
	<div className={className_cell} style={style_cell} onClick={mouse_click}>
		<input
					className="dropdown_input"
					id="radio_button"
					value={value}
					checked={checked}
					type="radio"
					onChange={({ target }) => {
						// some code if necessary
						console.log(target.value, checked);
						onChange(target.value)}}
				/>
	{name}
	</div>
	{is ? 
	<div style={style_display}>
	{children}
	</div> : <></>}
	</Box>
}

