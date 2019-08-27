import React from 'react'

// Components made by me.
import Footer from '../components/footer'
import Header from '../components/header'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout