import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { SignupPage } from './pages/SignupPage';
import SignupSuccess from './components/SignupSuccess';
import { Switch } from 'react-router-dom';
import './App.css';
import { UserProfilePage } from './pages/UserProfilePage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/signup-success' component={SignupSuccess} />
        <Route exact path='/profile' component={UserProfilePage} />
      </Switch>  
  </Router>
  );
}

export default App;
