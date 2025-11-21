import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AdminDashboard() {
  return (
    <>
      <div >
        <div className='container-fluid'>
          <div className="row">
            <div className="col-2 bg-dark d-lg-block d-md-block d-none" style={{ minHeight: "100vh" }}>
              <div className='d-flex justify-content-center align-items-center gap-3' style={{ minHeight: "10vh" }}>
                <img className='' src="https://cdn-icons-png.freepik.com/512/10840/10840480.png" alt="app img" style={{ height: "45", width: "45px" }} />
                <h4 className='text-light ' style={{ fontWeight: "bold" }}>Reci</h4>
              </div>
            </div>

            <div className="col-lg-10 col-md-10 col-12 p-0 ">
              <div className='  bg-dark' style={{ minHeight: "10vh" }}>
                <div className=' text-light me-3 mt-2' style={{ float: "right" }}>
                  <h5>sklaks</h5>
                  <h6>djflds</h6>
                </div>

              </div>

              {/* table section */}
              <h2 className='text-center mt-2' style={{fontWeight:"bold"}}>Users</h2>
              <div className='container-fluid'>
                <div className="row border border-2 border-dark m-1">
                  <div className="col-1 text-center" style={{fontWeight:"bold"}}>slno</div>
                  <div className="col-5 text-center" style={{fontWeight:"bold"}}>UserName</div>
                  <div className="col-5 text-center" style={{fontWeight:"bold"}}>Email</div>
                  <div className="col-1 text-center" style={{fontWeight:"bold"}}></div>
                </div>
                {/* for big screen */}
                <div className="row border border-2 border-dark m-1">
                  <div className="col-1 d-flex justify-content-center align-items-center" >slno</div>
                  <div className="col-5  d-flex justify-content-center align-items-center" >skldkalskdlkasd</div>
                  <div className="col-5  d-flex justify-content-center align-items-center" > 
                    ssssssssssssssssssssssssssssssdjkasdjajskdjkajskdjkajs </div>
                  <div className="col-1 d-flex justify-content-center align-items-center" >
                    <button className='btn btn-danger m-1 p-lg-2 p-md-2  p-1 rounded'>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>

                {/* for small screen */}


              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AdminDashboard