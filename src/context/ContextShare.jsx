import React, { createContext, useState } from 'react'

export const editResponseContent = createContext({})
export const loginResponseContext = createContext({})
function ContextShare({ children }) {

    const [editResponse, setEditResponse] = useState([])
    const [loginResponse, setLoginResponse] = useState(true)

    return (
        <>
            <editResponseContent.Provider value={{ editResponse, setEditResponse }}>
                <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
                    {children}
                </loginResponseContext.Provider>
            </editResponseContent.Provider>
        </>
    )
}
export default ContextShare