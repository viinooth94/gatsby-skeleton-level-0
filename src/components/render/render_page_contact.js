// REACT
import React from "react";

// APP
import { FormNetlify, Form, ContentMarkdownHtml } from "../h.js";
import { useNode } from "./../../utils/h";




export function RenderPageContact({data, style_box, style_cell, style_form}) {
  const node = useNode(data);
  return <>
    <h1>{node.frontmatter.title}</h1>
    <ContentMarkdownHtml html={node.html} />
    <FormNetlify style={style_form} id_name="contact">
      {/* The dot notation give the opportunity to only load Form */}
      <Form.Input type="text" name="first name" placeHolder={node.frontmatter.firstname}/>
      <Form.Input type="text" name="family name" placeHolder={node.frontmatter.lastname}/>
      <Form.Input type="email" name="email" placeHolder={node.frontmatter.mail}/>
      <Form.TextArea name="message" placeHolder={node.frontmatter.message}/>
      <Form.Submit style_box={style_box} style_cell={style_cell} type="submit">{node.frontmatter.send}</Form.Submit>
    </FormNetlify>
  </>
}