import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

import MainMenu from "./MainMenu"
import { GLOBAL_COLOURS } from "../shared/theming"


const TopBarArea = styled.div`
  grid-area: TopBarArea;
  text-align: center;
  background: ${GLOBAL_COLOURS.BACKGROUND_SECONDARY};
  color: ${GLOBAL_COLOURS.TEXT_MAIN};
  padding-top: 30px;
  padding-bottom: 10px;
`

const BandName = styled.div`
  font-size: 7em;
  line-height: 0.5em;
  font-weight: 500;
  background: ${GLOBAL_COLOURS.BACKGROUND_SECONDARY};
  user-select: none;
  font-family: 'Anton';
  color: ${GLOBAL_COLOURS.TEXT_MAIN};
`

const TopBar = () => {

  return (
    <TopBarArea>
      <Link to="/">
        <BandName>TWRP</BandName>
      </Link>
      <MainMenu/>
    </TopBarArea>
  );
}

export default TopBar;

