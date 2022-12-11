import React, { useContext, useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Nav } from "react-bootstrap"
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Pay from "./pages/user/Pay"
import Income from "./pages/admin/Income"
import AddMusic from "./pages/admin/AddMusic"
import AddArtist from "./pages/admin/AddArtist"
import Navs from "./component/navbar/Navbar"
import { UserContext } from "./context/UserContext"
import { API, setAuthToken } from "./confiq/api"

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  let navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    if (state.isLogin === false && !isLoading) {
      navigate("/")
    }
  }, [state])

  const checkUser = async () => {
    try {
      // Send data to useContext
      const response = await API.get("/check-auth")

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        })
      }

      console.log("response check auth", response)

      let payload = response.data.data
      payload.token = localStorage.token

      dispatch({
        type: "USER_SUCCESS",
        payload,
      })
      console.log("ini data state", state)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <>
      {isLoading ? null : (
        <>
          {/* <Navs /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/admin" element={<Income />} />
            <Route path="/addMusic" element={<AddMusic />} />
            <Route path="/addArtist" element={<AddArtist />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
