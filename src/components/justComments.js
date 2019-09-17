import React from 'react'

import JustComments from 'gatsby-plugin-just-comments'

const justComments = () => {
  return (
    <div>
      <JustComments
        apikey={process.env.GATSBY_JUST_COMMENTS_API_KEY}
        locale="en_US"
        recaptcha="true"
        disableanonymouslogin="true"
        hidenocommentstext="true"
      />
    </div>
  )
}

export default justComments
