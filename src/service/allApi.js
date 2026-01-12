import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for register
export const registerAPI = async (reqBody) => {
    return await commonAPI(`POST`, `${serverURL}/register`, reqBody, "")
}

//api for login
export const loginAPI = async (reqBody) => {
    return await commonAPI(`POST`, `${serverURL}/login`, reqBody, "")
}

//api for add recipe
export const addRecipeAPI = async (reqBody, reqHeader) => {
    return await commonAPI(`POST`, `${serverURL}/add-recipe`, reqBody, reqHeader)
}

//api for get home projects
export const getHomeRecipeAPI = async () => {
    return await commonAPI(`GET`, `${serverURL}/home-recipes`)
}

//api for get user recipes
export const getUserRecipeAPI = async (reqHeader) => {
    return await commonAPI(`GET`, `${serverURL}/user-recipe`, "", reqHeader)
}

//api for delete user recipes
export const deleteUserRecipeAPI = async (id, reqHeader) => {
    return await commonAPI(`DELETE`, `${serverURL}/delete-recipe/${id}`, {}, reqHeader)
}

//api for get all recipes
export const getAllRecipeAPI = async (searchKey, reqHeader) => {
    return await commonAPI(`GET`, `${serverURL}/all-recipes?search=${searchKey}`, "", reqHeader)
}

//api for update user recipes
export const UpdateUserRecipeAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI(`PUT`, `${serverURL}/update-userrecipe/${id}`, reqBody, reqHeader)
}

