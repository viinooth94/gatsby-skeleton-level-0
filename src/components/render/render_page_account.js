// REACT
import React from "react";
// APP
import { Form, ContentMarkdownHtml } from "../h.js";
import { useNode } from "../../utils/h";




export function RenderPageAccount({data, style_box, style_cell, style_form, style_field}) {
  const node = useNode(data);
  return <>
    <h2>{node.frontmatter.title}</h2>
    <ContentMarkdownHtml html={node.html} />
    <Form style={style_form} id_name="contact">
      <Form.Input style_cell={style_field} type="email" name="email" placeHolder={node.frontmatter.mail}/>
      <Form.Input style_cell={style_field} type="password" name="password" placeHolder={node.frontmatter.password}/>
      <Form.Submit style_box={style_box} style_cell={style_cell} type="submit">{node.frontmatter.send}</Form.Submit>
    </Form>
  </>
}