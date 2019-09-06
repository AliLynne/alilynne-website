import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import postStyles from './blogpost.module.scss'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title} article/>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div className={postStyles.outer} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
      </div>
    </Layout>
  )
}

export default Blog
