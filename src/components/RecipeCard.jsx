import { faClock, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Edit from './Edit'
import { serverURL } from '../service/serverUrl'
import { deleteUserRecipeAPI } from '../service/allApi'

function RecipeCard({ recipes, setDeleteRecipeStatus ,setEditStatus}) {

    const handleDelete = async (id) => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await deleteUserRecipeAPI(id, reqHeader)
            console.log(result);
            if (result.status == 200) {
                alert(result.data)
                setDeleteRecipeStatus(result)
            }
        }
    }



    return (
        <>
            <div className='mt-3 mb-3' >
                <div className='container-fluid '>
                    <div className="row">

                        <div className="col-lg-6  col-12 p-lg-1 p-2">
                            <img src={`${serverURL}/upload/${recipes?.recipeImage}`} alt="" className='w-100' style={{ height: "340px" }} />
                        </div>
                        <div className="col-lg-6 ps-lg-5 ps-1 d-flex flex-column justify-content-center ">
                            <h1 style={{ fontWeight: "bold" }}>{recipes?.recipename}</h1>
                            <h5 className='mt-lg-2 mt-1'><FontAwesomeIcon icon={faClock} /> {recipes?.time}</h5>
                            <p className='mt-lg-2 mt-1'><span style={{ fontWeight: "bold" }}>Incredients:</span> {recipes?.incredients}</p>
                            <h5 className='mb-2'>{recipes?.category}</h5>

                            <div className='d-flex justify-content-between'>
                                <Edit recipes={recipes} setEditStatus={setEditStatus} />
                                <div className='coveringdiv'> <div onClick={() => handleDelete(recipes?._id)} className='bg-danger  d-flex justify-content-center align-items-center rounded' id='deletebutton'><FontAwesomeIcon icon={faTrash} style={{ color: "black" }} /></div>  </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RecipeCard