import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UpdateUserChatAPI } from '../service/allApi';

function EditChat({ chats, setEditChatStatus }) {
    const [show, setShow] = useState(false);

    const [chatDetails, setChatDetails] = useState({
        chat: chats?.chat
    })
    console.log(chatDetails);

    const [username, setUsername] = useState("")
    console.log(username);

    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
    }

    const handleCancel = () => {
        setChatDetails({
            chat: chats?.chat
        })
    }

    const handleUpdate = async () => {
        const { chat } = chatDetails
        console.log(chat);
        console.log(username);
        if (!username || !chat) {
            alert(`Fill the form completely`)
        } else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("chat", chat)
            console.log(reqBody);

            //reqHeader
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await UpdateUserChatAPI(chats._id, reqBody, reqHeader)
                console.log(result);

                if (result.status == 200) {
                    alert(`Chat successfully edited`)
                    setEditChatStatus(result)
                    setTimeout(() => {
                        handleClose()
                    }, [2000]);
                } else if (result.status == 406) {
                    alert(result.response.data)
                } else {
                    alert(`Something went wrong`)
                }
            }
        }
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
                    <Modal.Title className='text-primary' style={{ fontWeight: "bold" }}>Edit chats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex  gap-2 justify-content-center align-items-center'>
                        <h5 className='text-primary ' style={{ fontWeight: "bold" }}>Username:</h5>
                        <input value={username} readOnly type="text" className='bg-light text-primary form-control py-1 my-2 text-center rounded w-50' style={{ fontWeight: "bold" }} />
                    </div>

                    <textarea value={chatDetails.chat} onChange={(e) => setChatDetails({ ...chatDetails, chat: e.target.value })} name="" id="" className='bg-primary form-control py-1 my-2 text-center rounded' placeholder='****' style={{ fontWeight: "bold" }}>

                    </textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleCancel} variant="danger" >
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} variant="primary" >
                        save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditChat