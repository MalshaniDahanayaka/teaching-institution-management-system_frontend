import CourseImage from '../assets/img/courseImg.jpg';
import { useHistory } from 'react-router-dom';


export const Course = ({ courseID, courseName, timeSlot, aboutCourse, teacher}) => {

  const history = useHistory();

  const handleShowMoreClick = () => {
    history.push(`/course-details`, {
      courseID,
      courseName,
      timeSlot,
      aboutCourse,
      teacher
    });
  };

  return (
    <div className="card" style={{ width: '100%', height: '100%' }}>
      <img src={CourseImage} className="card-img-top" alt={CourseImage} style={{ width: '100%', height: '9vw' }} />
      <div className="card-body">
        <h5 className="card-title" id={`card-title-${courseID}`}>{courseName}</h5>
        <h6 className="card-title" id={`card-title-${courseID}`}>{courseID}</h6>
        <p className="card-text" style={{ color: "black" }}>{aboutCourse}</p>
        <div style={{ display: 'flex' }}>

            <button className="btn btn-sm btn-info d-sm-none d-md-block" onClick={handleShowMoreClick}>Show More</button>
        </div>
      </div>
    </div>
  );
}

