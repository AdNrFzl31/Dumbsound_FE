import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap"
import DropdownAdmin from "../dropdown/DropdownAdmin"
import DropdownUser from "../dropdown/DropdownUser"
import Logo from "../../asset/image/icon/Logo3.png"
import LogoPremium from "../../asset/image/icon/LogoPremium.png"
import Signin from "../auth/Signin"
import Register from "../auth/Register"

const style = {
  navTransparant: {
    backgrond: "rgba(0,0,0,0.4)",
  },

  btnColor: {
    backgroundColor: "#EE4622",
    color: "white",
    outline: "none",
  },

  btnOutline: {
    backgroundColor: "EE4622",
    border: "2px solid #EE4622",
    color: "white",
  },
}

function Navs() {
  const [showSignin, setShowSignin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <Navbar collapseOnSelect expand="lg" style={style.navTransparant}>
      <Container fluid className="px-5 py-2">
        <Navbar.Brand href="/">
          {/* <Nav.Link href="/"> */}
          {/* <img
            alt=""
            src={LogoPremium}
            width="50%"
            // height="50"
            className="d-inline-block align-top"
          /> */}
          <img
            alt=""
            src={Logo}
            width="50%"
            // height="50"
            className="d-inline-block align-top"
          />
          {/* </Nav.Link> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end gap-3"
        >
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* {state.isSignin === false ? ( */}
            {/* <> */}
            <Button
              className="px-5 me-4"
              size="sm"
              variant="outline-danger"
              style={style.btnOutline}
              onClick={() => setShowSignin(true)}
            >
              Signin
            </Button>
            <Button
              className="px-5 "
              size="sm"
              variant="outline-none"
              style={style.btnColor}
              onClick={() => setShowRegister(true)}
            >
              Register
            </Button>

            <Signin
              show={showSignin}
              onHide={() => setShowSignin(false)}
              setShowSignin={setShowSignin}
              setShowRegister={setShowRegister}
            />
            <Register
              show={showRegister}
              onHide={() => setShowRegister(false)}
              setShowSignin={setShowSignin}
              setShowRegister={setShowRegister}
            />
            {/* </> */}
            {/* // ) : (
        // <> */}
            {/* {state.user.role === "admin" ? ( */}
            {/* // Navbar Admin */}
            {/* <DropdownAdmin /> */}
            {/* ) : ( */}
            {/* // Navbar User */}
            {/* <DropdownUser */}
            {/* // userDropdown={userDropdown} logOut={logOut}
        /> */}
            {/* )} */}
            {/* </> */}
            {/* )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs
