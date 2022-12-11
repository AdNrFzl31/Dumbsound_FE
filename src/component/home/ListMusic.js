import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Col, Container, Row, Stack } from "react-bootstrap"
import Music from "../../asset/image/Music.png"
import Audio from "../audio/Audio"
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import { API } from "../../confiq/api"

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

  let { data: musics } = useQuery("musicCache", async () => {
    const response = await API.get("/musics")
    return response.data.data
  })
  console.log("data music : ", musics)

  return (
    <div className="my-5 p-0">
      <h4 className="text-center fw-bold my-5" style={style.header}>
        Dengarkan Dan Rasakan
      </h4>
      <Row className="d-flex gap-4 justify-content-center">
        {/* d-flex gap-4 */}
        {/* <>
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
        </> */}
        {musics?.map((music) => (
          <>
            <Card
              style={style.Card}
              // className="btn"
              onClick={() => setAudioShow(true)}
            >
              <Card.Img
                variant="top"
                src={music.tumbnail}
                className="p-4 pb-2"
              />
              <Card.Body className="p-4 pt-3">
                <Stack
                  direction="horizontal"
                  className="justify-content-between"
                >
                  <Card.Title style={style.colorWhite}>
                    {music.title}
                  </Card.Title>
                  <Card.Title style={style.colorWhite}>{music.year}</Card.Title>
                </Stack>
                <Card.Text style={style.colorWhite}>
                  {music.artist.name}
                </Card.Text>
              </Card.Body>
            </Card>
            <Audio
              show={audioShow}
              musicId={music.id}
              onHide={() => setAudioShow(false)}
            />
          </>
        ))}
      </Row>
    </div>
  )
}

export default ListMusic
