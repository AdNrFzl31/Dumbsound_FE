import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

const style = {
  bg: {
    background: "#161616",
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
    color: "white",
    backgroundColor: "#EE4622",
  },

  link: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  },

  form: {
    backgroundColor: "#454545",
    border: "2px solid #D2D2D2",
    // color: "white",
    color: "#b9b9b9",
  },

  colorTextarea: {
    color: "#b9b9b9",
  },

  formTextarea: {
    height: "100px",
    resize: "none",
    backgroundColor: "#454545",
    border: "2px solid #D2D2D2",
  },
}

function Register({ show, onHide, setShowSignin, setShowRegister }) {
  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Body className="bg-dark">
        <Modal.Title style={style.header} className="mb-3">
          Register
        </Modal.Title>
        {/* {message && message} */}
        <Form
          // onSubmit={(e) => handleSubmit.mutate(e)}
          className="w-100 m-auto mt-3 d-grid gap-2"
        >
          <Form.Group className="mb-3 " controlId="email">
            <Form.Control
              // onChange={handleOnChange}
              // value={dataRegister.email}
              // name="email"
              style={style.form}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              // onChange={handleOnChange}
              // value={dataRegister.password}
              // name="password"
              style={style.form}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Control
              // onChange={handleOnChange}
              // value={dataRegister.fullname}
              // name="fullname"
              style={style.form}
              type="text"
              placeholder="Fullname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select style={style.form}>
              <option hidden>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Control
              // onChange={handleOnChange}
              // value={dataRegister.phone}
              // name="phone"
              style={style.form}
              type="number"
              placeholder="Phone"
            />
          </Form.Group>
          <FloatingLabel
            className="mb-3"
            controlId="floatingTextarea2"
            style={style.colorTextarea}
            label="Address"
          >
            <Form.Control
              // onChange={handleOnChange}
              // value={DataPay.address}
              // name="address"
              as="textarea"
              placeholder="Address"
              style={style.formTextarea}
            />
          </FloatingLabel>
          <Button
            variant="outline-none"
            className="fw-bold"
            style={style.bgButton}
            type="submit"
          >
            Register
          </Button>
          <Form.Label style={style.colorText} className="text-center">
            Don't have an account ? Klik
            <Link
              className="ms-1"
              onClick={() => {
                setShowRegister(false)
                setShowSignin(true)
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

export default Register
