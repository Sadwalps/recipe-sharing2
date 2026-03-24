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

//api for admin register
export const adminRegisterAPI = async (reqBody) => {
    return await commonAPI(`POST`, `${serverURL}/admin-register`, reqBody, "")
}

//api for admin login
export const adminLoginAPI = async (reqBody) => {
    return await commonAPI(`POST`, `${serverURL}/admin-login`, reqBody, "")
}

//api for get all users details
export const getAllUsersDetailsAPI = async () => {
    return await commonAPI(`GET`, `${serverURL}/all-users`)
}

//api for delete user
export const deleteUserAPI = async (id, reqHeader) => {
    return await commonAPI(`DELETE`, `${serverURL}/delete-user/${id}`, {}, reqHeader)
}

//api for get all recipes details
export const getAllRecipesDetailAPI = async (reqHeader) => {
    return await commonAPI(`GET`, `${serverURL}/admin-all-recipes`, "", reqHeader)
}

//api for add chats
export const addChatAPI = async (reqBody, reqHeader) => {
    return await commonAPI(`POST`, `${serverURL}/add-chats`, reqBody, reqHeader)
}

//api for get user chats
export const getUserChatAPI = async (reqHeader) => {
    return await commonAPI(`GET`, `${serverURL}/user-chats`, "", reqHeader)
}

//api for delete user chats
export const deleteUserChatAPI = async (id, reqHeader) => {
    return await commonAPI(`DELETE`, `${serverURL}/delete-chat/${id}`, {}, reqHeader)
}

//api for update user recipes
export const UpdateUserChatAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI(`PUT`, `${serverURL}/update-userchat/${id}`, reqBody, reqHeader)
}

//api for get all chats details
export const getAllChatsDetailAPI = async () => {
    return await commonAPI(`GET`, `${serverURL}/admin-all-chats`)
}