import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import ContactList from './contactList'

import footerStyles from './footer.module.scss'

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
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} © {new Date().getFullYear()}</p>
      <ContactList />
    </footer>
  )
}

export default Footer
