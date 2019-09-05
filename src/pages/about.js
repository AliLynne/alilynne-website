import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'



import aboutStyles from './about.module.scss'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {regex: "/me.jpg/"}) {
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  `)
  return (
      <Layout>
        <SEO title="About" />
        <section className={aboutStyles.about}>
          <div className={aboutStyles.info}>
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
            
          </div>
          <div className={aboutStyles.me}>
            <div className={aboutStyles.frame}>
              <NonStretchedImage className={aboutStyles.image} fluid={data.file.childImageSharp.fluid} alt="Black and White headshot of Ali" />
            </div>
          </div>
        </section>
        
        
        
        
        
      </Layout>
  )
}


const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

export default AboutPage