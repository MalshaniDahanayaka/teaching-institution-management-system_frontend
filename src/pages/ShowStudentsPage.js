import React from "react";
import '../App.css';
import { useEffect, useState } from 'react';
import Repository from "../services/Repository";
import { useLocation} from "react-router-dom";
import Navigationbar from "../components/NavigationBar";


const ShowStudentsPage = () => {

  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("Enrolled Students Details");

  const [searchText, setSearchText] = useState('');

  const location = useLocation();
  const { courseID} = location.state;
  


  const token = localStorage.getItem("jwt");
  const userRole = localStorage.getItem('userRole');

  useEffect(() => {
    
    Repository.enrolledStudents(courseID,token)
      .then(data => {
        setUsers(data);
        console.log(courseID);
      })
      .catch(error => {
        throw error;
      });
  }, [courseID,token]);



  const filteredUsers = users.filter(user =>
    user.username.includes(searchText) ||
    user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.role.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div>
        <Navigationbar />
    <div>
    <hr />
    <div style={{ marginTop: "5vw" }}>
      <div className="title-home-page">
        <h1 className="wow slideInLeft" id="title">{title}</h1>
      </div>
    </div>
    <hr />

   <div style={{margin: "auto", width: "80%", marginTop:"2vw"}}>
      <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search users..." style={{border: "3px solid green",padding: "5px"}}/>
      <table className="table table-striped" style={{marginTop:"2vw"}}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">User Email</th>
            <th scope="col">User Role</th>
          </tr>
        </thead>
        <tbody>
          { filteredUsers.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr> 
      ))}
    </tbody>
  </table>
</div>


  </div>
  </div>
  
  

  );
}

export default ShowStudentsPage;