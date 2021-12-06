import { createContext, useState } from "react";
import { getAlkemyToken } from './../services/services';
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const contextValue = {
        user,
        async login (data) {
            const response = await getAlkemyToken(data)
            setUser({token: response.data.token}) 
        },
        logout () {
            setUser({})
        },
        isLogged () {
            return !!user
        }
    }

    return ( 
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider