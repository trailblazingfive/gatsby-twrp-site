import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Capsule = styled.div`
  color: #375e96;
  text-align: center;
  > p {
    color: red;
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Capsule>
      <h1>New album and new tour dates</h1>
      {/* <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p> */}
      <a href="https://twitter.com/TWRPband" target="_blank" rel="noopener noreferrer" title="Follow us!">
      <div style={{ maxWidth: `500px`, margin: `1em` }}>
        <Image />
      </div>
      </a>
      {/* <Link to="/albums/">Our albums</Link> <br /> */}
    </Capsule>
  </Layout>
)

export default IndexPage
