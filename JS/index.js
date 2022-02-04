import react from 'react'
import reactDom from 'react-dom'
import Creations from './creations'
import Home from './home'
import PageT from './page2'
import "./scss/main.css"
import Footer from './footer'

const Index = () => {

  return <>
    <Home />
    <PageT />
    <Creations />
    <Footer />
  </>
}


reactDom.render(<Index />, document.getElementById("root"))