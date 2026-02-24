import { faBowlFood, faMessage, faPowerOff, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteUserAPI, getAllUsersDetailsAPI } from '../service/allApi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function AdminDashboard() {

  const [allUsersDetails, setAllUsersDetails] = useState([])
  const [deleteUserStatus, setDeleteUserStatus] = useState("")
  const [token, setToken] = useState("")

  const getallusersdetails = async () => {
    const result = await getAllUsersDetailsAPI()
    console.log(result);
    setAllUsersDetails(result.data)
  }
  console.log(allUsersDetails);

  const handleDelete = async (id) => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await deleteUserAPI(id, reqHeader)
      console.log(result);
      if (result.status == 200) {
        alert(result.data)
        setDeleteUserStatus(result)
      } else {
        alert(`Something went wrong`)
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  })


  useEffect(() => {
    getallusersdetails()
  }, [deleteUserStatus])
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
              {token && <div className='d-flex flex-column gap-3 align-items-center justify-content-center mt-5' style={{ minHeight: "35vh" }}>
                <Link to={'/adminallrecipes'}>  <button className='btn btn-info rounded ' style={{ height: "7rem", width: "7rem", fontSize: "3rem" }}>
                  <FontAwesomeIcon icon={faBowlFood} className='' />
                </button></Link>

                <button className='btn btn-primary rounded ' style={{ height: "7rem", width: "7rem", fontSize: "3rem", position: "relative" }}>
                  <FontAwesomeIcon icon={faUser} />
                  {allUsersDetails.map((item, index) => (<div className='rounded  bg-light fs-5 px-2 text-primary' style={{ position: "absolute", top: "1px", right: "1px", fontWeight: "bold" }} >{index + 1}</div>))}
                </button>

                <button className='btn btn-primary rounded ' style={{ height: "7rem", width: "7rem", fontSize: "3rem", position: "relative" }}>
                  <FontAwesomeIcon icon={faMessage

                  } />
                  <div className='rounded  bg-light fs-5 px-2 text-primary' style={{ position: "absolute", top: "1px", right: "1px", fontWeight: "bold" }} >{index + 1}</div>
                </button>
              </div>}
            </div>

            <div className="col-lg-10 col-md-10 col-12 p-0 ">

              {/* header */}
              <Header />


              {token && <div>
                {/* All recipes button */}
                <div className='container-fluid mt-4 mb-4 d-lg-none d-md-none d-block'>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                      <Link to={'/adminallrecipes'}><button className='btn btn-lg btn-info rounded py-3 w-100 ' style={{ fontWeight: "bold" }}><FontAwesomeIcon icon={faBowlFood} className='me-3' />View All Recipes</button></Link>
                    </div>
                    <div className="col-md-2"></div>
                  </div>

                </div>

                {/* table section */}
                <h2 className='text-center mt-4' style={{ fontWeight: "bold" }}>Users</h2>
                {allUsersDetails ? <div>
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
                        {allUsersDetails?.map((item, index) => (<tr>
                          <td>{index + 1}</td>
                          <td>{item?.username}</td>
                          <td>{item?.email}</td>
                          <td><Link ><button className='btn btn-sm btn-primary rounded'>View Recipes</button></Link></td>
                          <td><button onClick={() => handleDelete(item?._id)} className='btn btn-danger p-1  rounded'>
                            <FontAwesomeIcon icon={faTrash} />
                          </button></td>

                        </tr>))}

                      </tbody>
                    </Table>
                  </div>

                  {/* for small screen */}

                  <div className='container-fluid  mb-4  adminpagesmallscreen'>
                    {allUsersDetails?.map((item, index) => (<div className='w-100 mt-2 border border-3 border-secondary rounded ' style={{ position: "relative" }}>
                      <div className='fs-4 px-3 bg-secondary text-light rounded' style={{ position: "absolute", top: "2px", left: "5px", fontWeight: "bold" }}>{index + 1}</div>
                      <h4 className='mt-5 ps-3' style={{ fontWeight: "bold" }}>Username</h4>
                      <p className='ps-3'>{item?.username}</p>
                      <h4 className='mt-3 ps-3' style={{ fontWeight: "bold" }}>Email</h4>
                      <p className='ps-3'>{item?.email}</p>
                      <button onClick={() => handleDelete(item?._id)} className='btn btn-danger  fs-6      rounded' style={{ position: "absolute", top: "2px", right: "5px", fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <Link ><button className='btn btn-sm btn-primary rounded' style={{ position: "absolute", bottom: "2px", right: "5px", fontWeight: "bold" }}>View Recipes</button></Link>
                    </div>))}
                  </div>
                </div> :

                  <div>
                    <h1 className='text-center ' style={{ fontWeight: "bold" }}>No User yet!!!</h1>
                  </div>}
              </div>}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AdminDashboard