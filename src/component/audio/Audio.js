import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, Stack } from "react-bootstrap"
import imgMusic from "../../asset/image/Music.png"
import Music from "../../asset/audio/Hindia-Evaluasi.mp3"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { API } from "../../confiq/api"

const style = {
  imgMusic: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    // border: "2px solid #bd0707",
  },
}

function Audio({ show, onHide, dataAudio }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Stack direction="horizontal" gap={3}>
          <img alt="" src={dataAudio?.tumbnail} style={style.imgMusic} />
          <Stack direction="vertical">
            <p>
              {dataAudio?.title} - {dataAudio?.artist.name}
            </p>
            <Stack direction="horizontal">
              <AudioPlayer
                autoPlay
                src={dataAudio?.music}
                layout="horizontal"
                className="player"
              />
            </Stack>
          </Stack>
        </Stack>
      </Modal.Body>
    </Modal>
  )
}

export default Audio
