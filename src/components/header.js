import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query siteHeaderData {
      site {
        siteMetadata {
          title
        }
      }
    } 
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          <FontAwesomeIcon icon={faBookOpen} className={headerStyles.icon}/>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link 
            className={headerStyles.navItem} 
            activeClassName={headerStyles.activeNavItem} 
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
            partiallyActive={true}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            className={headerStyles.navItem} 
            to="/contact"
            activeClassName={headerStyles.activeNavItem}
            partiallyActive={true}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            className={headerStyles.navItem} 
            to="/blog"
            activeClassName={headerStyles.activeNavItem}
            partiallyActive={true}
          >
            Blog
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header