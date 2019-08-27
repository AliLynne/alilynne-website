import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query siteFooterData {
      site {
        siteMetadata {
          author
        }
      }
    } 
  `)
  return (
    <footer>
      <p>Created by {data.site.siteMetadata.author} © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
