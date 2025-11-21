import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
<>
 <div>
     <Navbar className="bg-dark" >
        <Container className="d-flex justify-content-between">
          <Link to={'/'} >
            <img
              src="https://cdn-icons-png.freepik.com/512/10840/10840480.png"
              width="45"
              height="45"
              className="d-inline-block align-top m-1"
              alt="Websitelogo"
            />
          </Link>
           &&<div  id='logoutdiv'>
          <FontAwesomeIcon icon={faPowerOff} />
          </div>
        </Container>
      </Navbar>
     </div>
</>
  )
}

export default Header