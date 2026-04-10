import React, { createContext, useState } from 'react'

export const editResponseContent = createContext({})
export const loginResponseContext = createContext({})
export const SingleUsersRecipeContext = createContext([])
function ContextShare({ children }) {

    const [editResponse, setEditResponse] = useState([])
    const [loginResponse, setLoginResponse] = useState(true)
    const [singleUsersRecipe, setSingleUsersRecipe] = useState([])

    return (
        <>
            <editResponseContent.Provider value={{ editResponse, setEditResponse }}>
                <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
                    <SingleUsersRecipeContext value={{ singleUsersRecipe, setSingleUsersRecipe }}>
                        {children}
                    </SingleUsersRecipeContext>
                </loginResponseContext.Provider>
            </editResponseContent.Provider>
        </>
    )
}
export default ContextShare