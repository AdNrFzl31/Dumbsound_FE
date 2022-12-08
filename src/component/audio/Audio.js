import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, Stack } from "react-bootstrap"
import imgMusic from "../../asset/image/Music.png"
import Music from "../../asset/audio/Hindia-Evaluasi.mp3"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const style = {
  imgMusic: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    // border: "2px solid #bd0707",
  },
}

function Audio({ show, onHide }) {
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
          <img alt="" src={imgMusic} style={style.imgMusic} />
          <Stack direction="vertical">
            <p>Evaluasi - Hindia</p>
            <Stack direction="horizontal">
              <AudioPlayer
                autoPlay
                src={Music}
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
