import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function SelectUserPage() {
    return (
        <>
            <div className='selectuserpagemaindiv d-flex  flex-column justify-content-center align-items-center' >
                <Link to={'/adminSignup'} className=' text-dark  ' style={{ textDecoration: "none" }}> <div className='selectuserpagelinks rounded fs-1 py-lg-4 py-md-3 py-2  px-lg-5  px-4 ' style={{ fontWeight: "bold" }}>Admin</div></Link>
                <Link to={'/signup'} className=' text-dark  ' style={{ textDecoration: "none" }}> <div className=' selectuserpagelinks rounded  fs-1 py-lg-4 py-md-3 py-2  px-lg-5  px-4 mt-4 ' style={{ fontWeight: "bold" }}>User</div></Link>
                <Link to={'/'}><button className=' btn btn-light mt-4 fs-2 p-2 rounded-circle  '  >
                    <FontAwesomeIcon icon={faHouse} />
                </button></Link>
            </div>
        </>
    )
}

export default SelectUserPage