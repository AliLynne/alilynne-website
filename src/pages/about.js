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
            <p>I'm a full stack web developer currently contributing to f/oss. My current focus is on React and Gatsby, but I love all things JavaScript and problem solving. I have a degree in English Literature and Creative Writing from Purdue University. Becuase of this, I love reading documentation to learn how to get the most out of my tech stack.</p>
            <p>I'm actively seeking Full-Time, Part-Time, or contract Web Development in the San Francisco Bay Area or Remote.</p>
            <div>
              <ul>
                <li>
                  <Link to="/projects">Check out my projects</Link>
                </li>
                <li>
                  <Link to="/contact">Contact me</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className={aboutStyles.container}>
          <section className={aboutStyles.tech}>
            <h2 className={aboutStyles.tech__headline}>Technologies</h2>
            <ul className={aboutStyles.tech__list}>
              <li className={aboutStyles.tech__listItem}>
                <h3>JavaScript</h3>
                <ul>
                  <li>Vanilla JS</li>
                  <li>Node</li>
                  <li>React/Gatsby</li>
                  <li>Express</li>
                </ul>
              </li>
              <li>
                <h3>Web Development</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SASS</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                  <li>a11y - accessibility</li>
                </ul>
              </li>
              <li>
                <h3>Services</h3>
                <ul>
                  <li>Heroku</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>Netlify</li>
                </ul>
              </li>
              <li>
                <h3>Tools</h3>
                <ul>
                  <li>git</li>
                  <li>Visual Studio Code</li>
                  <li>CircleCI</li>
                  <li>Terminal</li>
                  <li>github</li>
                </ul>
              </li>
            </ul>
          </section>
          <section className={aboutStyles.skills}>
            <h2 className={aboutStyles.skills__headline}>Skills</h2>
            <ul className={aboutStyles.skills__list}>
              <li className={aboutStyles.skills__listItem}>
                Communication
              </li>
              <li className={aboutStyles.skills__listItem}>
                Patience
              </li>
              <li className={aboutStyles.skills__listItem}>
                Compassion
              </li>
            </ul>
          </section>
        </div>
        
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