// REACT
import React from "react";
import {useState, useEffect} from "react";
// GATSBY
import { Link, navigate } from "gatsby";
// APP
import { get_css_value }  from "../utils/h";
import { DropdownContext } from "../context"

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
export function DropdownGroup({ children, defaultValue, onChange }) {
	const [toggle_is, set_toggle_is] = useState("");
	useEffect(() => {
    set_toggle_is(defaultValue);
  }, [defaultValue]);
  function toggle_state(value) {
    set_toggle_is(value);
    onChange(value);
  }
	return (
    <DropdownContext.Provider value={[toggle_is, toggle_state]}>
      <div role="radiogroup">{children}</div>
    </DropdownContext.Provider>
  );

}

export function Dropdown({name, id,
													className_box, style_box, className_cell, style_cell, offset,
													all_is, set_all_is,
													is, set_is,  
													children}) {
	const style_display = {
		display: "flex",
		flexDirection: "column",
		padding: offset + " 0",
		// padding: get_css_value("--height_header_cell") + " 0",
	}

	// function mouse_click(event) {
	// 	event.preventDefault();
	// 	is ? set_is(false) : set_is(true); // context
 	// }
	function mouse_click(event) {
		event.preventDefault();
		for (let [key, value] of Object.entries(all_is)) {
			
			if(key !== id) {
				all_is[key] = false;
			} else {
				// console.log(id, key, value);
				all_is[value] ? all_is[key] = false : all_is[key] = true; // context
			}
		}
		set_all_is(all_is);
		is ? set_is(false) : set_is(true); // context
 	}

	// console.log("key",all_is.id, id)

	function is() {
		for (let [key, value] of Object.entries(all_is)) {
			if(key === id) {
				console.log("value", value);
				return value;
			}
		}
		return false;	
	}

	return <Box className={className_box} style={style_box}>
		<div className={className_cell} style={style_cell} onClick={mouse_click}>{name}</div>
		{is() ? 
			<div style={style_display}>
				{children}
			</div> : <></>}
	</Box>
}

