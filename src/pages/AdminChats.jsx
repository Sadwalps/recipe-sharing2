import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import EditChat from '../components/EditChat'

function AdminChats() {
    return (
        <>

            <div className='d-flex justify-content-between align-items-center px-3 bg-dark' style={{ minHeight: "10vh" }}>

                <div className='d-flex justify-content-center align-items-center gap-3 w-25' style={{ minHeight: "10vh" }}>
                    <Link to={'/admin'}>    <img className='' src="https://cdn-icons-png.freepik.com/512/10840/10840480.png" alt="app img" style={{ height: "45", width: "45px" }} /></Link>
                </div>
            </div>


            <div className='adminchatpage container-fluid'>
                <div className="row pt-lg-4 pt-3 ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center pt-lg-4 pt-3">
                        <div className=' bg-light text-dark d-flex justify-content-center align-items-center px-5 py-5' style={{ borderRadius: "50%", fontWeight: "bold", fontSize: "20px" }}>
                            RECI
                        </div>
                        <div className='mt-4'>
                            <h1 className='mainhead'>All Chats</h1>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>

            {/* chats section */}
            <div className='container-fluid'>
                <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                        <div className='w-100 mt-2 rounded   text-center text-light p-1 chatdivandbtn' >
                            <h4 className='pt-3' style={{ fontWeight: "bold" }}>ghfdhgfgh</h4>
                            <div className='d-flex justify-content-between'>
                                <EditChat />
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


            <div className='container-fluid ' style={{ height: "65vh" }}>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6  text-info mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/9693/9693192.png" alt="" style={{ height: "200px" }} />
                        <h1 className='text-center ' style={{ fontWeight: "bold" }}> Please Login!!!</h1>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

        </>
    )
}

export default AdminChats