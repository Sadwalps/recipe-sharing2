import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllUsersDetailsAPI } from '../service/allApi';
function AdminDashboard() {

  const [allUsersDetails, setAllUsersDetails] = useState([])
  const getallusersdetails = async () => {
    const result = await getAllUsersDetailsAPI()
    console.log(result);
    setAllUsersDetails(result.data)

  }
  console.log(allUsersDetails);


  useEffect(() => {
    getallusersdetails()
  }, [])
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

                <div className='d-flex justify-content-center align-items-center gap-3 w-25' style={{ minHeight: "10vh" }}>
                  <img className='' src="https://cdn-icons-png.freepik.com/512/10840/10840480.png" alt="app img" style={{ height: "45", width: "45px" }} />
                </div>

              </div>

              {/* table section */}
              <h2 className='text-center mt-4' style={{ fontWeight: "bold" }}>Users</h2>
             {allUsersDetails? <div>
              <div className='container-fluid adminpagelargescreen'>
                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Email</th>

                    </tr>
                  </thead>
                  <tbody>
                   { allUsersDetails?.map((item,index)=>(<tr>
                      <td>{index+1}</td>
                      <td>{item?.username}</td>
                      <td>{item?.email}</td>
                      <td><button className='btn btn-danger p-1    rounded'>
                        <FontAwesomeIcon icon={faTrash} />
                      </button></td>

                    </tr>))}
                
                  </tbody>
                </Table>
              </div>

              {/* for small screen */}

              <div className='container-fluid  adminpagesmallscreen'>
               { allUsersDetails?.map((item,index)=>(<div className='w-100 mt-2 border border-3 border-secondary rounded ' style={{ position: "relative" }}>
                  <div className='fs-4 px-3 bg-secondary text-light rounded' style={{ position: "absolute", top: "2px", left: "5px", fontWeight: "bold" }}>{index+1}</div>
                  <h4 className='mt-5 ps-3' style={{ fontWeight: "bold" }}>Username</h4>
                  <p className='ps-3'>{item?.username}</p>
                  <h4 className='mt-3 ps-3' style={{ fontWeight: "bold" }}>Email</h4>
                  <p className='ps-3'>{item?.email}</p>
                  <button className='btn btn-danger  fs-6      rounded' style={{ position: "absolute", top: "2px", right: "5px", fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>))}
              </div>
              </div>:

              <div>
                <h2>sakjskdaksjldkajlksjdka</h2>
              </div>}

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AdminDashboard