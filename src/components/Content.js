import React from 'react'
import styled from "styled-components"

const ContentArea = styled.div`
  grid-area: ContentArea;
  min-height: 300px;
  padding: 30px;
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

