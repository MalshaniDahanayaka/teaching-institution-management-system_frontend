import React,{ useState } from "react";
import Repository from "../services/Repository"
import '../App.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const LoginPage = (props) => {

    const history = useHistory();


    const [username,setUsername] = useState('');
    const [currentUserName,setCurrentUserName] = useState('');
    const [password,setPassword] = useState('');
    const [token, setToken] = useState('');
    const [userRole, setUserRole] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState("");
     

        const fetchData = async (e) => {
            e.preventDefault();
            const user={username,password};
            
            Repository.loginUser(user)
                .then(data => {
                    setToken(data.jwtToken)
                    setUserRole(data.userRole)
                    setMessage(data.message)
                    setCurrentUserName(data.userName)
                    localStorage.setItem("jwt", data.jwtToken);
                    localStorage.setItem("userRole",data.userRole);
                    localStorage.setItem("currentUser",data.userName);
                    console.log(data);
                    console.log("token : "+ data.jwtToken)
                    console.log("userRole" + data.userRole)
                    console.log("message"+ data.userRole);
                    if(data.jwtToken != undefined){
                       history.push('/');
                    }else{
                        setStatus(data.message)
                    }
                })
                .catch(error => {
                    throw error;
                });

            

        }

    return (
        <div className="App">
        
        <div className="auth-form-container">
         { status && <p className="status">{status}</p> }
        <h1>Login</h1><br/>
    <form className="login-form" onSubmit={fetchData}>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="user name" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password" />
        <button className="loginbtn" type="Submit"><b>Log In</b></button>
    </form>

    <h3>Don't have an account?</h3>
    <Link to="/signup" className="link-button"><h4>Register here</h4></Link>

    </div>
    </div>
      );
}
 
