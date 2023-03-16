import React from "react";
import Repository from "../services/Repository";
import { Course } from '../components/Course';
import Navigationbar from "../components/NavigationBar";
import { useEffect, useState } from 'react';

export const MyCoursesPage = () => {

  const currentUser = localStorage.getItem('currentUser');
  
  const [courses, setCourses] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const token = localStorage.getItem('jwt');

  useEffect(() => {  
      Repository.enrolledCourses(currentUser, token)
        .then(data => {
          setCourses(data);
          setIsPending(false);
        })
        .catch(error => {
          throw error;
        });

  },[currentUser,token]);

  return (
    <div>
      <Navigationbar />
      <hr />
      <div className="title-home-page" style={{ marginTop: "6vw" }} >
        <h1 className="wow slideInLeft" id="title">My Courses</h1>
      </div>
      <hr id="hr" />

      {isPending ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status" />
        </div>
      ) : (
        
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-12 col-sm-8 col-md-4" key={course.courseID}>
              <div className="card">
                <div className="card-body">
                  <Course
                    id={index}
                    courseID={course.courseID}
                    courseName={course.courseName}
                    timeSlot={course.timeSlot}
                    aboutCourse={course.aboutCourse}
                    teacher={course.teacher}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}