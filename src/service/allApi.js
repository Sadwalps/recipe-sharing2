import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for register
export const registerAPI = async (reqBody) => {
    return await commonAPI(`POST`, `${serverURL}/register`, reqBody,"")
}

//api for login
export const loginAPI = async (reqBody) => {
    return await commonAPI(`POST`, `${serverURL}/login`, reqBody,"")
}

//api for add recipe
export const addRecipeAPI =async(reqBody, reqHeader)=>{
    return await commonAPI(`POST`, `${serverURL}/add-recipe`, reqBody, reqHeader)
}