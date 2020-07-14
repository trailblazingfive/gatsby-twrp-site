import React from 'react'
import styled from "styled-components"

import MainMenu from "./MainMenu"

const TopBarArea = styled.div`
  grid-area: TopBarArea;
  text-align: center;
  background: #ed98db;
  color: #eef5fb;
  padding-top: 30px;
  padding-bottom: 10px;
`

const BandName = styled.div`
  font-size: 7em;
  line-height: 0.5em;
  font-weight: 500;
  background: #ed98db;
  user-select: none;
  font-family: 'Anton';
  color: #eef5fb;
`

const TopBar = () => {

  return (
    <TopBarArea>
      <a href="/">
        <BandName>TWRP</BandName>
      </a>
      <MainMenu/>
    </TopBarArea>
  );
}

export default TopBar;

