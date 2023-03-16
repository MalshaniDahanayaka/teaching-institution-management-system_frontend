import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import Repository from "../services/Repository";
import { useHistory } from 'react-router-dom';


export const CreateCourse = () => {

    const history = useHistory();

    const token = localStorage.getItem("jwt");

    const [courseID, setCourseID] = useState("");
    const [courseName, setCourseName] = useState("");
    const [aboutCourse, setAboutCourse] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [teacherUserName, setTeacherUserName] = useState("");
    const [teachersWithNoCourses, setTeachersWithNoCourses] = useState([]);
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        if (userRole !== "Admin") {
            history.push("/error");
          }
        Repository.getTeachersWithNoCourses(token)
            .then(data => {
                console.log(data);
                setTeachersWithNoCourses(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [token,history,userRole]);


    const handleSubmit = (event) => {

        const addCourseRequest = { courseID, courseName, aboutCourse, timeSlot, teacherUserName }

        Repository.createCourse(addCourseRequest, token)
            .then(data => {
                console.log(data);
                if (data) {
                    history.push('/create-course-success')
                }
            })
            .catch(error => {
                throw error;
            });


        event.preventDefault();

    }



    return (

        <div className="App">
            <div className="auth-form-container" >

                <h1>Create Course</h1><br />
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="courseID">Course ID</label>
                    <input value={courseID} onChange={(e) => setCourseID(e.target.value)} name="courseID" id="courseID" placeholder="Course ID" />

                    <label htmlFor="courseName">Course Name</label>
                    <input value={courseName} onChange={(e) => setCourseName(e.target.value)} name="courseName" id="courseName" placeholder="Course Name" />

                    <label htmlFor="aboutCourse">About Course</label>
                    <input value={aboutCourse} onChange={(e) => setAboutCourse(e.target.value)} placeholder="About Course" id="aboutCourse" name="aboutCourse" />

                    <label htmlFor="timeSlot">Time Slot</label>
                    <input value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} placeholder="Time" id="timeSlot" name="timeSlot" />

                    <label htmlFor="teacher">Assign a teacher</label>
                    <select value={teacherUserName} onChange={e => setTeacherUserName(e.target.value)}>
                        <option placeholder="Assign Teacher"> </option>
                        {teachersWithNoCourses.map(teacher => (
                            <option key={teacher.id} value={teacher.userName}>{teacher.username} </option>
                        ))}

                    </select>


                    <button className="registerbtn" type="Submit" onClick={handleSubmit}><b>Create</b></button>
                </form>
                <br />



            </div>
        </div>

    );
}