//Removes page reloading - Same as with React Router but using href instead of to.
import Link from 'next/link';
import React from 'react'
import Layout from "../components/Layout";

const AboutUs = () => {
  return (
    <Layout page = "About Us">
      <h1>About Us</h1>
    </Layout>
  )
}

export default AboutUs;