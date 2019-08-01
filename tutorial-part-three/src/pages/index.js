import {graphql} from 'gatsby'
import React from "react"
export default (data) => (
  <div>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
	<h1>{data.site.siteMetadata.title}</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
	`