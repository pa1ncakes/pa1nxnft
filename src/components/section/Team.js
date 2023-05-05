import React from "react"
import styled from "styled-components"

import img2 from "../../assets/Nfts/bighead-2.svg"
import img1 from "../../assets/Nfts/bighead-1.svg"
import img3 from "../../assets/Nfts/bighead-3.svg"
import img4 from "../../assets/Nfts/bighead-4.svg"
import img5 from "../../assets/Nfts/bighead-5.svg"
import img6 from "../../assets/Nfts/bighead-6.svg"
import img7 from "../../assets/Nfts/bighead-7.svg"
import img8 from "../../assets/Nfts/bighead-8.svg"
import img9 from "../../assets/Nfts/bighead-9.svg"
import img10 from "../../assets/Nfts/bighead-10.svg"

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
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${"" /* background-color: lightblue; */}
`
const Item = styled.div`
  width: calc(20rem-4vw);
  padding: 1rem 0.5rem;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${props => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${props => props.theme.carouselColor};
  border: 1px solid ${props => props.theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease-in-out;
  }
`
const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`
const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="SKYBLAZE" position="CEO" />
        <MemberComponent img={img2} name="MEGNUM" position="CFO" />
        <MemberComponent img={img3} name="MONKEY KING" position="CTO" />
        <MemberComponent
          img={img4}
          name="BLACK PANTHER"
          position="Product Manager"
        />
        <MemberComponent img={img5} name="DEATHSTROKE" position="UI Designer" />
        <MemberComponent
          img={img6}
          name="LAZYKONG"
          position="Social Media Manager"
        />
        <MemberComponent
          img={img7}
          name="CYBER PUNK"
          position="Blockchain Specialist"
        />
        <MemberComponent img={img8} name="MONK" position="Web3 Developer" />
        <MemberComponent img={img9} name="BANANA" position="Graphic Designer" />
      </Container>
    </Section>
  )
}

export default Team
