// React comes installed with Gatsby
import React from 'react'
// Gatsby is also installed w/ the starter
// Link is a react component
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi, I'm Ali.</h1>
      <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
    </Layout>
  )
}

export default IndexPage