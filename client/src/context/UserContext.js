import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const UserContext = React.createContext({})

export const UserProvider = ({children})=>{
    const [actualUser, setActualUser] = useLocalStorage('user', null)

    console.log(actualUser)

    return(
        <UserContext.Provider value={{actualUser, setActualUser}}>
            {children}
        </UserContext.Provider>
    )
}