import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
function Chats() {
  return (
    <>
      <Header />
      <div style={{ minHeight: "67vh" }}>

        <div className='container-fluid text-center'>
          <button className='btn btn-primary btn-lg rounded-circle fs-3 mt-3'>
            <FontAwesomeIcon icon={faPlus} style={{ fontWeight: "bold" }} />
          </button>

          
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
              <div className='w-100 mt-2 rounded bg-primary  text-center text-light p-1'>
                <h4 className='pt-3' style={{ fontWeight: "bold" }}>jfhsdjkhkdjkhdsfkhgjkdhf</h4>
                <div className='d-flex justify-content-between'>
                  <button className='btn btn-light rounded text-primary'>
                    <FontAwesomeIcon icon={faPenToSquare} className=' fs-4' />
                  </button>
                  <button className='btn btn-light text-danger rounded'>
                    <FontAwesomeIcon icon={faTrash} className='fs-4' />
                  </button>

                </div>
              </div>

            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
          </div>
        </div>

        <div className='container-fluid ' style={{ height: "65vh" }}>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6  text-info mt-5 pt-5  d-flex flex-column justify-content-center align-items-center">
              <img src="https://www.creativefabrica.com/wp-content/uploads/2023/10/26/Empty-meal-tray-Cartoon-kicthen-contain-Graphics-82559752-1.png" alt="" style={{ height: "200px" }} />
              <h1 className='text-center ' style={{ fontWeight: "bold" }}> chatbox is empty!!!</h1>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Chats