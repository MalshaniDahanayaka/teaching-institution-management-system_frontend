import React, { useState } from "react";
import Repository from "../services/Repository"
import '../App.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export const LoginPage = (props) => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState("");

    const fetchData = async (e) => {
        e.preventDefault();
        const user = { username, password };


        Repository.loginUser(user)
            .then(data => {
                console.log(data);
                
                localStorage.setItem("jwt", data.jwtToken);
                localStorage.setItem("userRole", data.userRole);
                localStorage.setItem("currentUser", data.userName);
                if (data.jwtToken !== null) {

                    if (data.userRole === "Admin") {
                        history.push('/dash-home');
                    }else{
                        history.push('/');
                    }

                } else {
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
                {status && <p className="status">{status}</p>}
                <h1>Login</h1><br />
                <form className="login-form" onSubmit={fetchData}>
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="user name" id="username" name="username" />
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password" />
                    <button className="loginbtn" type="Submit"><b>Log In</b></button>
                </form>
                <br />
                <h4>Don't have an account?</h4>
                <Link to="/signup" className="link-button"><h5>Register here</h5></Link>

            </div>
        </div>
    );
}

