import React from "react"
import styled from "styled-components"

import AlbumIcon from "../components/elements/AlbumIcon"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const AlbumGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`


const Albums = () => (
  <Layout>
    <SEO title="Albums" />
    <AlbumGrid>
      <AlbumIcon
        storeLink={"https://twrp.bandcamp.com/album/return-to-wherever"}
        albumName={"Return to Wherever"}
        albumCover={"return-to-wherever.jpg"}
        albumDate={"Jul 2019"}
      />
      <AlbumIcon
        storeLink={"https://twrp.bandcamp.com/album/together-through-time"}
        albumName={"Together Through Time"}
        albumCover={"together-through-time.jpg"}
        albumDate={"May 2018"}
      />
      <AlbumIcon
        storeLink={"https://twrp.bandcamp.com/album/ladyworld"}
        albumName={"Ladyworld"}
        albumCover={"ladyworld.jpg"}
        albumDate={"Jan 2017"} />
      <AlbumIcon
        storeLink={"https://twrp.bandcamp.com/album/guardians-of-the-zone"}
        albumName={"Guardians of the Zone"}
        albumCover={"guardians-of-the-zone.jpg"}
        albumDate={"Apr 2016"} />
      <AlbumIcon
        storeLink={"https://twrp.bandcamp.com/album/believe-in-your-dreams"}
        albumName={"Believe in Your Dreams"}
        albumCover={"believe-in-your-dreams.jpg"}
        albumDate={"Sep 2015"} />
      <AlbumIcon
        storeLink={"https://twrp.bandcamp.com/album/2nite-ep"}
        albumName={"2nite"}
        albumCover={"2nite-ep.jpg"}
        albumDate={"Jan 2015"} />
      <AlbumIcon
        storeLink={"https://twrp.bandcamp.com/album/the-device-ep"}
        albumName={"The Device"}
        albumCover={"the-device-ep.jpg"}
        albumDate={"Sep 2012"} />
    </AlbumGrid>
  </Layout>
)

export default Albums
