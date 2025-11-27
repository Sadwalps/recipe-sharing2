import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            {/* Home page before login */}
            <div id='home' className='d-flex justify-content-center align-items-center'>
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
            </div>

            {/*Home page After login   */}
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

            </div>
            <Footer />
        </>
    )
}

export default Home