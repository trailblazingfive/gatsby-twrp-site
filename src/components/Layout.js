import React from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./Layout.css"


import TopBar from "./TopBar"
import MainMenu from "./MainMenu"
import Content from "./Content"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <div className="Layout">
      <TopBar></TopBar>
      <MainMenu></MainMenu>
      <Content>
        { children }
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default Layout