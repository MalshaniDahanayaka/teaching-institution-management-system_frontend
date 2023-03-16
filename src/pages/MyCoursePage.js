import React from "react";
import Navigationbar from "../components/NavigationBar";
import '../CourseDetails.css';
import Repository from "../services/Repository";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MyCoursePage = () => {

    const currentUser = localStorage.getItem("currentUser");
    const token = localStorage.getItem("jwt");
    const [totalEnrollments, setTotalEnrollments] = useState("");

    const [isPending, setIsPending] = useState(true);
    const [course, setCourse] = useState([]);
    const history = useHistory();


    useEffect(() => {
        Repository.assignedCourse(currentUser, token)
            .then(data => {
                setCourse(data);
                setIsPending(false);
            }).catch(error => {
                throw error;
            });

        Repository.courseEnrollments(course.courseID)
            .then(data => {
                setTotalEnrollments(data);
            }).catch(error => {
                throw error;
            });

    }, [currentUser, token, course.courseID]);


    const handleShowEnrolledStudents = () => {
        history.push({
          pathname: '/show-students',
          state: { courseID: course.courseID }
        });
      };
      

    return (
        <div>
            <Navigationbar />
            <hr />
            <div className="title-home-page" style={{ marginTop: "6vw" }} >
                <h1 className="wow slideInLeft" id="title">My Course</h1>
            </div>

            {isPending ? (
                <div className="d-flex justify-content-center">
                    
                </div>
            ) : (
                <div className="Course-details" >
                    <div class="container d-flex justify-content-center">
                        <div class="c-card p-3 py-4" style={{ marginTop: "8vw" }}>
                            <div class="text-center">
                                <h3 class="mt-2"><b>{course.courseName}</b></h3>
                                <span class="mt-1 clearfix">{course.courseID}</span><br />
                                <h5 className="mt-2">Conducted by <b>{course.teacher.firstName} {course.teacher.lastName}</b></h5>
                                <h6 className="mt-2">({course.teacher.email})</h6><br />
                                <h5 className="mt-2">On every {course.timeSlot}</h5><br />
                                <div class="col-md-0">
                                    <h5>Total Enrollments</h5>
                                    <span class="num">{totalEnrollments}</span>
                                </div>
                                <hr class="line" />
                                <small class="mt-4">{course.aboutCourse}</small><br />
                                <div class=" mt-2">
                                    <button className="btn btn-sm btn-info d-sm-none d-md-block" onClick={handleShowEnrolledStudents} >Show enrolled students</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyCoursePage;