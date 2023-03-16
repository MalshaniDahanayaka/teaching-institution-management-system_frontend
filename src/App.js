import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { SignupPage } from './pages/SignupPage';
import SignupSuccess from './components/SignupSuccess';
import { Switch } from 'react-router-dom';
import './App.css';
import { UserProfilePage } from './pages/UserProfilePage';
import { AboutUs } from './pages/AboutUs';
import AdminDashHomePage from './pages/AdminDashboard/AdminDashHomePage';
import AllCoursesPage from './pages/AdminDashboard/AllCoursesPage';
import AllUsersPage from './pages/AdminDashboard/AllUsersPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { MyCoursesPage } from './pages/MyCoursesPage';
import { CreateCoursePage } from './pages/AdminDashboard/CreateCoursePage';
import { CreateCourseSuccess } from './components/CreateCourseSuccess';
import MyCoursePage from './pages/MyCoursePage';
import ShowStudentsPage from './pages/ShowStudentsPage';
import EnrolledStudents from './pages/AdminDashboard/EnrolledStudents';
import Unauthorized from './pages/Unauthorized';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/signup-success' component={SignupSuccess} />
        <Route exact path='/profile' component={UserProfilePage} />
        <Route exact path='/aboutUs' component={AboutUs} />
        <Route exact path='/dashboard' component={AllUsersPage} />
        <Route exact path='/dash-home' component={AdminDashHomePage} />
        <Route exact path='/courses' component={AllCoursesPage} />
        <Route exact path='/course-details' component={CourseDetailsPage} />
        <Route exact path='/my-courses' component={MyCoursesPage} />
        <Route exact path='/create-course' component={CreateCoursePage} />
        <Route exact path='/create-course-success' component={CreateCourseSuccess} />
        <Route exact path='/my-course' component={MyCoursePage} />
        <Route exact path='/show-students' component={ShowStudentsPage} />
        <Route exact path='/course-enrollments' component={EnrolledStudents} />
        <Route exact path='/error' component={Unauthorized} />
      </Switch>
    </Router>

        
  );
}

export default App;
