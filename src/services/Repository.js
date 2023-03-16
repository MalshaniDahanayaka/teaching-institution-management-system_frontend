import axios from "axios";


class Repository {


  jwt = "";

  #BaseUrl = "";

  instance = undefined;

  constructor() {
    this.#BaseUrl = "http://localhost:8096/api";
    this.jwt = localStorage.getItem('jwt');


    this.instance = axios.create({
      headers: {
        "auth-token": `Bearer ${this.jwt}`
      }
    });
  }


  async signupUser(user) {
      return axios.post(`${this.#BaseUrl}/v1/signup`, user).then(res =>{
        return res.data;
      })
    .catch (err => {
      throw err;
    
  });
}


  async loginUser(user) {
    return axios.post(`${this.#BaseUrl}/login/user`, user).then(res => {
      return res.data;
    }).catch(err => {
      throw err;
    });

  }

  async showAllCourses() {

    return axios.get(`${this.#BaseUrl}/user/courses`).then(res => {
      return res.data;
    }).catch(err => {
      throw err;
    });
  }

  async getStuentProfile(currentUser, token) {
    try {
      const res = await this.instance.get(`${this.#BaseUrl}/student/profile/${currentUser}`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
    } catch (err) {
      throw err;
    }

  }

  async getTeacherProfile(currentUser, token) {

    try {
      const res = await this.instance.get(`${this.#BaseUrl}/teacher/profile/${currentUser}`,{
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
    } catch (err) {
      throw err;

    }

  }

  async getAllStudents(token) {

    try {

      const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allStudents`,{
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
    } catch (err) {
      throw err;

    }

  }

  async getAllTeachers(token) {

    try {

      const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allTeachers`,{
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
    } catch (err) {
      throw err;

    }
  }

  async getAllUsers(token){
    try {
      const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allUsers`,{
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
    }catch (err) {
      throw err;
    }
  }

  
  async getTotalCount(token) {
    try {
          const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allUsers`, {
            headers: {
              "auth-token": `Bearer ${token}`
            }
          });
          return res.data.length;
        } catch (err) {
          throw err;
        }
    
    
  }

  async getAllCourses(token) {
    try {
      const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allCourses`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  async getTotalCourses(token) {
    try {
      const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allCourses`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data.length;
    } catch (err) {
      throw err;
    }
  }

  async getTeachersWithNoCourses(token) {
    try {
      const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/teachersWithNoCourses`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  async logoutUser(token) {
    
    return axios.get(`${this.#BaseUrl}/logout/user`, {
      headers: {
        "auth-token": `Bearer ${token}`
      }
    }).then(res => {
      localStorage.setItem("jwt", "");
      localStorage.setItem("userRole", "");
      localStorage.setItem("currentUser", "");
      return res.data;
    }).catch(err => {
      throw err;
    })
  
  }

  async enrollToCourse(request, token) {
    try{
        const res = await this.instance.post(`${this.#BaseUrl}/student/enroll/course`, request ,{
          headers: {
            "auth-token": `Bearer ${token}`
          }
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

async enrolledCourses(currentUser, token) {
  try{
      const res = await this.instance.get(`${this.#BaseUrl}/student/enrolled/courses/${currentUser}`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
  } catch (err) {
      throw err;
  }
}

async checkEnrollment(courseID, currentUser, token) {
  try{
      const res = await this.instance.get(`${this.#BaseUrl}/student/${courseID}/enrolled/${currentUser}`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
  } catch (err) {
      throw err;
  }
}

async unenrollFromCourse(courseID,username, token) {
  try{
      const res = await this.instance.delete(`${this.#BaseUrl}/student/unenroll/${courseID}/${username}` ,{
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
  } catch (err) {
      throw err;
  }
}

async assignedCourse(currentUser,token) {
  try{
      const res = await this.instance.get(`${this.#BaseUrl}/teacher/assigned/course/${currentUser}`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
  } catch (err) {
      throw err;
  }
}

async courseEnrollments(courseID) {
  return axios.get(`${this.#BaseUrl}/user/enrolled/students-for-course/${courseID}`).then(res => {
    return res.data;
  }).catch(err => {
    throw err;
  });
}

async createCourse(addCourseRequest, token) {
  try{
      const res = await this.instance.post(`${this.#BaseUrl}/managementTeam/create-course`, addCourseRequest, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
  } catch (err) {
      throw err;
  }
}

async enrolledStudents(courseID,token) {
  try{
      const res = await this.instance.get(`${this.#BaseUrl}/teacher/enrolled/students-for-course/${courseID}`, {
        headers: {
          "auth-token": `Bearer ${token}`
        }
      });
      return res.data;
  } catch (err) {
      throw err;
  }
}

async getEnrolledStudents(courseID, token) {
  try {
    const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/enrolled/students-for-course/${courseID}`, {
      headers: {
        "auth-token": `Bearer ${token}`
      }
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

}


export default new Repository();
