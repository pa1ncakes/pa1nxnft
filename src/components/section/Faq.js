import React, { useLayoutEffect, useRef } from "react"
import styled from "styled-components"
import Accordion from "../Accordion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  height: auto;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.carouselColor};
  width: fit-content;
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`
const Box = styled.div`
  width: 45%;

  @media (max-width: 48em) {
    width: 90%;
    align-self: center;
  }
`

const Faq = () => {
  const ref = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let element = ref.current

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
    return () => {
      ScrollTrigger.kill()
    }
  }, [])

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq
