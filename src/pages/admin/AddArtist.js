import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Navs from "../../component/navbar/Navbar"

const style = {
  header: {
    color: "white",
  },

  formAll: {
    width: "90%",
  },

  form: {
    backgroundColor: "#454545",
    border: "2px solid #D2D2D2",
    color: "#B1B1B1",
  },

  bgButton: {
    width: "90%",
    color: "white",
    backgroundColor: "#EE4622",
  },
}

function AddArtist() {
  return (
    <>
      <Navs />
      <Container className="my-5">
        <h4 className="fw-bold my-4" style={style.header}>
          Add Music
        </h4>
        <Row>
          <Col>
            <Form
              // onSubmit={(e) => handleSubmit.mutate(e)}
              style={style.formAll}
              className="m-auto mt-3 d-grid gap-2"
            >
              <Form.Group className="mb-3 " controlId="name">
                <Form.Control
                  // value={dataLogin.name}
                  // onChange={handleOnChange}
                  // name="name"
                  style={style.form}
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="old">
                <Form.Control
                  // onChange={handleOnChange}
                  // value={dataLogin.old}
                  // name="old"
                  style={style.form}
                  type="text"
                  placeholder="Old"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select style={style.form}>
                  <option hidden>Singer Group</option>
                  <option>Solo</option>
                  <option>Duo</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="career">
                <Form.Control
                  // onChange={handleOnChange}
                  // value={dataLogin.career}
                  // name="career"
                  style={style.form}
                  type="text"
                  placeholder="Start Career"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-none"
                  className="fw-bold"
                  style={style.bgButton}
                  type="submit"
                >
                  Add Artist
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddArtist
