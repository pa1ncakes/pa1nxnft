import React from "react"
import styled from "styled-components"
import video from "../assets/Home Video.mp4"

const VideoContainer = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`
const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={video} type="video/mp4" autoPlay loop muted />
    </VideoContainer>
  )
}

export default CoverVideo
