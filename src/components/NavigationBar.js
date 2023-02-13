import { Link } from 'react-router-dom';
import ProfileImage from '../assets/img/profileImg.jpg'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const Navigationbar = () => {

    const history = useHistory();

    const currentUser = localStorage.getItem('currentUser');
    const [islogin,setIsLogin] = useState(true);
    if(currentUser == undefined){
        setIsLogin(false)
    }



    const handleLogout = () => {
        localStorage.setItem("jwt", "");
        localStorage.setItem("userRole","");
        localStorage.setItem("currentUser","");
        setIsLogin(false)
        history.push('/')
      }

      useEffect(() => {}, [islogin]);
      
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: '10vh',position: 'fixed', top: '0', left: '0', right: '0' }}>
                <a class="navbar-brand" href="#" style={{fontSize: '30px'}}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>TEACHING INSTITUTION</Link></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/" class="nav-link" style={{fontSize: '20px'}}>Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/aboutUs" class="nav-link" style={{fontSize: '20px'}}>About Us</Link>
                        </li>
                        { currentUser &&
                        <li class="nav-item">
                            <Link to="/" class="nav-link" style={{fontSize: '20px'}}>My Courses</Link>
                        </li>
                        }
                        <li class="nav-item">
                            <Link to="/" class="nav-link" style={{fontSize: '20px'}}>News</Link>
                        </li>
                        { currentUser &&
                        <li class="nav-item">
                            <Link to="/" class="nav-link" style={{fontSize: '20px'}}>Assignments</Link>
                        </li>
                         }
                    </ul>
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item" style={{marginTop:'15px'}}>
                            <a class="nav-link" href="#">
                               {currentUser && <a class="nav-link" style={{fontSize: '20px'}}>Hello ,{currentUser}</a>}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                { currentUser &&
                               <Link to="/profile" class="nav-link">
                                  <img src={ProfileImage} alt="Profile" style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                               </Link>
                                }
                            </a>
                        </li>
                        {currentUser && <li class="nav-item" style={{marginTop:'23px'}}>
                            <a class="nav-link" href='#' style={{fontSize: '20px', color: 'red'}} onClick={handleLogout}>
                                Logout
                            </a>
                         </li>}
                         {!currentUser && <li class="nav-item" style={{marginTop:'23px'}}>
                            <Link class="nav-link" style={{fontSize: '20px'}} to="/login">
                                Login
                            </Link>
                         </li>
                         }
                         {!currentUser && <li class="nav-item" style={{marginTop:'23px'}}>
                            <Link class="nav-link" style={{fontSize: '20px'}} to="/signup">
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