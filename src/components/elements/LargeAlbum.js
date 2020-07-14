import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Container = styled.div`
  width: 500px;
  margin: 10px;
  background: #eef5fb;
  padding: 10px;
  border-radius: 5px;
  &:hover{
    background: #ed98db;
    padding: 15px;
    margin: 5px;
  }
  @media (max-width:899px){
    width: 70vw;
    margin: 0 auto;
    &:hover{
      background: #ed98db;
      margin: 0 auto;
      padding: 10px;
    }
  }
  
`

const LargeAlbum = (props) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "albums"}, name: {}}) {
      edges {
        node {
          childImageSharp {
            fluid(sizes:"90") {
              originalName
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`)


  let cover = data.allFile.edges.filter(allCovers => allCovers.node.childImageSharp.fluid.originalName === props.albumCover)[0]


  return (
    <Container>
      <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
        <Img fluid={cover.node.childImageSharp.fluid} />
      </a>
    </Container>
  )
}

export default LargeAlbum
