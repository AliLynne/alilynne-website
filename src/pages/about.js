import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>Bio details will go here.</p>
        <Link to="/contact">Contact me here.</Link>
      </Layout>
  )
}

export default AboutPage