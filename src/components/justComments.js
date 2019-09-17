import React from 'react'

import JustComments from 'gatsby-plugin-just-comments'

const justComments = () => {
  return (
    <div>
      <JustComments
        apikey="34896e12-7801-4bde-8d88-042289092b9e"
        locale="en_US"
        recaptcha="true"
        disableanonymouslogin="true"
        hidenocommentstext="true"
      />
    </div>
  )
}

export default justComments
