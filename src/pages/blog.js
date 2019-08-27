import React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(fromNow: true)
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
  return (
      <Layout>
        <Head title="Blog" />
        <h2>Blog Posts</h2>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <li key={post.node.id} className={blogStyles.post}>
                <Link to={`/blog/${post.node.fields.slug}`}>
                  <h2>{post.node.frontmatter.title}</h2>
                  <p>{post.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
  )
}

export default BlogPage