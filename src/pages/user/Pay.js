import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Form, InputGroup } from "react-bootstrap"
import Navs from "../../component/navbar/Navbar"
import file from "../../asset/image/icon/file.png"

const style = {
  header: {
    color: "white",
    fontSize: "50px",
  },

  textDumb: {
    color: "#EE4622",
  },

  textWhite: {
    color: "white",
  },

  form: {
    backgroundColor: "#D2D2D2",
    border: "2px solid #D2D2D2",
    color: "#B1B1B1",
  },

  imgfile: {
    width: "20px",
    height: "30px",
  },

  bgButton: {
    width: "500px",
    color: "white",
    backgroundColor: "#EE4622",
  },
}

function Pay() {
  return (
    <>
      <Navs />
      <Container fluid>
        <h3 style={style.header} className="text-center pt-5 pb-4 ">
          Premium
        </h3>
        <div className="my-3 text-center">
          <p style={style.textWhite}>
            Bayar sekarang dan nikmati streaming music yang kekinian dari{" "}
            <label className="fw-bold">
              <label style={style.textDumb}>DUMB</label>SOUND
            </label>
          </p>
          <p style={style.textWhite}>
            <label className="fw-bold">
              <label style={style.textDumb}>DUMB</label>SOUND
            </label>{" "}
            : 0981312323
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <Button style={style.bgButton} className="my-4 fw-bold" type="submit">
            Pay
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Pay

// <Form>
//   <Form.Group className="mb-3 " controlId="formBasicEmail">
//     <Form.Control
//       // onChange={handleOnChange}
//       // value={dataLogin.email}
//       // name="email"
//       style={style.form}
//       type="number"
//       placeholder="Input your account number"
//     />
//   </Form.Group>
//   //
//   <Form.Group className="mb-3 ">
//     <InputGroup.Text style={style.color}>
//       Attache proof of transfer
//     </InputGroup.Text>
//     <Form.Control
//       // onChange={handleOnChange}
//       // value={dataLogin.email}
//       // name="email"
//       aria-label="Amount"
//       style={style.form}
//       // type="file"
//     />
//     <InputGroup.Text>
//       <img alt="" src={file} style={style.imgfile} />
//     </InputGroup.Text>
//   </Form.Group>
// </Form>
