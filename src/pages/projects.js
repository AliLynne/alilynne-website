import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import Head from '../components/head'

import projectStyles from './projects.module.scss'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectsJson {
        edges {
          node {
            title
            url
            description
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Projects" />
      <h2>Projects</h2>
      <ul className={projectStyles.projects}>
        {data.allProjectsJson.edges.map(edge => {
          return (
            <li key={edge.node.id} className={projectStyles.project}>
              <a href={edge.node.url}>
                <FontAwesomeIcon icon={faAngleRight} className={projectStyles.icon} size="4x"/>
                <div>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.description}</p>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Projects