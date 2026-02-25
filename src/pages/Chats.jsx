import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Chats() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("")
  const [userName, setUsername] = useState("")
  console.log(userName);
  console.log(token);
  const handleClose = () => {
    handleCancel()
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const [chatDescription, setChatDescription] = useState("")
  console.log(chatDescription);

  const handleCancel = () => {
    setChatDescription("")
  }

const handleAdd = async()=>{
  console.log(chatDescription);
  console.log(userName);
  
  
  
  if(!chatDescription || !userName){
    alert(`Fill the form completely`)
  }else{
    
  }
}

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    const userData = sessionStorage.getItem("existingUser")
    if (userData) {
      const usersname = JSON.parse(userData)
      setUsername(usersname.username)
    }
  }, [])

  return (
    <>
      <Header />
      <div style={{ minHeight: "67vh" }}>
        {token ? <div>
          <div className='container-fluid text-center'>
            <button onClick={handleShow} className='btn text-light btn-lg rounded-circle fs-3 mt-3 chatdivandbtn'>
              <FontAwesomeIcon icon={faPlus} style={{ fontWeight: "bold" }} />
            </button>

            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeButton>
                <Modal.Title className='text-primary' style={{ fontWeight: "bold" }}>Add chats</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='d-flex  gap-2 justify-content-center align-items-center'>
                  <h5 className='text-primary ' style={{ fontWeight: "bold" }}>Username:</h5>
                  <input type="text" value={userName} readOnly className='bg-light text-primary form-control py-1 my-2 text-center rounded w-50' style={{ fontWeight: "bold" }} />
                </div>

                <textarea value={chatDescription} onChange={(e) => setChatDescription(e.target.value)} name="" id="" className='bg-primary form-control py-1 my-2 text-center rounded' placeholder='****' style={{ fontWeight: "bold" }}>

                </textarea>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="row mt-3">
              <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className='w-100 mt-2 rounded   text-center text-light p-1 chatdivandbtn' >
                  <h4 className='pt-3' style={{ fontWeight: "bold" }}>jfhsdjkhkdjkhdsfkhgjkdhf</h4>
                  <div className='d-flex justify-content-between'>
                    <button className='btn btn-light rounded text-primary'>
                      <FontAwesomeIcon icon={faPenToSquare} className=' fs-4' />
                    </button>
                    <button className='btn btn-light text-danger rounded'>
                      <FontAwesomeIcon icon={faTrash} className='fs-4' />
                    </button>

                  </div>
                </div>

              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
            </div>
          </div>

          <div className='container-fluid ' style={{ height: "65vh" }}>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6  text-info mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2023/10/26/Empty-meal-tray-Cartoon-kicthen-contain-Graphics-82559752-1.png" alt="" style={{ height: "200px" }} />
                <h1 className='text-center ' style={{ fontWeight: "bold" }}> chatbox is empty!!!</h1>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div> :



          <div className='container-fluid ' style={{ height: "65vh" }}>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6  text-info mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/9693/9693192.png" alt="" style={{ height: "200px" }} />
                <h1 className='text-center ' style={{ fontWeight: "bold" }}> Please Login!!!</h1>
              </div>
              <div className="col-3"></div>
            </div>
          </div>}

      </div>
      <Footer />
    </>
  )
}

export default Chats