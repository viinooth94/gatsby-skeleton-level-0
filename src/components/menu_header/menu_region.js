// REACT
import React from "react";
// APP
import { Box } from "./../gui"

function Cell ({className_box, style_box, className_cell, style_cell, children}) {
	return <Box className={className_box} style={style_box}>
		<div className={className_cell} style={style_cell}>
			{children}
		</div>
	</Box>
}

export function MenuRegion({className_box, style_box, className_cell, style_cell, content}) {
	return <>
		{content.map((elem, key) => {
			return <Cell className_box={className_box} style_box={style_box} 
				className_cell={className_cell} style_cell={style_cell}>
					{elem}
				</Cell>
		})}
	</>	
}