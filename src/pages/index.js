import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import LargeAlbum from "../components/elements/LargeAlbum"
import SEO from "../components/seo"


const Capsule = styled.div`
  color: #375e96;
  text-align: center;
  align-items: center;
  justify-content: center;
  > p {
    color: red;
  }
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Capsule>
      <LargeAlbum 
      albumName={"Return to Wherever"} 
      albumCover={"return-to-wherever.jpg"}
      link={"https://twrp.bandcamp.com/"}
      title={"Check out our latest album!"}
      />
    </Capsule>
  </Layout>
)

export default IndexPage
