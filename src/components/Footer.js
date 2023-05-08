import React from "react"
import styled from "styled-components"
import Banner from "./Banner"
import Logo from "./Logo"
import Facebook from "../Icons/Facebook"
import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import Linkedin from "../Icons/LinkedIn"

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  position: relative;
  display: flex;
  ${"" /* justify-content: center; */}
  ${"" /* align-items: center; */}
  flex-direction: column;
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.text};
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
`
const Footer = () => {
  const scrollTo = id => {
    const element = document.getElementById(id)
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    })
  }

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://www.facebook.com/" target="blank" rel="noopener">
              <Facebook />
            </a>
            <a href="https://www.facebook.com/" target="blank" rel="noopener">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/" target="blank" rel="noopener">
              <Twitter />
            </a>
            <a href="https://www.facebook.com/" target="blank" rel="noopener">
              <Linkedin />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("roadmap")}>Roadmap</Item>
          <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
          <Item onClick={() => scrollTo("team")}>Team</Item>
          <Item onClick={() => scrollTo("faq")}>FAQ</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy;{new Date().getFullYear()} Wierdos Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by{" "}
          <a href="#" target="blank" rel="norefferer noopener">
            pa1ncakes
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer
