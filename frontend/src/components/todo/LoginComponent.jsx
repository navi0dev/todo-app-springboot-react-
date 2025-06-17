import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from './security/AuthContext';
export default function LoginComponent(){

    const [username, setUsername] = useState("vaishnavi")
    const [password, setPassword] = useState("password");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth(LoginComponent)

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    async function handleSubmit(){
        if(await authContext.login(username, password)){
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        }
        else{
            setShowErrorMessage(true);
        }
    }
    
    return(
        <div className='LoginComponent'>

            <h1>Login</h1>
            {showErrorMessage && <div className="errorMessage">Authentication Failed</div>}

            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button className="btn btn-success m-3" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}