//REACT
import React from "react";
import { useContext } from "react";
// APP
import { HeaderContext } from "../../context";
import { NavCellBox, Dropdown, DropdownRadio, Box} from "../gui";
import { MenuMarkdown } from "./menu_markdown";
import { MenuRegion } from "./menu_region";
import tree from "./../../../media/tree.json";
import { get_css_value }  from "../../utils/h";

import { StaticImage } from "gatsby-plugin-image"

export function GoHome({className_box, style_box, className_cell, style_cell}) {
	let size = get_css_value("--height_header_cell");
	if(size === undefined) {
		size = 100;
	} else {
		size = size.slice(0,-2);
	}
	return <NavCellBox to="/" className_box={className_box} style_box={style_box} className_cell={className_cell} style_cell={style_cell}>
		<div style={{maxWidth: size+"px", maxHeight:size+"px"}}>
			<StaticImage 	src="./../../../media/images/home.png" alt="Home" 
										placeHolder="blurred" layout="constrained"  />
		</div>
	</NavCellBox>
}

///////////////////
// DROPDOWN CLASSIC
///////////////////
export function Region({className_box, style_box, className_cell, style_cell, offset}) {
	const { lang, lang_db_is, set_lang_db_is } = useContext(HeaderContext);

	return <Dropdown 	name={tree[lang].lang[lang]}
										style_box={style_box} style_cell={style_cell} 
										offset={offset}
										is={lang_db_is} set_is={set_lang_db_is}>
		<MenuRegion style_box={style_box} style_cell={style_cell} content={Object.values(tree[lang].lang)} />
	</Dropdown>
}


function Other({className_box, style_box, className_cell, style_cell, offset}) {
	const { other_db_is, set_other_db_is } = useContext(HeaderContext);

	return <Dropdown 	style_box={style_box} style_cell={style_cell} 
										offset={offset} name={tree.fr.other} 
										is={other_db_is} set_is={set_other_db_is}>
		<MenuMarkdown style_box={style_box} style_cell={style_cell}/>
	</Dropdown>
}


function DropdownClassic(props) {
	return <>
		<Other style_box={props.style_box} style_cell={props.style_cell} offset={props.offset}/> 
		
		{props.in_line !== false ? <Region style_box={props.style_box} style_cell={props.style_cell} offset={props.offset}/> : <></>}
	</>
}





///////////////////
// DROPDOWN RADIO
///////////////////

// ELEM
////////
function RegionRadio({className_box, style_box, className_cell, style_cell, offset}) {
	const { lang, lang_db_is, set_lang_db_is } = useContext(HeaderContext);

	return <DropdownRadio name={tree[lang].lang[lang]}
										style_box={style_box} style_cell={style_cell} 
										offset={offset}
										value={"region"}
										is={lang_db_is} set_is={set_lang_db_is}>
		<MenuRegion style_box={style_box} style_cell={style_cell} content={Object.values(tree[lang].lang)} />
	</DropdownRadio>
}


function OtherRadio({className_box, style_box, className_cell, style_cell, offset}) {
	const { other_db_is, set_other_db_is } = useContext(HeaderContext);

	return <DropdownRadio style_box={style_box} style_cell={style_cell} 
										offset={offset} name={tree.fr.other}
										value={"other"}
										is={other_db_is} set_is={set_other_db_is}>
		<MenuMarkdown style_box={style_box} style_cell={style_cell}/>
	</DropdownRadio>
}

// GROUP
///////////
function DropdownRadioGroup(props) {
	return <>
		<OtherRadio style_box={props.style_box} style_cell={props.style_cell} offset={props.offset}/> 
		{props.in_line !== false ? <RegionRadio style_box={props.style_box} style_cell={props.style_cell} offset={props.offset}/> : <></>}
	</>
}


export function MenuContent({className_box, style_box, className_cell,  style_cell, in_line}) {
	// context part, import what you need
	const { other_db_is, num_item_bd } = useContext(HeaderContext);
	// Design part
	// maybe this value can be compute with useRef to be optimum ?
	let hh = get_css_value("--height_header");
	let hhc = get_css_value("--height_header_cell");
	let height_header = 0;
	let height_header_cell = 0;
	if(hh !== undefined && hhc !== undefined) {
		height_header = hh.slice(0,-2);
		height_header_cell = hhc.slice(0,-2);
	}
	
	const temp_box = {
		position: "relative",
		top: (height_header - height_header_cell) * 0.5+"px",
		background: get_css_value("--color_menu_big"),
	};
	

	// maybe this value can be compute with useRef to be optimum ?
	let offset_dropdown = get_css_value("--height_header_cell");
	if(in_line === false) {
		temp_box["left"] = "50%";
		temp_box["background"] = get_css_value("--color_menu_small");
		temp_box["top"] = 0;
		offset_dropdown = get_css_value("--height_header");
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

	// create the drowdown offset for the small menu
	const box_offset = Object.assign({}, box);
	// create offset only if all the menu is vertical dropdown and regular one
	if(other_db_is && in_line === false) {
		// here we profit than Javascript is not typed, sometime is good !
		box_offset["padding"] = (height_header*num_item_bd)+"px" + " 0";
	}

	return <Box className={className_box} style={style_box}>
		{/* Display link to home or not */}
		{in_line !== false ? <GoHome className_box={"home_box"} style_box={box} style_cell={cell}/> : <></>}
		{/* Content */}
		<NavCellBox to="/main" style_box={box} style_cell={cell}>{tree.fr.main}</NavCellBox>
		<NavCellBox to="/about" style_box={box} style_cell={cell}>{tree.fr.about}</NavCellBox>
		<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree.fr.contact}</NavCellBox>
		{/* <DropdownClassic style_box={box} style_cell={cell} offset={offset_dropdown} in_line={in_line} /> */}
		{in_line === true ? 
			<DropdownRadioGroup style_box={box} style_cell={cell} offset={(height_header - height_header_cell) * 0.5+"px"} in_line={in_line} /> : 
			<DropdownClassic style_box={box} style_cell={cell} offset={offset_dropdown} in_line={in_line} />
		}
		{/* two ways to display the dynamic content, 
				one by extand the menu on line, one with a dropdown menu 
				We can add another one with a horizontal submenu */}
		{/* <MenuMarkdown style_box={box} style_cell={cell}/> */}

		{/* create a false account to give the opportunity to connect */}
		<NavCellBox to="/account" style_box={box_offset} style_cell={cell}>{tree.fr.login}</NavCellBox>
	</Box>
}

