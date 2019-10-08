import React from 'react'
import { Link } from 'gatsby'
import classes from './blogpostnotification.module.scss'

const BlogPostNotification = () => {
  return (
    <div className={classes.box}>
      <h4>Hire Me!</h4>
      <p>I'm looking for a new position. Please check out my <Link to="/projects">projects page</Link>, my <Link to="/about">technologies and skills</Link> and <a href="mailto:ali@alilynne.com">contact me at ali@alilynne.com</a> if you're interested.</p>
    </div>
  )
}

export default BlogPostNotification
