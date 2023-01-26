//REACT
import React from "react";
import { useState, createContext} from "react";

export const HeaderContext = createContext(null);

export function HeaderContextProvider({children}) {
	const [dropdown_is, set_dropdown_is] = useState(false);
	const [num_item_bd, set_num_item_bd] = useState(0);

	return <HeaderContext.Provider value={{dropdown_is, set_dropdown_is, num_item_bd, set_num_item_bd}}>{children}</ HeaderContext.Provider>
}