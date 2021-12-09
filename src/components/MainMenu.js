import React from 'react'
import styled from "styled-components"

import MenuButton from "./elements/MenuButton"
import MenuButtonInternal from "./elements/MenuButtonInternal"
import { GLOBAL_COLOURS } from '../shared/theming';


const MainMenuArea = styled.div`
  margin-top: 20px;
  background: ${GLOBAL_COLOURS.BACKGROUND_SECONDARY};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:899px){
    flex-direction: row;
  }
`

const MainMenu = () => {

  return (
    <MainMenuArea>
      <MenuButton name={"Listen now"} target={"https://lnk.to/TWRP"} title={"Listen now to TWRP"} newTab={true}/>
      <MenuButton name={"Bandcamp"} target={"https://twrp.bandcamp.com/"} title={"Get TWRP music"} newTab={true}/>
      <MenuButton name={"Merch"} target={"https://twrp.store-08.com/featured/"} title={"Checkout TWRP merch"} newTab={true}/>
      <MenuButtonInternal name={"Albums"} target={"/albums"} title={"Our albums"} newTab={false}/>
      {/* <MenuButton name={""} target={""} title={""}/> */}
    </MainMenuArea>
  );
}

export default MainMenu;

