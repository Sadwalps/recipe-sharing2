import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditChat({chats}) {
    const [show, setShow] = useState(false);
    const [chatDetails, setChatDetails] = useState({
        chat : chats?.chat
    })
    console.log(chatDetails);
    
     const [username, setUsername] = useState("")
        console.log(username);
    const handleShow = () => setShow(true);

    const handleClose = () => {

        setShow(false);
    }

    useEffect(() => {
            const userData = sessionStorage.getItem("existingUser")
            if (userData) {
                const usersname = JSON.parse(userData)
                setUsername(usersname.username)
            }
        }, [])


    return (
        <>
            <button onClick={handleShow} className='btn btn-light rounded text-primary'>
                <FontAwesomeIcon icon={faPenToSquare} className=' fs-4' />
            </button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary' style={{ fontWeight: "bold" }}>Add chats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex  gap-2 justify-content-center align-items-center'>
                        <h5 className='text-primary ' style={{ fontWeight: "bold" }}>Username:</h5>
                        <input value={username} readOnly type="text" className='bg-light text-primary form-control py-1 my-2 text-center rounded w-50' style={{ fontWeight: "bold" }} />
                    </div>

                    <textarea name="" id="" className='bg-primary form-control py-1 my-2 text-center rounded' placeholder='****' style={{ fontWeight: "bold" }}>

                    </textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" >
                        Cancel
                    </Button>
                    <Button variant="primary" >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditChat