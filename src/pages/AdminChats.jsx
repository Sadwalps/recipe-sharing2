import React from 'react'
import { Link } from 'react-router-dom'

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
            <div>

            </div>

        </>
    )
}

export default AdminChats