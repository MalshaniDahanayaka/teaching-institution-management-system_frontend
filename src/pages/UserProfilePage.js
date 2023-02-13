import React,{ useState,useEffect } from "react";
import Repository from "../services/Repository"
import '../App.css';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Navigationbar from '../components/NavigationBar'
import ProfilePhoto from "../components/ProfilePhoto";


export const UserProfilePage = (props) => {

    const currentUser = localStorage.getItem('currentUser');
    const userRole = localStorage.getItem('userRole');
    const [user,setUser] = useState({})
    const [username,setUsername] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [role,setRole] = useState("")
    const [userID,setUserId] = useState("")
    const [isPending,setIsPending] = useState(true)
    const location = useLocation();
 


    useEffect(() => {

        if(userRole === "Student"){
            console.log("awaaa");
            Repository.getStuentProfile(currentUser)
            .then(data => {
              setUsername(data.username)
              setFirstName(data.firstName)
              setLastName(data.lastName)
              setEmail(data.email)
              setRole(data.role)
              setUserId(data.studentID)
              setIsPending(false);  
            })
            .catch(error => {
              throw error;
              console.log("not data showing...")
            });

        }else if(userRole === "Teacher"){

            Repository.getTeacherProfile(currentUser)
            .then(data => {
                setUsername(data.username)
              setFirstName(data.firstName)
              setLastName(data.lastName)
              setEmail(data.email)
              setRole(data.role)
              setUserId(data.teacherID)
              setIsPending(false);  
            })
            .catch(error => {
              throw error;
              console.log("not data showing...")
            });
    
        }
     
      },  [location.currentUser]);

    return ( 

      <div>
        <Navigationbar />
        <section className="vh-100" style={{backgroundColor: "#f4f5f7"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 " style={{display: 'flex', justifyContent: 'center'}}>
            <div className="col col-lg-6 mb-4 mb-lg-0"  style={{borderRadius: ".5rem",height: "600px",width:"800px",marginRight:'250px'}}>
              <div className="card mb-3"  style={{borderRadius: ".5rem",height: "600px",width:"800px"}} >
                <div className="row g-0"  style={{borderRadius: ".5rem",height: "600px",width:"800px"}}>
                  <div className="col-md-4 gradient-custom text-center text-white"
                    style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Profile Picture" className="img-fluid my-5" style={{width: "80px", borderRadius: "50%"}} /> */}
                      <ProfilePhoto firstName={firstName} lastName={lastName} />
                        <br/>
                    <h5>{firstName}<br />{lastName}</h5>
                    <i className="fas fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6 className="mb-3">Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>User Name</h6>
                          <p className="text-muted">{username}</p>
                        </div>
                      </div>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>User Role</h6>
                          <p className="text-muted">{userRole}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>User ID</h6>
                          <p className="text-muted">{userID}</p>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section> 

        </div>
  
     );


}
 