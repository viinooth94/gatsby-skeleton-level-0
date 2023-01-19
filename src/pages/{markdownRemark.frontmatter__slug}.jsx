import * as React from "react"
import { graphql } from "gatsby"
import { LayoutMarkdown } from "../components/struct/layout";

// To understand how the generic page work and the system file naming :
// https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

// data is prop will be injected by the GraphQL query below.
function CompMarkdown({data_md}) {
	// take in the data {} just what is necessary by destructuration
  const { frontmatter, html } = data_md
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default function PageMarkdown({data}) {
	// take in the data {} just what is necessary by destructuration
	const { markdownRemark } = data;
	return <LayoutMarkdown>
		<CompMarkdown data_md={markdownRemark}/>
	</LayoutMarkdown>

}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`