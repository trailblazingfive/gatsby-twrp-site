import React from 'react'
import styled from "styled-components"

const MButton = styled.div`
  background: #375e96;
  padding: 10px;
  margin: 10px;
  text-transform: uppercase;
  text-align: left;
  color: #eef5fb;
  font-size: 1.3em;
  user-select: none;
  transform: skewX(-3deg);
  &:hover{
    text-decoration: underline;
    text-align:center;
    font-weight: 800;
  }
`

const MenuButton = (props) => {

  return (
    <a href={props.target} target="_blank" rel="noopener noreferrer" title={props.title}>
      <MButton>
        {props.name}
      </MButton>
    </a>
  );
}

export default MenuButton;

