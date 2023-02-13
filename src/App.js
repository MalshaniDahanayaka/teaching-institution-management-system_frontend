import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { SignupPage } from './pages/SignupPage';
import SignupSuccess from './components/SignupSuccess';
import { Switch } from 'react-router-dom';
import './App.css';
import { UserProfilePage } from './pages/UserProfilePage';
import { AboutUs } from './pages/AboutUs';
import AllUsersPage from './pages/Dashboard/AllUsersPage';

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
      </Switch>  
  </Router>
  );
}

export default App;
