import React from 'react'
import styled from "styled-components"

const MButton = styled.div`
  background: #375e96;
  padding: 10px;
  margin: 10px;
  text-transform: uppercase;
  text-align: center;
  color: #eef5fb;
  font-size: 1.3em;
  &:hover{
    text-decoration: underline;
  }
`

const MenuButton = (props) => {

  return (
    <MButton>
      {props.name}
    </MButton>
  );
}

export default MenuButton;

