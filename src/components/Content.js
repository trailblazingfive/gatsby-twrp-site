import React from 'react'
import styled from "styled-components"

const ContentArea = styled.div`
  grid-area: ContentArea;
  min-height: 300px;
  padding: 10px;
  margin: 0 auto;
`

const Content = ({ props, children }) => {

  return (
    <ContentArea>
      {children}
    </ContentArea>
  );
}

export default Content;

