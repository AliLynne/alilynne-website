import React from 'react'

import { Link } from 'gatsby'

import tagListStyles from './taglist.module.scss'

const TagsList = ({ tags }) => {
  return (
    <section className={tagListStyles.container}>
      <p>Tags: </p>
      <ul className={tagListStyles.list}>
        {tags.map(tag => {
          const lowerTag = tag.toLowerCase()
          return (
            <li className={tagListStyles.list__item} key={tag}>
              <Link to={`/tags/${lowerTag}`}>{tag}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default TagsList
