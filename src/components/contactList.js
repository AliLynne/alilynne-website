import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import contactStyles from './contact.module.scss'

const contactList = () => {
  return (
    <ul className={contactStyles.list}>
      <li className={contactStyles.list__item}>
        <a className={contactStyles.list__icon} href="https://www.twitter.com/alilynnet">
          <FontAwesomeIcon icon={faTwitter} />
          <span className={contactStyles.visibleHidden}>Twitter</span>
        </a>
      </li>
      <li className={contactStyles.list__item}>
        <a className={contactStyles.list__icon} href="https://dev.to/alilynne">
          <FontAwesomeIcon icon={faDev} />
          <span className={contactStyles.visibleHidden}>Dev.to</span>
        </a>
      </li>
      <li className={contactStyles.list__item}>
        <a className={contactStyles.list__icon} href="https://www.github.com/alilynne">
          <FontAwesomeIcon icon={faGithubSquare} />
          <span className={contactStyles.visibleHidden}>Github</span>
        </a>
      </li>
      <li className={contactStyles.list__item}>
        <a className={contactStyles.list__icon} href="https://www.linkedin.com/in/alilynne/">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className={contactStyles.visibleHidden}>LinkedIn</span>
        </a>
      </li>
      <li className={contactStyles.list__item}>
        <a className={contactStyles.list__icon} href="mailto:ali@alilynne.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className={contactStyles.visibleHidden}>Email</span>
        </a>
      </li>
    </ul>
  )
}

export default contactList
