import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addChatAPI } from '../service/allApi';
function AddChats({ setAddChatStatus }) {
    const [show, setShow] = useState(false);
    const [token, setToken] = useState("")
    console.log(token);
    const [chatDescription, setChatDescription] = useState({
        chat: ""
    })
    const [username, setUsername] = useState("")
    console.log(username);
    console.log(chatDescription);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        handleCancel()
        setShow(false);
    }

    const handleCancel = () => {
        setChatDescription({
            chat: ""
        })
    }

    const handleAdd = async () => {
        const { chat } = chatDescription
        console.log(chat);
        console.log(username);

        if (!username || !chat) {
            alert(`Fill the form completely`)
        } else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("chat", chat)
            console.log(reqBody);
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addChatAPI(reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    alert(`Chats added successfully`)
                    setTimeout(() => {
                        handleClose()
                    }, 1000);
                    setAddChatStatus(result)

                } else if (result.status == 406) {
                    alert(result.response.data)
                } else {
                    alert(`Something went wrong`)
                }
            }
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
                        <input type="text" value={username} readOnly className='bg-light text-primary form-control py-1 my-2 text-center rounded w-50' style={{ fontWeight: "bold" }} />
                    </div>

                    <textarea value={chatDescription.chat} onChange={(e) => setChatDescription({ ...chatDescription, chat: e.target.value })} name="" id="" className='bg-primary form-control py-1 my-2 text-center rounded' placeholder='****' style={{ fontWeight: "bold" }}>

                    </textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAdd} >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddChats