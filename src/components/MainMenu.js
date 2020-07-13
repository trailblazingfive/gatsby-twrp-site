import React from 'react'
import styled from "styled-components"

const MainMenuArea = styled.div`
  grid-area: MainMenuArea;
  background: red;
`

const MainMenu = ({ props, children }) => {

  return (
    <MainMenuArea>
      Main Menu
    </MainMenuArea>
  );
}

export default MainMenu;

