import {useParams, Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

function WelcomeComponent(){

    const {username} = useParams()
    const [ message, setMessage ] = useState(null)
    const authContext = useAuth()
    function callHelloWorldRestApi(){
        
        console.log("called");
        // axios.get('http://localhost:8080/hello-world', {
        //     withCredentials: true
        // })
        // .then(response => successfulResponse(response))
        // .catch(error => errorResponse(error))
        // .finally(() => console.log('cleanup'));

        // retrieveHelloWorldBean()
        // .then(response => successfulResponse(response))
        // .catch(error => errorResponse(error))
        // .finally(() => console.log('cleanup'));

        

        retrieveHelloWorldPathVariable('vaishnavi', authContext.token)
        .then(response => successfulResponse(response))
        .catch(error => errorResponse(error))
        .finally(() => console.log('cleanup'));
    }
    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.string)
    }
    function errorResponse(error){
        console.log(error);
    }
    return(
        <div className='WelcomeComponent'>
            <h1>Welcome {username}</h1>
            <div>
                manage your to-do <Link to="/todos">Click here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}
export default WelcomeComponent;