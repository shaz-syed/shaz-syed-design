import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>UI Design</h1>
    <p>To created UI/UX prototype which makes people smile, or reminds them of other happy experiences, ensures that users will come back again and again.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
