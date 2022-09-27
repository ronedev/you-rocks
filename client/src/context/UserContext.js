import React, {useEffect, useState} from 'react'
import {useJwt} from 'react-jwt'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const UserContext = React.createContext({})

export const UserProvider = ({children})=>{
    const [actualUser, setActualUser] = useLocalStorage('user', null)
    const [adminUser, setAdminUser] = useState(false)
    const {decodedToken} = useJwt(actualUser ? actualUser.token : null)

    useEffect(()=>{
        decodedToken && (decodedToken._id === process.env.REACT_APP_ADMIN_USER && setAdminUser(true))
    }, [decodedToken])

    return(
        <UserContext.Provider value={{actualUser, setActualUser, adminUser}}>
            {children}
        </UserContext.Provider>
    )
}