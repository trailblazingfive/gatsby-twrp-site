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

const Container = styled.a`
  width: 300px;
  margin: 10px;
  background: #eef5fb;
  padding: 10px;
  border-radius: 5px;
  &:hover{
    background: #ed98db;
    padding: 15px;
    margin: 5px;
  }
`
const Album = styled.div`
  text-align: center;
  background: #ed98db;
  color: #eef5fb;
  padding: 10px;
  font-family: 'Anton';
  user-select: none;
  margin-top: 10px;
`

const AlbumName = styled.div`
  text-align: center;
  background: #ed98db;
  color: #eef5fb;
  font-family: 'Anton';
  padding: 0;
  margin: 0;
  font-size: 1.5em;
  margin-top: -15px;
  margin-bottom: 5px;
`

const AlbumDate = styled.div`
  position: relative;
  top: -10px;
  right: 0px;
  background: transparent;
  text-align: right;
  font-family: Lato;
  font-size: 0.7em;
`

const path = "albums/return-to-wherever.jpg"

const AlbumIcon = (props) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "albums"}, name: {}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 900) {
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
    <Container href={props.storeLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    title={props.albumName + " (" + props.albumDate + ")"}>
      <Img fluid={cover.node.childImageSharp.fluid} />
      <Album>
        <AlbumDate>{props.albumDate}</AlbumDate>
        <AlbumName>{props.albumName}</AlbumName>
      </Album>
      
    </Container>
  )
}

export default AlbumIcon
