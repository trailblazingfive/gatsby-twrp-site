import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


import AlbumIcon from "../components/elements/AlbumIcon"

const AlbumGrid = styled.div`
  display: flex;
  flex-direction: row;
`

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Albums = () => (
  <Layout>
    <SEO title="Albums" />
  </Layout>
)

export default Albums
