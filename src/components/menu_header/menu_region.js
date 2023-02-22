// REACT
import React from "react";
import { useContext } from "react";
// APP
import { Box } from "./../gui";
import { RegionContext } from "../../context/context";

// we cannot use key for the props because it's react reserved word
function Cell ({className_box, style_box, className_cell, style_cell, keys, index, children}) {
	const { set_lang } = useContext(RegionContext);
	function mouse_click(event) {
		event.preventDefault();
		set_lang(keys[index]);
	}

	return <Box className={className_box} style={style_box}>
		<div className={className_cell} style={style_cell} onClick={mouse_click}>
			{children}
		</div>
	</Box>
}

export function MenuRegion({className_box, style_box, className_cell, style_cell, values, keys}) {
	// we cannot use key for the props because it's react reserved word
	return <>
		{values.map((elem, key) => {
			return <Cell className_box={className_box} style_box={style_box} 
										className_cell={className_cell} style_cell={style_cell}
										keys={keys} index={key}>
					{elem}
				</Cell>
		})}
	</>	
}