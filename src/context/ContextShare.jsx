import React, { createContext, useState } from 'react'

export const editResponseContent = createContext({})

function ContextShare({ children }) {

    const [editResponse, setEditResponse] = useState([])

    return (
        <>
            <editResponseContent.Provider value={{ editResponse, setEditResponse }}>
                {children}
            </editResponseContent.Provider>
        </>
    )
}
export default ContextShare