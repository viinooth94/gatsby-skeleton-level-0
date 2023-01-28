//REACT
import React from "react";
import { useState, createContext} from "react";

export const HeaderContext = createContext(null);

export function HeaderContextProvider({children}) {
	const state_db = {
		lang: false,
		other: false,
	}

	const[open_db, set_open_db] = useState(state_db);

	const [other_db_is, set_other_db_is] = useState(false);
	const [lang_db_is, set_lang_db_is] = useState(false);

	const [num_item_bd, set_num_item_bd] = useState(0);
	const browser_is = typeof window !== "undefined";
	let language = "fr"
  if(browser_is) {
		language = window.navigator.userLanguage || window.navigator.language;
	}
	if(language !== "fr") language = "en";
	const [lang, set_lang] = useState(language);

	const setting = {
		open_db, set_open_db,
		other_db_is, set_other_db_is,
		lang_db_is, set_lang_db_is,

		num_item_bd, set_num_item_bd,
		lang, set_lang
	}
	return <HeaderContext.Provider value={setting}>{children}</ HeaderContext.Provider>
}