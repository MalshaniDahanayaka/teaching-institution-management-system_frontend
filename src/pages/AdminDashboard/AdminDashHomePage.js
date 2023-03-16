import React from "react";
import AdminDashboardNavBar from "../../components/AdminDashboardNavBar";
import AdminDashHome from "../../components/AdminDashHome";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

const AdminDashHomePage = () => {

    const userRole = localStorage.getItem('userRole');
    const history = useHistory();
  
  
    useEffect(() => {
      if (userRole !== "Admin") {
          history.push("/error");
      }
  }, [history,userRole]);

    return (
        <div>
            <AdminDashboardNavBar />
            <AdminDashHome />
        </div>
    );
}

export default AdminDashHomePage;