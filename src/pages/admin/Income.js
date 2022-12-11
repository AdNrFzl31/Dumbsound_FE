import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Table } from "react-bootstrap"
import Navs from "../../component/navbar/Navbar"
import DropdownApprove from "../../component/dropdown/DropdownApprove"

const style = {
  header: {
    color: "white",
  },

  headerTable: {
    color: "#EE4622",
  },

  active: {
    color: "#0ACF83",
  },

  pending: {
    color: "#F7941E",
  },

  notActive: {
    color: "#FF0000",
  },
}

function Income() {
  return (
    <>
      <Navs />
      <Container className="my-5">
        <h4 className="my-5" style={style.header}>
          Incoming Transaction
        </h4>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th style={style.headerTable}>No</th>
              <th style={style.headerTable}>Users</th>
              <th style={style.headerTable}>Remaining Active</th>
              <th style={style.headerTable}>Status User</th>
              <th style={style.headerTable}>Status Payment</th>
              <th style={style.headerTable}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Remaining Active</th>
              <th>
                <label style={style.active}>Active</label>
                <label style={style.notActive}>Not Active</label>
              </th>
              <th>
                <label style={style.pending}>Panding</label>
                <label style={style.active}>Success</label>
                <label style={style.notActive}>Cancel</label>
              </th>
              <th>
                <DropdownApprove />
              </th>
            </tr>
            <tr>
              <td style={style.headerTable} colSpan={6}>
                Income :{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Income
