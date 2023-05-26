import React, {createContext, useState, ReactNode, useEffect} from 'react'
import axios from "axios"



export const UserContext = createContext(null)

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)


    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
        
    )
}

export const UserOauthContext = createContext(null)

export const UserOauthContextProvider = ({children}) => {

    const [userOauth, setUserOauth] = useState(() => ({
        loggedIn: false
    }))

    useEffect(() => {
        axios.get("http://localhost:5051/account", {withCredentials: true})
        .then( res => {
            if (res.data) {
                console.log({...res.data});
                // setUserOauth({...res.data})
            }
        })
    }, [])


    return (
        <UserOauthContext.Provider value={[userOauth, setUserOauth]}>
            {children}
        </UserOauthContext.Provider>
        
    )
}



