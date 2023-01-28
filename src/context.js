//REACT
import React from "react";
import { useState, createContext, useEffect} from "react";


// HEADER CONTEXT
////////////////////

export const HeaderContext = createContext(null);

export function HeaderContextProvider({children}) {
	const id = {
		lang: false,
		other: false,
	}

	const[open_db, set_open_db] = useState(id);

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

// DROPDOWN CONTEXT
////////////////////

export const DropdownContext = createContext();


export function DropdownContextProvider({ children, defaultValue, onChange }) {
	const [toggle_is, set_toggle_is] = useState("");
	useEffect(() => {
    set_toggle_is(defaultValue);
  }, [defaultValue]);

  function toggle_state(value) {
    set_toggle_is(value);
    onChange(value);
  }

	const setting = [toggle_is, toggle_state]

	return (
    <DropdownContext.Provider value={setting}>
      <div role="radiogroup">{children}</div>
    </DropdownContext.Provider>
  );
}