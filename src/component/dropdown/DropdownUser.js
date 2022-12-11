import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, OverlayTrigger, Popover } from "react-bootstrap"
import Profile from "../../asset/image/Profile1.png"
import Pay from "../../asset/image/icon/bill.png"
import Logout from "../../asset/image/icon/logout.png"
import { useNavigate } from "react-router-dom"

const style = {
  bgDropdown: {
    backgroundColor: "#3A3A3A",
  },

  link: {
    fontWeight: "600",
    fontSize: "17px",
    color: "white",
    alignItems: "center",
  },

  line: {
    backgroundColor: "#A8A8A8",
  },

  imgPay: {
    width: "30px",
    marginRight: "15px",
  },

  imgLogout: {
    width: "30px",
    marginRight: "15px",
  },

  trigger: {
    width: "70px",
    heigth: "70px",
  },

  imgProfile: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid #FFFFFF",
  },
}

function DropdownUser({ logout }) {
  let navigate = useNavigate()
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom-end"
      overlay={
        <Popover id="popover-basic" style={style.bgDropdown}>
          <Popover.Body>
            <Nav.Link href="/pay" style={style.link}>
              <img alt="" src={Pay} style={style.imgPay} />
              Pay
            </Nav.Link>
          </Popover.Body>
          <hr style={style.line} />
          <Popover.Body onClick={logout}>
            <Nav.Link style={style.link}>
              <img alt="" src={Logout} style={style.imgLogout} />
              Logout
            </Nav.Link>
          </Popover.Body>
        </Popover>
      }
      style={style.trigger}
    >
      <img
        alt=""
        src={Profile}
        className="d-inline-block align-top btn p-0 m-auto"
        style={style.imgProfile}
      />
    </OverlayTrigger>
  )
}

export default DropdownUser
