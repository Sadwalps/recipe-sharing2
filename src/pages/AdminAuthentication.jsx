import React from 'react'
import { Link } from 'react-router-dom'

function AdminAuthentication({adminSignup}) {
    return (
        <>
            <div id='loginsignup' className='d-flex justify-content-center align-items-center'>
                <div className='container-fluid'  >

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className='p-lg-5 p-3  rounded ' style={{ backgroundColor: "rgba(49, 47, 47, 0.61)" }}>
                                <h1 className='text-light' style={{ fontWeight: "bold" }}>Amin </h1>
                              {!adminSignup  ?<h1 className='text-light' style={{ fontWeight: "bold" }}>Login in Here</h1>:
                                <h1 className='text-light' style={{ fontWeight: "bold" }}>Sign up Here</h1>}

                               {adminSignup&& <input type="text" placeholder='Username' className='form-control p-2 mt-lg-3 mt-2' style={{ borderRadius: "20px" }} />}
                                <input type="email" placeholder='Email id' className='form-control p-2 mt-lg-3 mt-2' style={{ borderRadius: "20px" }} />
                                <input type="password" placeholder='Password' className='form-control p-2  mt-lg-3 mt-2' style={{ borderRadius: "20px" }} />

                              {!adminSignup  ?<button type='button' className='btn btn-success p-2 w-100  mt-lg-3 mt-2' style={{ borderRadius: "20px" }} >LOGIN</button>:

                                <button type='button' className='btn btn-primary p-2 w-100  mt-lg-3 mt-2' style={{ borderRadius: "20px" }} >SIGN UP</button>}

                                {adminSignup?<p className='mt-3 text-white'>Already a user? click here to <Link to={'/adminLogin'}>login</Link> </p>:
                                <p className='mt-3 text-white'>Not a user? click here to <Link to={'/adminSignup'}>signup</Link> </p>}
                            </div>
                        </div>

                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAuthentication