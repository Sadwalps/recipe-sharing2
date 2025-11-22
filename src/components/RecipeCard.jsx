import { faClock, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Edit from './Edit'

function RecipeCard() {
    return (
        <>
            <div className='mt-3 mb-3' >
                <div className='container-fluid '>
                    <div className="row">

                        <div className="col-lg-6  col-12 p-lg-1 p-2">
                            <img src="https://th.bing.com/th/id/OIP.r6T2zRnyrrP8LdtOEaGVowHaGl?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className='w-100' style={{ height: "340px" }} />
                        </div>
                        <div className="col-lg-6 ps-lg-5 ps-1 d-flex flex-column justify-content-center ">
                            <h1 style={{ fontWeight: "bold" }}>item?.recipename</h1>
                            <h5 className='mt-lg-2 mt-1'><FontAwesomeIcon icon={faClock} /> item?.time</h5>
                            <p className='mt-lg-2 mt-1'><span style={{ fontWeight: "bold" }}>Incredients:</span> item?.incredients</p>
                            <h5 className='mb-2'>item?.category</h5>

                            <div className='d-flex justify-content-between'>
                                 <Edit />
                                <div className='coveringdiv'> <div className='bg-danger  d-flex justify-content-center align-items-center rounded' id='deletebutton'><FontAwesomeIcon icon={faTrash} style={{ color: "black" }} /></div>  </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RecipeCard