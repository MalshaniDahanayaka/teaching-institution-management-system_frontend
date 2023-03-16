import React from "react";
import { useState, useEffect } from "react";
import Repository from "../../services/Repository";
import AdminDashboardNavBar from "../../components/AdminDashboardNavBar";
import { useLocation } from 'react-router-dom';



const EnrolledStudents = () => {

    const [students, setStudents] = useState([])
    const [titile, setTitle] = useState("Enrolled Students")
    const token = localStorage.getItem('jwt')
    const [searchText, setSearchText] = useState('');
    const location = useLocation();
    const { courseID } = location.state;
    useEffect(() => {
        Repository.getEnrolledStudents(courseID, token)
            .then(data => {              
                setStudents(data);
            })
            .catch(error => {
                throw error;
            });

    }, [token,courseID]);

   
    const setAllEnrolledStudents = () => {
        Repository.getEnrolledStudents(courseID, token)
            .then(data => {
                setStudents(data);
                console.log(data);
            })
            .catch(error => {
                throw error;
            });
    };const filteredStudents = students.filter(student =>
        student.username.toLowerCase().includes(searchText.toLowerCase()) ||
        student.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        student.email.toLowerCase().includes(searchText.toLowerCase()) ||
        student.role.toLowerCase().includes(searchText.toLowerCase()) ||
        student.studentID.toLowerCase().includes(searchText.toLowerCase()) 
      );


    return (
        <div>
            <AdminDashboardNavBar />
            <hr />

            <div style={{ marginTop: "5vw" }}>

                <div className="title-home-page"> <h1 className="wow slideInLeft" id="title">{titile}</h1> </div>

            </div>

            <hr />
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary d-inline-block mr-3" onClick={setAllEnrolledStudents}>Enrolled Students</button>
            </div><div style={{margin: "auto", width: "80%", marginTop:"2vw"}}>
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search students..." style={{border: "3px solid green",padding: "5px"}}/>
                <table className="table table-striped" style={{marginTop:"2vw"}}>
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">StudentID</th>
                    </tr>
                    </thead>
                    <tbody>
                    { filteredStudents.map((student, index) => (
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{student.username}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.role}</td>
                        <td>{student.studentID}</td>
                        </tr> 
                ))}
                </tbody>
            </table>
            </div> </div>
    );
}

export default EnrolledStudents;