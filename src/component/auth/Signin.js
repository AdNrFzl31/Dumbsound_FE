import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Form, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

const style = {
  bg: {
    backgroundColor: "#161616",
  },

  header: {
    fontWeight: "900",
    fontSize: "36px",
    lineHeight: "49px",
    color: "white",
  },

  colorText: {
    color: "#B1B1B1",
  },

  bgButton: {
    backgroundColor: "#EE4622",
    color: "white",
  },

  link: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  },

  form: {
    backgroundColor: "#454545",
    border: "2px solid #D2D2D2",
    color: "white",
  },
}

function Signin({ show, onHide, setShowSignin, setShowRegister }) {
  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Body className="bg-dark">
        <Modal.Title style={style.header} className="mb-3">
          Signin
        </Modal.Title>
        {/* {message && message} */}
        <Form
          // onSubmit={(e) => handleSubmit.mutate(e)}
          className="w-100 m-auto mt-3 d-grid gap-2"
        >
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              // onChange={handleOnChange}
              // value={dataSignin.email}
              // name="email"
              style={style.form}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              // onChange={handleOnChange}
              // value={dataSignin.password}
              // name="password"
              style={style.form}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="outline-none"
            className="fw-bold"
            style={style.bgButton}
            type="submit"
          >
            Signin
          </Button>
          <Form.Label style={style.colorText} className="text-center">
            Don't have an account ? Klik
            <Link
              className="ms-1"
              onClick={() => {
                setShowSignin(false)
                setShowRegister(true)
              }}
              style={style.link}
            >
              Here
            </Link>
          </Form.Label>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default Signin
