import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
      <Layout>
        <h1>About</h1>
        <p>Bio details will go here.</p>
        <Link to="/contact">Contact me here.</Link>
      </Layout>
  )
}

export default AboutPage