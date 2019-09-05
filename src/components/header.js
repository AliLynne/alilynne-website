import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import Logo from '../images/icons/rosePink.svg'

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
        <Link className={headerStyles.title} to="/">
          <h1 className={headerStyles.titleHeader}>
            <Logo />
            {data.site.siteMetadata.title}
          </h1>
        </Link>
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
        <li>
          <Link
            className={headerStyles.navItem}
            to="/projects"
            activeClassName={headerStyles.activeNavItem}
            partiallyActive={true}
          >
            Projects
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header