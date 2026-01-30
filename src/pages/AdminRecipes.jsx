import React from 'react'

import Footer from '../components/Footer'


function AdminRecipes() {
    return (
        <>
            
                
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
                    </div>
                </div>
                <div style={{ minHeight: "68vh" }}>
                    <div className='container-fluid ' style={{ height: "65vh" }}>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6  text-info mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
                                <img src="https://www.creativefabrica.com/wp-content/uploads/2023/10/26/Empty-meal-tray-Cartoon-kicthen-contain-Graphics-82559752-1.png" alt="" style={{ height: "200px" }} />
                                <h1 className='text-center ' style={{ fontWeight: "bold" }}>No Recipe Added yet!!!</h1>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            
        </>
    )
}

export default AdminRecipes