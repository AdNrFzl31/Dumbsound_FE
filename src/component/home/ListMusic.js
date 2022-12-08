import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Col, Container, Row, Stack } from "react-bootstrap"
import Music from "../../asset/image/Music.png"
import Audio from "../audio/Audio"
import { Link } from "react-router-dom"

const style = {
  Card: {
    width: "18rem",
    backgroundColor: "#3A3A3A",
  },

  header: {
    color: "#EE4622",
  },

  colorWhite: {
    color: "white",
  },
}
function ListMusic() {
  const [audioShow, setAudioShow] = useState(false)
  return (
    <div className="my-5">
      <h4 className="text-center fw-bold my-5" style={style.header}>
        Dengarkan Dan Rasakan
      </h4>
      <Row className="justify-content-start">
        {/* d-flex gap-4 */}
        <Col>
          {/* <Link to={() => setAudioShow(true)}> */}
          <Card
            style={style.Card}
            // className="btn"
            onClick={() => setAudioShow(true)}
          >
            <Card.Img variant="top" src={Music} className="p-4 pb-2" />
            <Card.Body className="p-4 pt-3">
              <Stack direction="horizontal" className="justify-content-between">
                <Card.Title style={style.colorWhite}>Evaluasi</Card.Title>
                <Card.Title style={style.colorWhite}>2022</Card.Title>
              </Stack>
              <Card.Text style={style.colorWhite}>Hindia</Card.Text>
            </Card.Body>
          </Card>
          {/* </Link> */}

          <Audio show={audioShow} onHide={() => setAudioShow(false)} />
        </Col>
      </Row>
    </div>
  )
}

export default ListMusic
