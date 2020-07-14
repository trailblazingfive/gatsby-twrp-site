import React from 'react'
import styled from "styled-components"

import MenuButton from "./elements/MenuButton"

const MainMenuArea = styled.div`
  margin-top: 20px;
  background: #ed98db;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainMenu = () => {

  return (
    <MainMenuArea>
      <MenuButton name={"Listen now"} target={"https://lnk.to/TWRP"} title={"Listen now to TWRP"}/>
      <MenuButton name={"Bandcamp"} target={"https://twrp.bandcamp.com/"} title={"Get TWRP music"}/>
      <MenuButton name={"Merch"} target={"https://twrp.store-08.com/featured/"} title={"Checkout TWRP merch"}/>
      {/* <MenuButton name={""} target={""} title={""}/> */}
    </MainMenuArea>
  );
}

export default MainMenu;

