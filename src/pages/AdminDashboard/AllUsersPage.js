import React from "react";
import '../../App.css';
import AdminDashboardNavBar from "../../components/AdminDashboardNavBar";
import { useEffect, useState, useHistory } from 'react';
import Repository from "../../services/Repository"

const AllUsersPage = () => {

  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("All Users Details");

  
  const [searchText, setSearchText] = useState('');
  


  const token = localStorage.getItem("jwt");

  useEffect(() => {
    Repository.getAllUsers(token)
      .then(data => {
        setUsers(data);
        console.log(data);
      })
      .catch(error => {
        throw error;
      });
  }, [token]);

  const setAllData = () => {
    Repository.getAllUsers(token)
      .then(data => {
        setUsers(data);
        setTitle("All Users Details");
        console.log(data);
      })
      .catch(error => {
        throw error;
      });
  };

  const setStudentData = () => {
    Repository.getAllStudents(token)
      .then(data => {
        setUsers(data);
        setTitle("All Students Details");
        console.log(data);
      })
      .catch(error => {
        throw error;
      });
  };
  const setTeachertData = () => {
    Repository.getAllTeachers(token)
      .then(data => {
        setUsers(data);
        setTitle("All Teachers Details");
        console.log(data);
      })
      .catch(error => {
        throw error;
      });
  };

  const filteredUsers = users.filter(user =>
    user.username.includes(searchText) ||
    user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.role.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div>
        <AdminDashboardNavBar />
    <div>
    <hr />
    <div style={{ marginTop: "5vw" }}>
      <div className="title-home-page">
        <h1 className="wow slideInLeft" id="title">{title}</h1>
      </div>
    </div>
    <hr />
    <div className="d-flex justify-content-center">
      <button className="btn btn-secondary d-inline-block mr-3" onClick={setAllData}>All Users</button>
      <button className="btn btn-primary d-inline-block mr-3" onClick={setStudentData}>All Students</button>
      <button className="btn btn-primary d-inline-block mr-3" onClick={setTeachertData}>All Teachers</button>
    </div>

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

export default AllUsersPage;