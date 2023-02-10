import Navigationbar from '../components/NavigationBar';
import HomePageImage from '../components/HomePageImage';
import Repository from "../services/Repository"
import '../App.css'
import { useEffect, useState } from 'react';
import { Course } from '../components/Course';


export const HomePage = () => {

    const [courses, setCourses] = useState([]);
    const [isPending, setIsPending] = useState(true);

  
    useEffect(() => {
      Repository.showAllCourses()
        .then(data => {
          setCourses(data);
          console.log(data);
          setIsPending(false);  
        })
        .catch(error => {
          throw error;
          console.log("not data showing...")
        });
    }, []);


    return ( 
    <div>
        <Navigationbar />
        <hr />
        <HomePageImage />
        <div class="title-home-page"> <h1 class="wow slideInLeft" id="title">All Courses</h1> </div>


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
                      description={course.aboutCourse}
                      teacher={course.teacher}
                    />
                  </div>
                </div>
              </div>
))}
        </div>
      )}



    </div> );
}
 
