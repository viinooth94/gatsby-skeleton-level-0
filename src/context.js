//REACT
import React from "react";
import { useState, createContext, useEffect} from "react";


// HEADER CONTEXT
////////////////////

export const HeaderContext = createContext(null);

export function HeaderContextProvider({children}) {
	const id = ["region","other"];
	// create the dropdown radio list
	const [radio_is, set_radio_is] = useState([])
	// let rank = 0
  // useEffect(() => {
  //   id.forEach(elem => {
	// 		set_radio_is(prev_id => [...prev_id, {id: id[rank++], index :elem -1, active_is: false}])
	// 		// set_radio_is(prev_id => [...prev_id, {id: id[rank++], index :elem -1, active_is: false}])
  //   })
  // }, [])
	// let rank = 0
  useEffect(() => {
    id.map((elem, key) => {
			set_radio_is(prev_id => [...prev_id, {id: elem, index :key, active_is: false}])
			// set_radio_is(prev_id => [...prev_id, {id: id[rank++], index :elem -1, active_is: false}])
    })
  }, [])


	

	const [other_db_is, set_other_db_is] = useState(false);
	const [lang_db_is, set_lang_db_is] = useState(false);

	const [num_item_bd, set_num_item_bd] = useState(0);
	// lang
	const browser_is = typeof window !== "undefined";
	let language = "fr"
  if(browser_is) {
		language = window.navigator.userLanguage || window.navigator.language;
	}
	if(language !== "fr") language = "en";
	const [lang, set_lang] = useState(language);

	const setting = {
		radio_is, set_radio_is,

		other_db_is, set_other_db_is,
		lang_db_is, set_lang_db_is,

		num_item_bd, set_num_item_bd,
		lang, set_lang
	}
	return <HeaderContext.Provider value={setting}>{children}</ HeaderContext.Provider>
}

// DROPDOWN CONTEXT
////////////////////

export const DropdownRadioContext = createContext();


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
    <DropdownRadioContext.Provider value={setting}>
      <div role="radiogroup">{children}</div>
    </DropdownRadioContext.Provider>
  );
}