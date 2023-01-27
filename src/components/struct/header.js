//REACT
import React from "react";
import { useState, useEffect} from "react";
//APP
import { get_css_value, use_width_higher_than }  from "../../utils/h";
import { MenuBig, MenuSmall} from "./../h";
import { HeaderContextProvider } from "./../../context"

export function Header() {
	const [size, set_size] = useState(1);
	// need useEffect to avoid too much re-rendering
	let min = get_css_value("--screen_min").slice(0,-2);
	// assume min now is a number
	let value_is = use_width_higher_than(min);
	useEffect(() => {
		if(value_is) {
			set_size(1);
		} else {
			set_size(0);
		}
	})
	
	return <HeaderContextProvider>
		<div className="header">
			{size > 0 ? <MenuBig/> : <MenuSmall/>}
		</div>
	</HeaderContextProvider>
}

