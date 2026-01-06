import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import RecipeCard from '../components/RecipeCard'
import Footer from '../components/Footer'
import { getAllRecipeAPI } from '../service/allApi'

function AllRecipes() {
    const [token, setToken] = useState("")
    const [allRecipes, setAllRecieps] = useState([])
    console.log(allRecipes);
    
    const [searchKey, setSearchKey] = useState("")
     console.log(searchKey);

    const getAllRecipes = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllRecipeAPI(searchKey,reqHeader)
          
                setAllRecieps(result.data)
        
        }
    }

    useEffect(() => {
        getAllRecipes()
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [searchKey])
    return (
        <>
            <Header />
            <div id='Allrecipe' >
                <div className='container-fluid'>
                    <div className="row pt-lg-4 pt-3 ">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center pt-lg-4 pt-3">
                            <div className=' bg-light text-dark d-flex justify-content-center align-items-center px-5 py-5' style={{ borderRadius: "50%", fontWeight: "bold", fontSize: "20px" }}>
                                RECI
                            </div>
                            <h1 className='mainhead'>Search your favourite recipe here</h1>

                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    {/* <div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 p-4">
               <div className=' text-center '>
                <select onChange={(e)=>setSearchKey(e.target.value)}  name="" id="" style={{backgroundColor:"white", border:"0px", borderRadius:"15px", fontWeight:"bold"}} className='p-2 w-100 text-center'>
                  <option value="" hidden style={{fontWeight:"bold"}}>Select Category</option>
                  <option value="Vegitarian" style={{fontWeight:"bold"}}>Vegitarian</option>
                  <option value="Non Vegitarian" style={{fontWeight:"bold"}}>Non Vegitarian</option>
                  <option value="Drinks" style={{fontWeight:"bold"}}>Drinks</option>
                  <option value="Deserts" style={{fontWeight:"bold"}}>Deserts</option>
                  <option value="Snacks" style={{fontWeight:"bold"}}>Snacks</option>
                  
                </select>
               </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div> */}
                    <div>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 p-3">
                                <input onChange={(e) => setSearchKey(e.target.value)} type="text" className='form-control w-md-50   mt-lg-2  text-center' style={{ borderRadius: "15px" }} placeholder='Search' />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>

          { token? <div className='container-fluid'>
                {allRecipes?.map((item)=>(<div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                        <RecipeCard recipes={item} />
                        
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-12"></div>
                </div>))}
            </div>:
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
            </div>}
            <Footer />
        </>
    )
}

export default AllRecipes