import React from "react";
import { useState, useEffect } from "react";
import Repository from "../../services/Repository";
import AdminDashboardNavBar from "../../components/AdminDashboardNavBar";
import { useHistory } from 'react-router-dom';

const AllCoursesPage = () => {

    const [courses, setCourses] = useState([])
    const [titile, setTitle] = useState("All Courses Details")
    const token = localStorage.getItem('jwt')
    const [searchText, setSearchText] = useState('');
    const history = useHistory();
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        if (userRole !== "Admin") {
            history.push("/error");
        }
        Repository.getAllCourses(token)
            .then(data => {
                setCourses(data);
                console.log(data);
            })
            .catch(error => {
                throw error;
            });

    }, [token, courses.courseID,userRole, history]);
    const setAllCourses = () => {
        Repository.getAllCourses(token)
            .then(data => {
                setCourses(data);
                setTitle("All Courses Details");
                console.log(data);
            })
            .catch(error => {
                throw error;
            });
    };


    const handleEnrolledStudentClick = (courseID) => {
        history.push(`/course-enrollments`, {courseID});
      };





    const filteredCourses = courses.filter(course =>
        course.courseID.toLowerCase().includes(searchText.toLowerCase()) ||
        course.courseName.toLowerCase().includes(searchText.toLowerCase()) ||
        course.aboutCourse.toLowerCase().includes(searchText.toLowerCase()) ||
        course.timeSlot.toLowerCase().includes(searchText.toLowerCase()) 
      );return (
        <div>
            <AdminDashboardNavBar />
            <hr />

            <div style={{ marginTop: "5vw" }}>

                <div className="title-home-page"> <h1 className="wow slideInLeft" id="title">{titile}</h1> </div>

            </div>

            <hr />
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary d-inline-block mr-3" onClick={setAllCourses}>All Courses</button>
            </div>


            <div style={{margin: "auto", width: "80%", marginTop:"2vw"}}>
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Search courses..." style={{border: "3px solid green",padding: "5px"}}/>
                <table className="table table-striped" style={{marginTop:"2vw"}}>
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Course ID</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Teacher Username</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">About Course</th>
                        <th scope="col">Time Slot</th>
                        <th scope="col">See Enrollments</th>
                    </tr>
                    </thead>
                    <tbody>
                    { filteredCourses.map((course, index) => (<tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{course.courseID}</td>
                        <td>{course.courseName}</td>
                        <td>{course.teacher.username}</td>
                        <td>{course.teacher.firstName} {course.teacher.lastName}</td>
                        <td>{course.aboutCourse}</td>
                        <td>{course.timeSlot}</td>
                        <td onClick={() => handleEnrolledStudentClick(course.courseID)}>
                            <button>Enrollments</button>
                        </td>
                        </tr> 
                ))}
                </tbody>
            </table>
            </div>

        </div>
    );
}

export default AllCoursesPage;