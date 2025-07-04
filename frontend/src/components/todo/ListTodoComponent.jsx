import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsername } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ListTodoComponent(){

    const today = new Date()
    const authContext = useAuth()
    const navigate = useNavigate()
    const username = authContext.username
    const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDay())
    const [todos, setTodos] = useState([])
    const [ message, setMessage ] = useState(null)

    useEffect ( () => refreshTodos(), [] )

    function refreshTodos(){
        retrieveAllTodosForUsername(username)
        .then(response => {
            console.log(response.data)
            setTodos(response.data)
        }) 
        .catch(error => console.log(error))
    }

    function deleteTodo(id){
        console.log('Clicked', id)
        deleteTodoApi(username, id)
        .then( () => {
            setMessage(`Deleted todo with id: ${id}`)
            refreshTodos()
        })
        .catch(error => console.log(error))
    }
    function updateTodo(id){
        console.log('Clicked', id)
        navigate(`/todo/${id}`)
        refreshTodos()
    }
    function addNewTodo(){
        navigate('/todo/-1')
    }
    return(
        <div className='container'>
            <h1>
                To-do List
            </h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Completion Status</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" 
                                            onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" 
                                            onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )   
                            )
                        }    
                    </tbody>
                </table>
            </div>
            <button className="btn btn-success m-5" onClick={addNewTodo}>Add New To-do</button>
                                    
        </div>
    )
}
export default ListTodoComponent