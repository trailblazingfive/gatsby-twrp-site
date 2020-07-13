import React from 'react'
import styled from "styled-components"

const ContentArea = styled.div`
  grid-area: ContentArea;
  background: lime;
  min-height: 300px;
`

const Content = ({ props, children }) => {

  return (
    <ContentArea>
      Content
      {children}
    </ContentArea>
  );
}

export default Content;

