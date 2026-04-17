import { faClock, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { SingleUsersRecipeContext } from '../context/ContextShare'

function AdminRecipes2() {
    const { singleUsersRecipe } = useContext(SingleUsersRecipeContext)
    console.log(singleUsersRecipe);
    const [recipedetails, setRecipedetails] = useState([])
    console.log(recipedetails);


    const [uid, setUid] = useState("")
    console.log(uid);

    useEffect(() => {
        if (sessionStorage.getItem("uid")) {
            setUid(sessionStorage.getItem("uid"))
        }
    })

    useEffect(() => {

    }, [singleUsersRecipe])



    return (
        <>
            <div className='d-flex justify-content-between align-items-center px-3 bg-dark' style={{ minHeight: "10vh" }}>

                <div className='d-flex justify-content-center align-items-center gap-3 w-25' style={{ minHeight: "10vh" }}>
                    <Link to={'/admin'}>    <img className='' src="https://cdn-icons-png.freepik.com/512/10840/10840480.png" alt="app img" style={{ height: "45", width: "45px" }} /></Link>
                </div>
            </div>


            {/* <div className='adminrecipepage container-fluid'>
                <div className="row pt-lg-4 pt-3 ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center pt-lg-4 pt-3">
                        <div className=' bg-light text-dark d-flex justify-content-center align-items-center px-5 py-5' style={{ borderRadius: "50%", fontWeight: "bold", fontSize: "20px" }}>
                            RECI
                        </div>
                        <div className='mt-4'>
                            <h1 className='mainhead'>All Recipes</h1>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div> */}


            {/* recipes card section */}
            {singleUsersRecipe ? <div className='container-fluid mt-lg-5 mt-3'>
                <div className="row">
                    {singleUsersRecipe?.map((item) => (<div className="col-md-6 mt-4">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <Card className='border-0' style={{ width: '100%' }}>
                                    <Card.Img variant="top" src='https://tse1.mm.bing.net/th/id/OIP.-OeEPP-2XySfb7SXHYAR9gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' />
                                    <Card.Body>
                                        <h1 className='' style={{ fontWeight: "bold" }}>{item?.recipename}</h1>
                                        <h5 className='mt-lg-2 mt-1 '>
                                            <FontAwesomeIcon icon={faClock} className='me-2' />item?.time
                                        </h5>
                                        <p className='mt-lg-2 mt-1'><span style={{ fontWeight: "bold" }}>Incredients:</span>item?.incredients
                                        </p>
                                        <h5 className='mb-2'>item?.category

                                        </h5>
                                        <Button variant="danger clas
                                        rounded " style={{ fontWeight: "bold" }}><FontAwesomeIcon icon={faTrash} style={{ color: "white", marginRight: "7px" }} />Remove</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>))}
                </div>
            </div> :

                <div style={{ minHeight: "69vh" }}>
                    <div className='container-fluid ' style={{ height: "65vh" }}>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6  text-info mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
                                <img src="https://www.creativefabrica.com/wp-content/uploads/2023/10/26/Empty-meal-tray-Cartoon-kicthen-contain-Graphics-82559752-1.png" alt="" style={{ height: "200px" }} />
                                <h1 className='text-center ' style={{ fontWeight: "bold" }}>User not Added any recipes yet!!!</h1>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>}
            <Footer />
        </>
    )
}

export default AdminRecipes2