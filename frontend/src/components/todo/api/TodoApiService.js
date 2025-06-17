import { apiClient } from './apiClient';

export function retrieveAllTodosForUsername(username){
    return apiClient.get(`/users/${username}/todos`, {withCredentials: true})
}

export function deleteTodoApi(username, id){
    return apiClient.delete(`/users/${username}/todos/${id}`, {withCredentials: true})
}

export function retrieveTodoApi(username, id){
    return apiClient.get(`/users/${username}/todos/${id}`, {withCredentials: true})
}

export function updateTodoApi(username, id, todo){
    return apiClient.put(`/users/${username}/todos/${id}`, todo, {withCredentials: true})
}

export function createTodoApi(username, todo){
    return apiClient.post(`/users/${username}/todos`, todo, {withCredentials: true})
}
