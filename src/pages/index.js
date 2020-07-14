import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import LargeAlbum from "../components/elements/LargeAlbum"
import SEO from "../components/Seo"


const Capsule = styled.div`
  color: #375e96;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const NoticeLink = styled.a`
  font-family: 'Anton';
  color: #eef5fb;
  padding: 10px;

`

const Notice = styled.div`
  font-size: 3em;
  line-height: 1em;
  font-weight: 500;
  background: #ed98db;
  user-select: none;
  font-family: 'Anton';
  color: #eef5fb;
  padding: 10px;
  &:hover{
    transform: skewX(-10deg) scale(1.1)
  }
  @media (max-width:899px){
    font-size: 10vw;
  }
`

let noticeLink = "https://www.twitch.tv/thetwrpshow/"
let noticeText = "Tune in The TWRP Show!"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Capsule>
      <NoticeLink href={noticeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Notice>
          {noticeText}
        </Notice>
      </NoticeLink>
      <LargeAlbum
        albumName={"Return to Wherever"}
        albumCover={"return-to-wherever.jpg"}
        link={"https://twrp.bandcamp.com/"}
        title={"Check out our latest album!"}
      />
    </Capsule>
  </Layout>
)

export default IndexPage
