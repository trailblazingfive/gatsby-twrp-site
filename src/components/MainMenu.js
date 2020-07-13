import React from 'react'
import styled from "styled-components"

import MenuButton from "./elements/MenuButton"

const MainMenuArea = styled.div`
  grid-area: MainMenuArea;
  background: red;
`

const MainMenu = () => {

  return (
    <MainMenuArea>
      <MenuButton name={"Listen now"}/>
      <MenuButton name={"Bandcamp"}/>
      <MenuButton name={"Merch"}/>
    </MainMenuArea>
  );
}

export default MainMenu;

