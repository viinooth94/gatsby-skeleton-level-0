//REACT
import React from "react";
import { useContext } from "react";
// APP
import { HeaderContext } from "../../context";
import { NavCell, NavCellBox, Dropdown} from "../gui";
import { MenuMarkdown } from "./menu_markdown";
import { MenuRegion } from "./menu_region";
import tree from "./../../../media/tree.json";
import { get_css_value }  from "../../utils/h";
import home_logo from "./../../../media/images/home.png";


export function GoHome({className, style}) {
	return <NavCell to="/" className={className} style={style}>
		<img style={{maxWidth: "100%", maxHeight: "100%"}} alt="Home" src={home_logo}/>
	</NavCell>
}

export function Region({className_box, style_box, className_cell, style_cell}) {
	const { lang, lang_db_is, set_lang_db_is } = useContext(HeaderContext);
	return <Dropdown style_box={style_box} style_cell={style_cell} name={tree[lang].lang[lang]} is={lang_db_is} set_is={set_lang_db_is}>
		<MenuRegion style_box={style_box} style_cell={style_cell} content={Object.values(tree[lang].lang)} />
	</Dropdown>
}


function Other({className_box, style_box, className_cell, style_cell}) {
	const { other_db_is, set_other_db_is } = useContext(HeaderContext);
	return <Dropdown style_box={style_box} style_cell={style_cell} name={tree.fr.other} is={other_db_is} set_is={set_other_db_is}>
		<MenuMarkdown style_box={style_box} style_cell={style_cell}/>
	</Dropdown>
}


export function MenuContent({className_box, style_box, className_cell,  style_cell, in_line}) {
	// context part, import what you need
	const { other_db_is, num_item_bd } = useContext(HeaderContext);
	// Design part
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

	// create the drowdown offset for the small menu
	const box_offset = Object.assign({}, box);
	// create offset only if all the menu is vertical dropdown and regular one
	if(other_db_is && in_line === false) {
		// here we profit than Javascript is not typed, sometime is good !
		let value = get_css_value("--height_header").slice(0,-2);
		box_offset["padding"] = (value*num_item_bd)+"px" + " 0";
	}

	return <div className={className_box} style={style_box}>
		{/* Display link to home or not */}
		{in_line !== false ? <div style={box}><GoHome style={cell}/></div> : <></>}
		{/* Content */}
		<NavCellBox to="/main" style_box={box} style_cell={cell}>{tree.fr.main}</NavCellBox>
		<NavCellBox to="/about" style_box={box} style_cell={cell}>{tree.fr.about}</NavCellBox>
		<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree.fr.contact}</NavCellBox>
		{/* two ways to display the dynamic content */}
		<Other style_box={box} style_cell={cell}/>
		{/* <MenuMarkdown style_box={box} style_cell={cell}/> */}
		{in_line !== false ? <Region style_box={box} style_cell={cell}/> : <></>}
		{/* create a false account to give the opportunity to connect */}
		<NavCellBox to="/account" style_box={box_offset} style_cell={cell}>{tree.fr.login}</NavCellBox>
	</div>
}
