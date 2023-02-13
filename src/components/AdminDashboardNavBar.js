import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProfileImage from '../assets/img/profileImg.jpg'
import { useHistory } from 'react-router-dom';


const AdminDashboardNavBar = () => {

    const history = useHistory();
 

    const currentUser = localStorage.getItem('currentUser');

    const handleLogout = () => {
        localStorage.setItem("jwt", "");
        localStorage.setItem("userRole","");
        localStorage.setItem("currentUser","");
        history.push('/');
      }

      useEffect(() => {}, []);
      
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: '10vh',position: 'fixed', top: '0', left: '0', right: '0' }}>
                <a className="navbar-brand" href="#" style={{fontSize: '30px'}}><Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item" style={{marginTop:'15px'}}>
                            <a className="nav-link" href="#">
                               {currentUser && <a className="nav-link" style={{fontSize: '20px'}}>Hello ,{currentUser}</a>}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                { currentUser &&
                               <Link to="/profile" className="nav-link">
                                  <img src={ProfileImage} alt="Profile" style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                               </Link>
                                }
                            </a>
                        </li>
                        {currentUser && <li className="nav-item" style={{marginTop:'23px'}}>
                            <a className="nav-link" href="#" style={{fontSize: '20px', color:"red"}} onClick={handleLogout}>
                                Logout
                            </a>
                         </li>}
                    </ul>
                </div>
            </nav> );
            
}
 
export default AdminDashboardNavBar;