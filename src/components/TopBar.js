import React from 'react'
import styled from "styled-components"

const TopBarArea = styled.div`
  grid-area: TopBarArea;
  background: blue;
`

const TopBar = ({ props, children }) => {

  return (
    <TopBarArea>
      Top Bar
    </TopBarArea>
  );
}

export default TopBar;

