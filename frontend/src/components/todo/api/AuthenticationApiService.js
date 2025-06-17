import { apiClient } from "./apiClient"

export function executeAuthenticationService(token){
    return apiClient.get(`/basicauth`,
        {
            headers: {Authorization: token }, 
            withCredentials: true
        }

    )
}

export function executeJWTAuthenticationService(username, password){
    return apiClient.post(`/authenticate`, 
        { username, password },
        { withCredentials: true }
    )
}
