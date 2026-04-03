import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { loginResponseContext } from '../context/ContextShare';
function Header() {
  const { setLoginResponse } = useContext(loginResponseContext)
  const [token, setToken] = useState("")
  const [userStatus, setUserStauts] = useState("")
  console.log(userStatus);
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  })

  useEffect(() => {
    if (sessionStorage.getItem("userstatus")) {
      setUserStauts(sessionStorage.getItem("userstatus"))
    }
  })


  const handleLogout = () => {
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userstatus")
    setLoginResponse(false)
    alert(`Logging out`)
    navigate('/')
  }


  return (
    <>
      <div>
        <Navbar className="bg-dark" >
          <Container className="d-flex justify-content-between">
            {userStatus ? <Link to={'/'} >
              <img
                src="https://cdn-icons-png.freepik.com/512/10840/10840480.png"
                width="45"
                height="45"
                className="d-inline-block align-top m-1"
                alt="Websitelogo"
              />
            </Link> :
              <Link to={'/admin'} >
                <img
                  src="https://cdn-icons-png.freepik.com/512/10840/10840480.png"
                  width="45"
                  height="45"
                  className="d-inline-block align-top m-1"
                  alt="Websitelogo"
                />
              </Link>}
            <div className='d-flex gap-3'>
              {userStatus && <Link to={'/chats'} > <button className='btn fs-5' id='chatbtn'  ><FontAwesomeIcon icon={faMessage} /></button></Link>}
              <div onClick={handleLogout} id='logoutdiv'>
                <FontAwesomeIcon icon={faPowerOff} />
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header