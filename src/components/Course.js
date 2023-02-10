import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import CourseImage from '../assets/img/courseImg.jpg'

export const Course = ({id,courseID,courseName,timeSlot,description,teacher}) => {


    return ( 
        <div className="card" style={{ width: '100%', height: '100%' }}>
        <img src= {CourseImage} className="card-img-top" alt="image.." style={{ width: '100%', height: '8vw' }}/>
        <div className="card-body">
          <h5 className="card-title" id={`card-title-${courseID}`}>{courseName}</h5>
          <p className="card-text">{description}</p>
          <div style={{ display: 'flex' }}>
            <Link>

              <a href="#" className="btn btn-sm btn-info d-sm-none d-md-block">Show More</a>

            </Link>
          </div>
        </div>
      </div>
     );
}
 
