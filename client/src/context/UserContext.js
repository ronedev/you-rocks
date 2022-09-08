import React, { useState } from 'react'

export const UserContext = React.createContext({})

export const UserProvider = ({children})=>{
    const [actualUser, setActualUser] = useState({})

    return(
        <UserContext.Provider value={{actualUser, setActualUser}}>
            {children}
        </UserContext.Provider>
    )
}