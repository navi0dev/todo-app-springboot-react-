import { createContext, useContext, useState } from "react";
import { executeAuthenticationService, executeJWTAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/apiClient";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export default function AuthProvider({ children }){
    
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [token, setToken] = useState(null)
    const[username, setUsername] = useState(null)
    // function login(username, password){
    //     if(username==="vaishnavi" && password==="password"){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true;
    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //        return false;
    //     }
    // }
    // async function login(username, password){
    //     const baToken = 'Basic '+ window.btoa(username + ":" + password)
        
    //     try{
    //         const response = await executeAuthenticationService(baToken)
    //         if(response.status === 200){
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     console.log('intercpeting and adding a token')
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }
    //             )
    //             return true;
    //         }
    //         else{
    //             logout()
    //             return false;
    //         }
    //     }
    //     catch(error) {
    //             logout()
    //             return false;
    //     }
    // }
    async function login(username, password){        
        try{
            const response = await executeJWTAuthenticationService(username, password)
            if(response.status === 200){
                const jwtToken = 'Bearer '+ response.data.token
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercpeting and adding a token')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true;
            }
            else{
                logout()
                return false;
            }
        }
        catch(error) {
                logout()
                return false;
        }
    }

    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}