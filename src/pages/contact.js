import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import Head from '../components/head'

import contactStyles from './contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Info</h1>
      <p>Feel free to contact me whichever way works for you!</p>
      <ul className={contactStyles.list}>
        <li className={contactStyles.list__item}>
          <a className={contactStyles.list__icon} href="https://www.twitter.com/alilynnet">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className={contactStyles.list__item}>
          <a className={contactStyles.list__icon} href="https://dev.to/alilynne">
            <FontAwesomeIcon icon={faDev} />
          </a>
        </li>
        <li className={contactStyles.list__item}>
          <a className={contactStyles.list__icon} href="https://www.github.com/alilynne">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </li>
        <li className={contactStyles.list__item}>
          <a className={contactStyles.list__icon} href="https://www.linkedin.com/in/alilynne/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className={contactStyles.list__item}>
          <a className={contactStyles.list__icon} href="mailto:ali@alilynne.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage