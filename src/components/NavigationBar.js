import { Link } from 'react-router-dom';
import ProfileImage from '../assets/img/profileImg.jpg'
import { useEffect, useState } from 'react';


const Navigationbar = () => {

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
      }

      useEffect(() => {}, [islogin]);
      
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: '10vh',position: 'fixed', top: '0', left: '0', right: '0' }}>
                <a class="navbar-brand" href="#" style={{fontSize: '30px'}}><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>TEACHING INSTITUTION</Link></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/login" class="nav-link" style={{fontSize: '20px'}}>About Us</Link>
                        </li>
                        { islogin &&
                        <li class="nav-item">
                            <Link to="/login" class="nav-link" style={{fontSize: '20px'}}>My Cources</Link>
                        </li>
                        }
                        <li class="nav-item">
                            <Link to="/login" class="nav-link" style={{fontSize: '20px'}}>News</Link>
                        </li>
                        { islogin &&
                        <li class="nav-item">
                            <Link to="/login" class="nav-link" style={{fontSize: '20px'}}>Assignments</Link>
                        </li>
                         }
                    </ul>
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item" style={{marginTop:'15px'}}>
                            <a class="nav-link" href="#">
                               {islogin && <a class="nav-link" style={{fontSize: '20px'}}>Hello ,{currentUser}</a>}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                { islogin &&
                               <Link to="/profile" class="nav-link">
                                  <img src={ProfileImage} alt="Profile" style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                               </Link>
                                }
                            </a>
                        </li>
                        <li class="nav-item" style={{marginTop:'23px'}}>
                            <a class="nav-link" style={{fontSize: '20px'}} onClick={handleLogout}>
                                Logout
                            </a>
                         </li>
                    </ul>
                </div>
            </nav>

      
     );
}
 
export default Navigationbar;