// REACT
import React from "react";
// GATSBY
import { Link, navigate } from "gatsby";
// APP
import { get_css_value }  from "../utils/h";

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


export function Dropdown({className_box, style_box, className_cell, style_cell, name, is, set_is, children}) {
	// const { dropdown_is, set_dropdown_is } = useContext(HeaderContext);

	const style_display = {
		display: "flex",
		flexDirection: "column",
		padding: get_css_value("--height_header") + " 0",
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

// export function Dropdown({className_box, style_box, className_cell, style_cell, name, children}) {
// 	const { dropdown_is, set_dropdown_is } = useContext(HeaderContext);

// 	const style_display = {
// 		display: "flex",
// 		flexDirection: "column",
// 		padding: get_css_value("--height_header") + " 0",
// 	}

// 	function mouse_click(event) {
// 		event.preventDefault();
// 		dropdown_is ? set_dropdown_is(false) : set_dropdown_is(true); // context
//  	}

// 	return <div className={className_box} style={style_box}>
// 		<div className={className_cell} style={style_cell} onClick={mouse_click}>{name}</div>
// 		{dropdown_is ? 
// 			<div style={style_display}>
// 				{children}
// 			</div> : <></>}
// 	</div>
// }

