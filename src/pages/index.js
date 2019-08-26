import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import homeStyles from "./home.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/flower.jpg/" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div className={homeStyles.container}>
        <div className={homeStyles.info}>
          <h1>Hi, I'm Ali.</h1>
          <p>Full Stack Web Developer</p>
          <Link to="/about">Seeking Employment</Link>
          <Link to="/projects">Making Things</Link>
          <p>
            <Link to="/contact">Contact Me</Link>
          </p>
        </div>
        <div className={homeStyles.image}>
          <Img fluid={data.file.childImageSharp.fluid} alt="flower in vase" />
          <figcaption className={homeStyles.caption}>
            Photo by <a href="https://unsplash.com/@hanchenxu">Han Chenxu</a> on
            Unsplash
          </figcaption>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
