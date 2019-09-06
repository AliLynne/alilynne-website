import React from 'react'

import ContactList from '../components/contactList'
import Layout from '../components/layout'
import SEO from '../components/seo'



const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Info</h1>
      <p>Feel free to contact me whichever way works for you!</p>
      <ContactList />
    </Layout>
  )
}

export default ContactPage