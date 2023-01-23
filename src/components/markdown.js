import React from "react"

export function ContentMarkdownHtml({html}) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}