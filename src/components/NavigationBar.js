import { Link } from 'react-router-dom';
import ProfileImage from '../assets/img/profileImg.jpg'
import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Repository from '../services/Repository';


const Navigationbar = () => {

    const currentUser = localStorage.getItem('currentUser');
    const userRole = localStorage.getItem('userRole');
    const token = localStorage.getItem('jwt')
    const history = useHistory();


    // const [islogin, setIsLogin] = useState(true);
    // if (currentUser === undefined) {
    //     setIsLogin(false)
    // }

    const handleLogout = useCallback(() => {
     
        Repository.logoutUser(token)
        .then(data => {
            console.log(data);
            history.push('/')
          })
          .catch(error => {
            throw error;
          });

        //   setIsLogin(false)
        
    },[token, history]);

    useEffect(() => {}, [handleLogout]);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '10vh', position: 'fixed', top: '0', left: '0', right: '0' }}>
            <button className="navbar-brand" href="#" style={{ fontSize: '30px' ,background: 'none', border: 'none' }}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>TEACHING INSTITUTION</Link></button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" style={{ fontSize: '20px' }}>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/aboutUs" className="nav-link" style={{ fontSize: '20px' }}>About Us</Link>
                    </li>
                    {currentUser && userRole === "Student" &&
                        <li className="nav-item">
                            <Link to="/my-courses" className="nav-link" style={{ fontSize: '20px' }}>My Courses</Link>
                        </li>
                    }
                    <li className="nav-item">
                        <Link to="/" className="nav-link" style={{ fontSize: '20px' }}>News</Link>
                    </li>
                    {currentUser && userRole === "Student" &&
                        <li className="nav-item">
                            <Link to="/" className="nav-link" style={{ fontSize: '20px' }}>Assignments</Link>
                        </li>
                    }
                     {currentUser && userRole === "Teacher" &&
                        <li className="nav-item">
                            <Link to="/my-course" className="nav-link" style={{ fontSize: '20px' }}>My Course</Link>
                        </li>
                    }
                </ul>
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item" style={{ marginTop: '15px' }}>
                        <div className="nav-link" href="#">
                            {currentUser && <div className="nav-link" style={{ fontSize: '20px' }}>Hello, {currentUser}</div>}
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" href="#">
                            {currentUser &&
                                <Link to="/profile" className="nav-link">
                                    <img src={ProfileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                </Link>
                            }
                        </div>
                    </li>
                    {currentUser && <li className="nav-item" style={{ marginTop: '23px' }}>
                        <Link className="nav-link" href='#' style={{ fontSize: '20px', color: 'red' }} onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>}
                    {!currentUser && <li className="nav-item" style={{ marginTop: '23px' }}>
                        <Link className="nav-link" style={{ fontSize: '20px' }} to="/login">
                            Login
                        </Link>
                    </li>
                    }
                    {!currentUser && <li className="nav-item" style={{ marginTop: '23px' }}>
                        <Link className="nav-link" style={{ fontSize: '20px' }} to="/signup">
                            Register
                        </Link>
                    </li>
                    }
                </ul>
            </div>
        </nav>

    );
}

export default Navigationbar;