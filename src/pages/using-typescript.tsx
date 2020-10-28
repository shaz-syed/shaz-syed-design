// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>Resume</h1>
    <p> I have designed experiences for various industries like Technology, Healthcare and Tourism. I feel strongly about understanding my users first, before translating research into products. </p>
    <Link to="/">Go back to the homepage</Link>
    <h1>Qualifications</h1>
    <h1>Software Tools</h1>
    <h1>Projects</h1>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
