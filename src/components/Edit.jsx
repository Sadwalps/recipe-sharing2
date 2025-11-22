import React from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Edit() {
     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);
     const handleClose = () =>{
    
    setShow(false);
  } 
  return (
   <>
   <div className='coveringdiv'><div onClick={handleShow} className='bg-primary d-flex justify-content-center align-items-center rounded' id='editbutton' ><FontAwesomeIcon icon={faPenToSquare} style={{ color: "black" }} /></div></div>
      <Modal show={show} onHide={handleClose} size='lg' centered >
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title className='bg-dark text-light' style={{ fontWeight: "bold" }}  >Share Your Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'><div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center ">
              <label htmlFor="recipeImage">
                <input  id='recipeImage' type="file" style={{ display: "none" }} />
                <img src='https://tse1.mm.bing.net/th/id/OIP.15U5ZSzIxHu4UmQlwRLeuwHaE8?w=750&h=500&rs=1&pid=ImgDetMain&o=7&rm=3' alt="" style={{ width: "100%" }} type="file" />
              </label>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

          <div className='d-flex flex-column justify-content-center align-items-center'>
            <input type="text" className='w-75 form-control mt-lg-4 mt-3 text-center' style={{ borderRadius: "15px", fontWeight: "bold" }} placeholder='Name of the Recipe' />
            <input  type="text" className='w-75 form-control mt-lg-4 mt-3 text-center' style={{ borderRadius: "15px", fontWeight: "bold" }} placeholder='Time' />
            <textarea  name="" className='w-75 form-control mt-lg-4 mt-3 text-center' style={{ borderRadius: "15px", fontWeight: "bold" }} placeholder='Incredients'></textarea>
            <select  className='w-75 form-control mt-lg-4 mt-3 text-center' style={{ borderRadius: "15px", fontWeight: "bold" }} >
              <option value="" hidden>Select Category</option>
              <option value="Vegitarian" style={{ fontWeight: "bold" }}>Vegitarian</option>
              <option value="NonVegitarian" style={{ fontWeight: "bold" }}>Non Vegitarian</option>
              <option value="Drinks" style={{ fontWeight: "bold" }}>Drinks</option>
              <option value="Deserts" style={{ fontWeight: "bold" }}>Deserts</option>
              <option value="Snacks" style={{ fontWeight: "bold" }}>Snacks</option>
            </select>
          </div>

        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" >
            Cancel
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Edit