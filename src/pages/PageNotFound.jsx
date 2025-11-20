import React from 'react'

function PageNotFound() {
    return (
        <>
            <div className='container-fluid' id='pagenotfound'>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex justify-content-center flex-column align-items-center">
                        <img src="https://img.freepik.com/premium-photo/wicker-basket-white-background_1240525-64216.jpg" alt="" style={{ height: "500px" }} className='w-75' />
                        <span className='pnfheading text-danger'>404</span>
                        <h1 style={{ fontWeight: "bold" }} className='mb-4 text-danger'>Page Not Found !!!</h1>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound