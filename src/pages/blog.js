import React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

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
        <h2>Blog Posts</h2>
        <ol>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <li key={post.node.id}>
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