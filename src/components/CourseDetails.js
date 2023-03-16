import React from "react";
import '../CourseDetails.css';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Repository from "../services/Repository";

export const CourseDetails = () => {

    const location = useLocation();

    const { courseID, courseName, timeSlot, aboutCourse, teacher } = location.state;

    const [enrolled, setEnrolled] = useState(false);
    const [totalEnrollments, setTotalEnrollments] = useState("");
    const history = useHistory();

    const currentUser = localStorage.getItem("currentUser");
    const userRole = localStorage.getItem("userRole");
    const token = localStorage.getItem("jwt");
    const username = currentUser;
    const request = { username, courseID };

    useEffect(() => {

        Repository.courseEnrollments(courseID)
            .then(data => {
                setTotalEnrollments(data);
            }).catch(error => {
                throw error;
            });

        if (currentUser) {
            Repository.checkEnrollment(courseID, username, token)
                .then(data => {
                    console.log(data);
                    if (data === true) {
                        setEnrolled(true);
                    }
                }).catch(error => {
                    throw error;
                });
        }
    }, [courseID, username, token, currentUser]);


    const handleEnrollClick = async (event) => {

        console.log(courseID);

        if (currentUser) {
            Repository.enrollToCourse(request, token)
                .then(data => {
                    console.log(data);
                    if (data) {
                        setEnrolled(true);
                        setTotalEnrollments(totalEnrollments+1);
                    }
                }).catch(error => {
                    throw error;
                });
        } else {
            history.push("/login");
        }
        event.preventDefault();
    };

    const handleUnenrollClick = async (event) => {

        if (currentUser) {
            Repository.unenrollFromCourse(courseID,username, token)
                .then(data => {
                    console.log(data);
                    if (data) {
                        setEnrolled(false);
                        setTotalEnrollments(totalEnrollments-1);
                    }
                }).catch(error => {
                    throw error;
                });
        }
        event.preventDefault();
    };

    return (
        <div className="Course-details" >
            <div class="container d-flex justify-content-center">
                <div class="c-card p-3 py-4" style={{ marginTop: "8vw" }}>
                    <div class="text-center">
                        <h3 class="mt-2"><b>{courseName}</b></h3>
                        <span class="mt-1 clearfix">{courseID}</span><br />
                        <h5 className="mt-2">Conducted by <b>{teacher.firstName} {teacher.lastName}</b></h5>
                        <h6 className="mt-2">({teacher.email})</h6><br />
                        <h5 className="mt-2">On every {timeSlot}</h5><br />
                        <div class="col-md-0">
                            <h5>Total Enrollments</h5>
                            <span class="num">{totalEnrollments}</span>
                        </div>
                        <hr class="line" />
                        <small class="mt-4">{aboutCourse}</small>
                        <div class="profile mt-5">
                            {enrolled ? (
                                <div className="row pt-1 justify-content-between" style={{ flexWrap: "wrap", paddingLeft: "10px", paddingRight: "10px" }} >
                                    <button id="enrolled-button" class="profile_button px-5" disabled>
                                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                                        Enrolled
                                    </button>
                                    <button id="Unenroll-btn" class="profile_button px-5" onClick={handleUnenrollClick}>
                                        Unenroll me
                                    </button>
                                </div>
                            ) : (
                                (userRole !== 'Teacher') ? (
                                    <button class="profile_button px-5" onClick={handleEnrollClick}>
                                        Enroll me
                                    </button>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}