import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { GLOBAL_COLOURS } from "../shared/theming"

const Notice = styled.div`
  font-size: 3em;
  line-height: 1em;
  font-weight: 500;
  background: ${GLOBAL_COLOURS.BACKGROUND_SECONDARY};
  user-select: none;
  font-family: 'Anton';
  color: ${GLOBAL_COLOURS.TEXT_MAIN};
  padding: 10px;
  text-align: center;
  &:hover{
    transform: skewX(-10deg) scale(1.1)
  }
  @media (max-width:899px){
    font-size: 10vw;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Notice>404: Page not found, we are sorry!</Notice>
  </Layout>
)

export default NotFoundPage
