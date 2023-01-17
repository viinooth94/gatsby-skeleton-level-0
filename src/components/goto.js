import React from "react";
import { Link, navigate } from "gatsby";

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
