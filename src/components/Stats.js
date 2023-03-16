import { useState, useEffect } from 'react';
import Repository from '../services/Repository';


export function TotalCount() {
  const [totalCount, setTotalCount] = useState(null);
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    Repository.getTotalCount(token)
      .then(data => {
        setTotalCount(data);
        console.log(data);
      })
      .catch(error => {
        throw error;
      });
  }, [token]);


  return (
    <div>
      {totalCount === null ? 'Loading...' : `${totalCount}`}
    </div>
  );
}

export function TotalCourses() {
  const [totalCourses, setTotalCourses] = useState(null);
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    Repository.getTotalCourses(token)
    .then(data => {
      setTotalCourses(data);
      console.log(data);
    })
    .catch(error => {
      throw error;
    });
  }, [token]);

  return (
    <div>
      {totalCourses === null ? 'Loading...' : `${totalCourses}`}
    </div>
  );

}


