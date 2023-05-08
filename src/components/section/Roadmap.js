import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import Drawsvg from "../Drawsvg"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.text};
  width: fit-content;
`

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${props => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${"" /* background-color: lightblue; */}

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props => props.theme.text};
`
const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouselColor};
  color: ${props => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};

  font-weight: 400;
  margin: 0.5 rem 0;
`
const Text = styled.span``

const RoadmapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {
  const revealRefs = useRef([])
  revealRefs.current = []

  gsap.registerPlugin()

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline()
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200",
            end: "bottom center",
            scrub: true,
            //markers: true
          },
        }
      )
    })
  }, [])

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <Drawsvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadmapItem
            addToRef={addToRefs}
            title="Grand Opening"
            subtext="lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="Great Benifits"
            subtext="lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="Early Access"
            subtext="lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="New Merch"
            subtext="lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
          <RoadmapItem
            addToRef={addToRefs}
            title="Holders Ranking"
            subtext="lorem ipsum dolor sit amet consectetur, adipisicing elit."
          />
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap
