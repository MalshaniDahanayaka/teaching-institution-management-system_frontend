import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Repository from '../services/Repository';
import { useCallback } from 'react';

const AdminDashboardNavBar = () => {

    const history = useHistory();


    const currentUser = localStorage.getItem('currentUser');
    const token = localStorage.getItem('jwt')

    const handleLogout = useCallback(() => {

        Repository.logoutUser(token)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                throw error;
            });

        history.push('/');
    },[token, history]);

    useEffect(() => { }, [handleLogout]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '10vh', position: 'fixed', top: '0', left: '0', right: '0' }}>
            <button className="navbar-brand" href="#" style={{ fontSize: '30px',background: 'none', border: 'none' }}><Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</Link></button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/dash-home" className="nav-link" style={{ fontSize: '20px' }}>Home</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    {currentUser && (
                        <li className="nav-item" style={{ marginTop: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ fontSize: '20px', color: 'blue' }}>Hello, {currentUser}</span>
                                <button className="nav-link" style={{ fontSize: '20px', color: 'red', marginLeft: '10px' ,background: 'none', border: 'none'}} type="button" onClick={handleLogout}>Logout</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </nav>);

}

export default AdminDashboardNavBar;