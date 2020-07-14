import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const AlbumContainer = styled.div`
  background: #375e96;
  padding: 10px 30px 10px 30px;
  margin: 10px;
  text-transform: uppercase;
  text-align: center;
  color: #eef5fb;
  font-size: 1.3em;
  user-select: none;
  transform: skewX(-3deg);
  font-weight: 600;
  :hover{
    text-decoration: underline;
    background: #eef5fb;
    color: #375e96;
  }
`

const AlbumIcon = (props) => {

  return (
    <a href={props.target} target="_blank" rel="noopener noreferrer" title={props.title}>
      <AlbumContainer>
        <img></img>
        {props.name}
      </AlbumContainer>
    </a>
  );
}

export default AlbumIcon;

