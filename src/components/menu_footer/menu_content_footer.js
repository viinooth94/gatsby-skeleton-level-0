// REACT
import React from "react";
import { useContext } from "react";
// APP
import { NavCell } from "../gui";
import tree from "./../../../media/tree.json";
import { RegionContext } from "../../context";

export function Legal() {
	const { lang } = useContext(RegionContext);

	const style_cell = {
		padding : "0 1em",
		cursor: "pointer",
	}
	
	return <NavCell to="/legal" style={style_cell}>{tree[lang].legal}</NavCell>
}