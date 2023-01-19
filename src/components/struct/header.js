import React from "react";
import { use_width_higher_than } from "../../utils/canvas";

import { MenuBig } from "../menu/menu_big"
import { MenuSmall } from "../menu/menu_small"


export function Header() {
	return <div>
		{use_width_higher_than(600) ? <MenuBig/> : <MenuSmall/>}
	</div>
}