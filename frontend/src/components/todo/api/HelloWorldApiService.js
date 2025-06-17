import { apiClient } from './apiClient';
export function retrieveHelloWorldBean(){
    return apiClient.get('/hello-world-bean', {withCredentials: true})
}

export function retrieveHelloWorldPathVariable(username, token){
    return apiClient.get(`/hello-world-bean/path-variable/${username}`
        ,
        {
            headers: {Authorization: token}, 
            withCredentials: true
        }
    )
}

