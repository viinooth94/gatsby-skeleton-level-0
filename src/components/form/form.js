import React from "react";


export function Form(props) {
	return (
    <form name={props.id_name} method={props.method} data-netlify={'props.data-netlify'}>
      <input type="hidden" name="form-name" value={props.form_name} />
			<div className={props.className} style={props.style}>
				{props.children}
			</div>
    </form>
  );
}

export function FormNetlify(props) {
  return (
		<>
		<Form method="POST" data-netlify="true" {...props}>
		{/* <Form className={props.className} style={props.style} method="POST" data-netlify="true" {...props}> */}
			{props.children}
		</Form>
		</>
  );
}



// The dot notation give the opportunity to only export Form, because the function is attached to From
Form.Input = function Input({className_box, style_box, className_cell, style_cell, type, name, placeHolder}) {
	return <div className={className_box} style={style_box}>
		<label>
			<input className={className_cell} style={style_cell} type={type} name={name} placeHolder={placeHolder} />
		</label>
	</div>
}
 
// The dot notation give the opportunity to only export Form, because the function is attached to From
Form.TextArea = function TextArea({className_box, style_box, className_cell, style_cell, placeHolder, name}) {
	return <div className={className_box} style={style_box}>
		<label>
			<textarea className={className_cell} style={style_cell} name={name} placeHolder={placeHolder}/>
		</label>
	</div>
}

// The dot notation give the opportunity to only export Form, because the function is attached to From
Form.Submit = function FormSubmit({className_box, style_box, className_cell, style_cell, type, children}) {
	return <div className={className_box} style={style_box}>
			<button className={className_cell} style={style_cell} type={type}>{children}</button>
		</div>

}

