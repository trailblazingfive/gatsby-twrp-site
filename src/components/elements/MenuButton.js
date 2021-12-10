import React from 'react'
import styled from "styled-components"
import { GLOBAL_COLOURS } from '../../shared/theming';

const MButton = styled.div`
  background: ${GLOBAL_COLOURS.BUTTON_MAIN};
  padding: 10px 30px 10px 30px;
  margin: 10px;
  text-transform: uppercase;
  text-align: center;
  color: ${GLOBAL_COLOURS.TEXT_MAIN};
  font-size: 1.3em;
  user-select: none;
  transform: skewX(-3deg);
  font-weight: 600;
  :hover{
    text-decoration: underline;
    background: ${GLOBAL_COLOURS.TEXT_MAIN};
    color: ${GLOBAL_COLOURS.BUTTON_MAIN};
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

