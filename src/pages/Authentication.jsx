import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../service/allApi';

function Authentication({ signup }) {
    const navigate = useNavigate()
    const [authdetails, setAuthdetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    console.log(authdetails);

     const handleCancel = () => {
        setAuthdetails({
            username: "",
            email: "",
            password: ""
        })
    }

    const handleRegister = async () => {
        const { username, email, password } = authdetails
        console.log(username, email, password);
        if (!username || !email || !password) {
            alert(`Fill the form completely`)
        } else {
            const result = await registerAPI(authdetails)
            console.log(result);
            if (result.status == 200) {
                alert(`Register successfull`)
                navigate('/login')
            } else if (result.status == 406) {
                alert(result.response.data)
            } else {
                alert(`Something went wrong`)
            }
        }
    }

    const handleLogin = async () => {
        const { email, password } = authdetails
        console.log(email, password);

        if (!email || !password) {
            alert(`Please fill the form completely`)
        } else {
            const result = await loginAPI({ email, password })
            console.log(result);
            if (result.status == 200) {
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser
                ))
                sessionStorage.setItem("token", result.data.token)
                sessionStorage.setItem("userstatus", "user")
                alert(`Login successfull`)
                navigate('/')
            } else if (result.status == 406) {
                alert(result.response.data)
            } else {
                alert(`Something went wrong`)
            }
        }
    }

    return (
        <>
            <div id='loginsignup' className='d-flex justify-content-center align-items-center'>
                <div className='container-fluid'  >
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className='p-lg-5 p-3  rounded ' style={{ backgroundColor: "rgba(49, 47, 47, 0.61)" }}>
                                {!signup ? <h1 className='text-light' style={{ fontWeight: "bold" }}>Login in Here</h1> :
                                    <h1 className='text-light' style={{ fontWeight: "bold" }}>Sign up Here</h1>}

                                {signup && <input type="text" value={authdetails.username} onChange={(e) => setAuthdetails({ ...authdetails, username: e.target.value })} placeholder='Username' className='form-control p-2 mt-lg-3 mt-2' style={{ borderRadius: "20px" }} />}
                                <input type="email" value={authdetails.email} onChange={(e) => setAuthdetails({ ...authdetails, email: e.target.value })} placeholder='Email id' className='form-control p-2 mt-lg-3 mt-2' style={{ borderRadius: "20px" }} />
                                <input type="password" value={authdetails.password} onChange={(e) => setAuthdetails({ ...authdetails, password: e.target.value })} placeholder='Password' className='form-control p-2  mt-lg-3 mt-2' style={{ borderRadius: "20px" }} />

                                {!signup ? <button onClick={handleLogin} type='button' className='btn btn-success p-2 w-100  mt-lg-3 mt-2' style={{ borderRadius: "20px" }} >LOGIN</button> :

                                    <button type='button' onClick={handleRegister} className='btn btn-primary p-2 w-100  mt-lg-3 mt-2' style={{ borderRadius: "20px" }} >SIGN UP</button>}

                                {signup ? <div className='d-flex justify-content-between'><p className='mt-3 text-white'>Already a user? click here to <Link to={'/login'}>login</Link> </p>  <button onClick={handleCancel} className='btn btn-danger my-2 rounded 'style={{height:"40px"}}>Clear</button></div>  :
                                   <div className='d-flex justify-content-between'> <p className='mt-3 text-white'>Not a user? click here to <Link to={'/signup'}>signup</Link> </p>  <button onClick={handleCancel} className='btn btn-danger my-2 rounded 'style={{height:"40px"}}>Clear</button> </div>}
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authentication