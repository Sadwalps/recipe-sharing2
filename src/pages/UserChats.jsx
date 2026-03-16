import React, { useEffect, useState } from 'react'
import AddChats from './AddChats'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteUserChatAPI, getUserChatAPI } from '../service/allApi'
import EditChat from '../components/EditChat'

function UserChats() {
    const [token, setToken] = useState("")
    console.log(token);

    const [userChats, setUserChats] = useState([])
    console.log(userChats);

    const [addChatStatus, setAddChatStatus] = useState([])

    const [deleteChatStatus, setDeleteChatStatus] = useState({})

    const getUserChats = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getUserChatAPI(reqHeader)
            console.log(result);
            setUserChats(result.data)

        }
    }

    const handleDelete = async (id) => {
        if (token) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await deleteUserChatAPI(id, reqHeader)
            console.log(result);
            if (result.status == 200) {
                alert(result.data)
                setDeleteChatStatus(result)
            } else {
                alert(`Something went wrong`)
            }
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    useEffect(() => {
        getUserChats()
    }, [addChatStatus, deleteChatStatus])

    return (
        <>
            <Header />

            <div style={{ minHeight: "67vh" }}>
                {token ? <div>
                    <div className='container-fluid text-center'>
                        <AddChats setAddChatStatus={setAddChatStatus} />
                    </div>

                    {userChats ? <div className='container-fluid mb-4'>
                        {userChats?.map((item) => (<div className="row mt-3">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <div className='w-100 mt-2 rounded   text-center text-light p-1 chatdivandbtn' >
                                    <h4 className='pt-3' style={{ fontWeight: "bold" }}>{item?.chat}</h4>
                                    <div className='d-flex justify-content-between'>
                                        <EditChat chats={item}/>
                                        <button onClick={() => handleDelete(item?._id)} className='btn btn-light text-danger rounded'>
                                            <FontAwesomeIcon icon={faTrash} className='fs-4' />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
                        </div>))}
                    </div> :


                        <div className='container-fluid ' style={{ height: "65vh" }}>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6  text-info mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
                                    <img src="https://www.creativefabrica.com/wp-content/uploads/2023/10/26/Empty-meal-tray-Cartoon-kicthen-contain-Graphics-82559752-1.png" alt="" style={{ height: "200px" }} />
                                    <h1 className='text-center ' style={{ fontWeight: "bold" }}> chatbox is empty!!!</h1>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>}
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


        </>
    )
}

export default UserChats