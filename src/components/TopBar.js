import React from 'react'
import styled from "styled-components"

const TopBarArea = styled.div`
  grid-area: TopBarArea;
  text-align: center;
  padding: 60px;
  background: #ed98db;
  color: #eef5fb;
`

const BandName = styled.h1`
  font-size: 7em;
  font-weight: 500;
  background: #ed98db;
  user-select: none;
  font-family: 'Anton';
`

const TopBar = () => {

  return (
    <TopBarArea>
      <BandName>TWRP</BandName>
    </TopBarArea>
  );
}

export default TopBar;

