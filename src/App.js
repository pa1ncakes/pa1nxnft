import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import { light } from "./styles/Themes"
import Navigation from "./components/Navigation"
import Home from "./components/section/Home"
import Roadmap from "./components/section/Roadmap"
import Showcase from "./components/section/Showcase"
import Team from "./components/section/Team"
import Faq from "./components/section/Faq"
import Footer from "./components/Footer"
import About from "./components/section/About"
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        Appfile
      </ThemeProvider>
    </>
  )
}

export default App
