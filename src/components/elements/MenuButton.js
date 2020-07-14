import React from 'react'
import styled from "styled-components"

const MButton = styled.div`
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
  @media (max-width:899px){
    font-size: 0.5em;
    padding: 5px 10px 5px 10px;
    margin: 1vw;
  }
`

const MenuButton = (props) => {

  return (

    <a href={props.target}
      target={(props.newTab) ? "_blank" : ""}
      rel="noopener noreferrer"
      title={props.title}>
      <MButton>
        {props.name}
      </MButton>
    </a>

  );
}

export default MenuButton;

