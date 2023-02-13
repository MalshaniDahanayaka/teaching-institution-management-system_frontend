import React from "react";
import '../../App.css';
import AdminDashboardNavBar from "../../components/AdminDashboardNavBar";
import { useEffect, useState } from 'react';
import Repository from "../../services/Repository"

const AllUsersPage = () => {

    const [students, setStudents] = useState([])
    const [titile, setTitle] = useState("")


    useEffect(() => {
        Repository.getAllStudents()
          .then(data => {
            setStudents(data);
            console.log(data);
          })
          .catch(error => {
            throw error;
            console.log("not data showing...")
          });
      }, []);



      const setStudentData = () => {
        Repository.getAllStudents()
          .then(data => {
            setStudents(data);
            setTitle("All Students Details");
            console.log(data);
          })
          .catch(error => {
            throw error;
            console.log("not data showing...")
          });
      };
      const setTeachertData = () => {
        Repository.getAllTeachers()
        .then(data => {
          setStudents(data);
          setTitle("All Teachers Details");
          console.log(data);
        })
        .catch(error => {
          throw error;
          console.log("not data showing...")
        });
      };


      


    return ( 

        <div>
        
            <AdminDashboardNavBar />
            <hr />

            <div style={{marginTop:"5vw"}}>

            <div class="title-home-page"> <h1 class="wow slideInLeft" id="title">{titile}</h1> </div>

            </div>

            <hr />
            <div class="d-flex justify-content-center">
                  <button class="btn btn-primary d-inline-block mr-3" onClick={setStudentData}>All Students</button>
                  <button class="btn btn-secondary d-inline-block mr-3" onClick={setTeachertData}>All Teachers</button>
            </div>

               <div class="card-container">
               {students.map((student, index) => (
                   <div className="card" id="card-history" key={index} style={{marginTop:"2vw", width:"50vw", float:"none"}}>
                        <div className="student-details" style={{marginTop:"2vw", marginBottom:"2vw"}}>
                           <li id="li">{student.username}</li>
                           <li id="li">{student.firstName}</li>
                           <li id="li">{student.lastName}</li>
                           <li id="li">{student.email}</li>
                        </div>
                   </div>
        ))}
                </div>
            </div>
    
     );
}
 
export default AllUsersPage;