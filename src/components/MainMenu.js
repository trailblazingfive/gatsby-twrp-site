import React from 'react'
import styled from "styled-components"

import MenuButton from "./elements/MenuButton"

const MainMenuArea = styled.div`
  margin-top: 20px;
  background: #ed98db;
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
      <MenuButton name={"Albums"} target={"/albums"} title={"Our albums"} newTab={false}/>
      {/* <MenuButton name={""} target={""} title={""}/> */}
    </MainMenuArea>
  );
}

export default MainMenu;

