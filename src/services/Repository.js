import axios from "axios";


class Repository{


   jwt = "";

    #BaseUrl = "";

    instance = undefined;

    constructor(){
        this.#BaseUrl = "http://localhost:8095/api";
        this.jwt = localStorage.getItem('jwt');
        
        
        this.instance = axios.create({
          headers: {
            "auth-token" : `Bearer ${this.jwt}`
          }
        });
    }

    
    async signupUser(user) {
        try {
          const res = await this.instance.post(`${this.#BaseUrl}/v1/signup`, user);
          return res.data;
        } catch (err) {
          throw err;
        }
    }


    async loginUser(user) {
        try {
          const res = await this.instance.post(`${this.#BaseUrl}/login/user`, user);
          return res.data;
        } catch (err) {
          throw err;
        }
    }

    async showAllCourses() {

        try {
          
          const res = await this.instance.get(`${this.#BaseUrl}/user/courses`);
          return res.data;
        } catch (err) {
          throw err;
        }
    }

    async getStuentProfile(currentUser){

      try {
          
        const res = await this.instance.get(`${this.#BaseUrl}/student/profile/${currentUser}`);
        return res.data;
      } catch (err) {
        throw err;

      }



    }

    async getTeacherProfile(currentUser){

      try {
          
        const res = await this.instance.get(`${this.#BaseUrl}/teacher/profile/${currentUser}`);
        return res.data;
      } catch (err) {
        throw err;

      }

    }

    async getAllStudents(){

      try {
          
        const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allStudents`);
        return res.data;
      } catch (err) {
        throw err;

      }

    }

    async getAllTeachers(){

      try {
          
        const res = await this.instance.get(`${this.#BaseUrl}/managementTeam/allTeachers`);
        return res.data;
      } catch (err) {
        throw err;

      }

    }


}

export default new Repository;
