import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import aboutStyles from './about.module.scss'

const AboutPage = () => {
  return (
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>I'm a full stack web developer currently contributing to f/oss. Mu current focus is on React and Gatsby, but I love all things JavaScript.</p>
        <p>Currently open to Full-Time or Part-Time Web Development in the San Francisco Bay Area or Remote.</p>
        <ul>
          <li>
            <Link to="/projects">Check out my projects</Link>
          </li>
          <li> 
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
        
        
      </Layout>
  )
}

export default AboutPage