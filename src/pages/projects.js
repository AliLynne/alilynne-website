import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'

import projectStyles from './projects.module.scss'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectsJson {
        edges {
          node {
            title
            projectUrl
            sourceUrl
            description
            id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <ul className={projectStyles.projects}>
        {data.allProjectsJson.edges.map(edge => {
          return (
            <li key={edge.node.id} className={projectStyles.project}>
              
                <FontAwesomeIcon icon={faAngleRight} className={projectStyles.listIcon} size="4x"/>
              
                <div>
                  <h2>
                    <a className={projectStyles.titleLink} href={edge.node.projectUrl}>{edge.node.title}</a>
                  </h2>
                  <p>{edge.node.description}</p>
                  <ul className={projectStyles.linkList}>
                    <li>
                      <a href={edge.node.projectUrl}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span className={projectStyles.visibleHidden}>View Project</span>
                      </a>
                    </li>
                    <li>
                      <a href={edge.node.sourceUrl}>
                        <FontAwesomeIcon icon={faGithubSquare} />
                      <span className={projectStyles.visibleHidden}>Source code on github</span>
                      </a>
                    </li>
                  </ul>
                </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Projects