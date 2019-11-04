import React from 'react'

import { graphql } from 'gatsby'
import BlogPostNotification from '../components/BlogPostNotification'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Stripe from '../components/stripe'
import TagsList from '../components/tagsList'
// import JustComments from '../components/justComments'

import postStyles from './blogpost.module.scss'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        date
        tags
      }
      html
    }
  }
`

const Blog = (props) => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title} article />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <TagsList tags={props.data.markdownRemark.frontmatter.tags} />
      <div className={postStyles.outer} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>
      <BlogPostNotification />
      <Stripe />
      {/* Commented out until I can afford it. <JustComments /> */}
    </Layout>
  )
}

export default Blog
