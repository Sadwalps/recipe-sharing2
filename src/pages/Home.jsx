import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RecipeCard from '../components/RecipeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function Home() {
    const [islogin, setIslogin] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setIslogin(true)
        } else {
            setIslogin(false)
        }
    }, [])
    
    return (
        <>
            {/* Home page before login */}
            {!islogin ? <div id='home' className='d-flex justify-content-center align-items-center'>
                <div className='container-fluid'>
                    <div className="row ">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center ">
                            <div className=' bg-light text-dark d-flex justify-content-center align-items-center px-5 py-5' style={{ borderRadius: "50%", fontWeight: "bold", fontSize: "20px" }}>
                                RECI
                            </div>
                            <h1 className='mainhead'>Enjoy Cooking</h1>
                            <h3 className='text-light ps-lg-1 ps-2' style={{ fontWeight: "bold" }}>A recipe is a story that ends with a good meal </h3>
                            <Link to={'/selectUserPage'}><button className='btn btn-info px-lg-5 px-4 py-lg-2 py-2  mt-3 fs-lg-4 fs-5' style={{ borderRadius: "25px", fontWeight: "bold" }}>Start Browsing</button></Link>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div> :


                <div>
                    <Header />

                    <div id='home2' >
                        <div className='container-fluid'>
                            <div className="row pt-lg-5 pt-4 ">
                                <div className="col-md-2"></div>
                                <div className="col-md-8 d-flex flex-column justify-content-center align-items-center pt-lg-4 pt-3">
                                    <div className=' bg-light text-dark d-flex justify-content-center align-items-center px-5 py-5' style={{ borderRadius: "50%", fontWeight: "bold", fontSize: "20px" }}>
                                        RECI
                                    </div>
                                    <h1 className='mainhead'>Submit recipes</h1>
                                    <h3 className='text-light ps-lg-1 ps-2' style={{ fontWeight: "bold" }}>Easily share your own recipe on our website </h3>
                                    <button className='btn btn-info px-lg-5 px-4 py-lg-2 py-2  mt-3 fs-lg-4 fs-5' style={{ borderRadius: "25px", fontWeight: "bold" }}>SUBMIT A RECIPE</button>
                                    <Link to={'/myrecipes'}><button className='btn btn-primary px-lg-5 px-4 py-lg-2 py-2  mt-3 fs-lg-4 fs-5' style={{ borderRadius: "25px", fontWeight: "bold" }}>Submitted Recipes</button></Link>
                                    <Link to={'/allrecipes'}><button className='btn btn-secondary px-lg-5 px-4 py-lg-2 py-2  mt-3 fs-lg-4 fs-5' style={{ borderRadius: "25px", fontWeight: "bold" }}>All Recipes</button></Link>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/free-photo/italian-pasta-farfallini-fellini-garlic-tomato-mortar-pepper-onion-wooden-background-top-vie-copy-space_141793-3437.jpg" className='w-100 py-1 rounded' alt="" />
                            </div>
                            <div className="col-md-6 py-2">
                                <div className="row d-flex flex-column">
                                    <div className="col-12"><img src="https://wallpaperaccess.com/full/986759.jpg " alt="" className='w-100 rounded' /></div>
                                    <div className="col-12 mt-2"><img src=" https://img.freepik.com/premium-photo/creamy-cake_928869-23140.jpg" alt="" className='w-100 rounded' /> </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-md-6">
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img src="https://wallpapercave.com/wp/wp9319042.jpg" alt="" className='w-100' />
                                    <h1 style={{ fontWeight: "bold" }}>item?.recipename</h1>
                                    <h5 className='mt-lg-2 mt-1'><FontAwesomeIcon icon={faClock} /> item?.time</h5>
                                    <p className='mt-lg-2 mt-1'><span style={{ fontWeight: "bold" }}>Incredients:</span> item?.incredients</p>
                                    <h5 className='mb-2'>item?.category</h5>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img src="https://wallpapercave.com/wp/wp9319042.jpg" alt="" className='w-100' />
                                    <h1 style={{ fontWeight: "bold" }}>item?.recipename</h1>
                                    <h5 className='mt-lg-2 mt-1'><FontAwesomeIcon icon={faClock} /> item?.time</h5>
                                    <p className='mt-lg-2 mt-1'><span style={{ fontWeight: "bold" }}>Incredients:</span> item?.incredients</p>
                                    <h5 className='mb-2'>item?.category</h5>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='container-fluid mt-4 mb-3 '>

                        <div className="row p-1">
                            <div className="col-2 p-1"><img className='w-100 rounded' src="https://www.eatwell101.com/wp-content/uploads/2019/07/pasta-salad-recipe-for-lunch.jpg" alt="" /></div>
                            <div className="col-2 p-1"><img className='w-100 rounded' src="https://www.eatwell101.com/wp-content/uploads/2016/08/one-pot-sausage-casserole-1.jpg" alt="" /></div>
                            <div className="col-2 p-1"><img className='w-100 rounded' src="https://cdn.loveandlemons.com/wp-content/uploads/2021/01/vegan-breakfast-recipes.jpg" alt="" /></div>
                            <div className="col-2 p-1"><img className='w-100 rounded' src="https://i.pinimg.com/originals/d9/53/1c/d9531c6d5179b75451a4ed92c678130b.jpg" alt="" /></div>
                            <div className="col-2 p-1"><img className='w-100 rounded' src="https://media.istockphoto.com/photos/strawberry-shortcake-on-a-plate-picture-id155036402?k=20&m=155036402&s=612x612&w=0&h=gnWHKysogtu9mFJ68XY9nrACTR0a-0AF2bRSgoEf2-U=" alt="" /></div>
                            <div className="col-2 p-1"><img className='w-100 rounded' src="https://tse2.mm.bing.net/th/id/OIP.Sf4-JtlgX-gm3BsnN6D_oAHaLG?cb=ucfimg2&ucfimg=1&w=1025&h=1536&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /></div>
                        </div>

                    </div>
                </div>}




            <Footer />
        </>
    )
}

export default Home