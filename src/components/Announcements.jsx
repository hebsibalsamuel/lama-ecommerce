import React from 'react'
import styled from 'styled-components'

const Announcement = styled.div`
height:30px;
width:100%;
display: flex;
justify-content: center;
align-items: center;
background: antiquewhite;
/* text-align:center; */
`

function Announcements() {
  return (
    <>
    <Announcement>GET DEALS UPTO 50% OFF</Announcement>
    </>
  )
}

export default Announcements