import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Container } from "react-bootstrap"
import ListMusic from "../component/home/ListMusic"
import Jumbotron from "../component/home/Jumbotron"
import Navs from "../component/navbar/Navbar"

function Home() {
  return (
    <Container fluid className="p-0">
      <Jumbotron />
      <ListMusic />
    </Container>
  )
}

export default Home
