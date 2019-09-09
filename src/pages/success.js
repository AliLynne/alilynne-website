import React from 'react'

import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const success = () => {
  return (
    <Layout>
      <SEO title="success" />
      Thank you!
      Feel free to check out my other <Link to="/projects">Projects!</Link>
    </Layout>
  )
}

export default success
