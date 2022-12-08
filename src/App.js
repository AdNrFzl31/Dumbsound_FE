import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Nav } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pay from "./pages/user/Pay"
import Income from "./pages/admin/Income"
import AddMusic from "./pages/admin/AddMusic"
import AddArtist from "./pages/admin/AddArtist"
import Navs from "./component/navbar/Navbar"

function App() {
  return (
    <>
      {/* <Navs /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/income" element={<Income />} />
        <Route path="/addMusic" element={<AddMusic />} />
        <Route path="/addArtist" element={<AddArtist />} />
      </Routes>
    </>
  )
}

export default App
