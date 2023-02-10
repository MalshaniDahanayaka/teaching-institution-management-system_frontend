import React, { useState , useEffect} from "react";
import FormValidation from "../errorHandling/FormValidation";
import Repository from "../services/Repository"
import { Link } from 'react-router-dom';
import '../App.css';
import { useHistory } from 'react-router-dom';

export const SignupPage = (props) => {

    const history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [userID, setUserId] = useState("");
    const [errors, setErrors] = useState({});
    const [signupError, setSignupError] = useState('');
    const [status, setStatus] = useState("");
    
    useEffect(() => {
        console.log(errors + "user state");
        console.log(Object.keys(errors).length + "user state");
        
      }, [errors]);
    

    const handleSubmit = (event) => {

        setErrors(FormValidation({firstName, lastName, username, email, password, userID}));

        const user={firstName,lastName,username,email,password,role,userID}

        if(Object.keys(FormValidation({firstName, lastName, username, email, password, userID})).length===0){

            Repository.signupUser(user)
                .then(data => {
                    console.log(data);
                    if(data){
                        history.push('/signup-success')
                    }
                })
                .catch(error => {
                    setSignupError(error.message);
                    if (error.response && error.response.status === 409) {
                        setStatus("Username is already taken, please choose another username.");
                      } else {
                        setSignupError(error.message);
                        throw error;
                      }
                });

    }
        event.preventDefault();
        
    }

    return(
        <div className="App">
        <div className="auth-form-container" >
        { status && <p className="status">{status}</p> }
            <h1>Register</h1><br/>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstName" placeholder="First Name"/>
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <label htmlFor="lastName">Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="lastName" placeholder="Last Name"/>
            {errors.lastName && <p className="error">{errors.lastName}</p>}


            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} name="username" id="username" placeholder="Username"/>
            {errors.username && <p className="error">{errors.username}</p>}


            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            {errors.email && <p className="error">{errors.email}</p>}


            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name="password" />
            {errors.password && <p className="error">{errors.password}</p>}


            <label htmlFor="role">Role</label>
            <select value={role} onChange={e => setRole(e.target.value)}>
                <option placeholder="Select Role"> </option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
            </select>

            <label htmlFor="userID">UserID</label>
            <input value={userID} onChange={(e) => setUserId(e.target.value)}  placeholder="UserID" id="userID" name="userID" />
            {errors.userID && <p className="error">{errors.userID}</p>}

        
            <button className="registerbtn" type="Submit" onClick={handleSubmit}><b>Register</b></button>
        </form>

        <h3>Already have an account?</h3>
        <Link to="/login" className="link-button"><h4>Login here</h4></Link>

        </div>
        </div>
    )
}
 