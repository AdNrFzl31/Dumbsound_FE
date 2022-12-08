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
    color: "white",
  },

  bgButton: {
    width: "90%",
    color: "white",
    backgroundColor: "#EE4622",
  },
}

function AddMusic() {
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
              <Row>
                <Col xs={10}>
                  <Form.Group className="mb-3 " controlId="title">
                    <Form.Control
                      // value={dataLogin.title}
                      // onChange={handleOnChange}
                      // name="title"
                      style={style.form}
                      type="text"
                      placeholder="Title"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="image">
                    <Form.Control
                      // onChange={handleOnChange}
                      // value={dataLogin.image}
                      // name="image"
                      style={style.form}
                      type="file"
                      placeholder="Image"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="year">
                <Form.Control
                  // onChange={handleOnChange}
                  // value={dataLogin.year}
                  // name="year"
                  style={style.form}
                  type="text"
                  placeholder="Year"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select style={style.form}>
                  <option hidden>Singer</option>
                  <option>Singer</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="music">
                <Form.Control
                  // onChange={handleOnChange}
                  // value={dataLogin.music}
                  // name="music"
                  style={style.form}
                  type="file"
                  placeholder="Music"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-none"
                  className="fw-bold"
                  style={style.bgButton}
                  type="submit"
                >
                  Add Song
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddMusic
