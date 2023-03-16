import React from "react";
import { Link } from 'react-router-dom';
import '../Admin.css';
import  {TotalCount, TotalCourses } from "./Stats";

const AdminDashHome = () => {
    return (

        <div className="Admin" style={{ marginTop: "15vw" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-blue">
                            <div className="inner">
                                <h3> <TotalCount/> </h3>
                                <h3> All Users </h3>
                            </div>
                            <div className="icon">
                                <i className="fa fa-users" aria-hidden="true"></i>
                            </div>
                            <Link to='/dashboard' className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-green">
                            <div className="inner">
                                <h3> <TotalCourses /> </h3>
                                <h3> Courses </h3>
                            </div>
                            <div className="icon">
                                <i className="fa fa-book" aria-hidden="true"></i>
                            </div>
                            <Link to='/courses' className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-orange">
                            <div className="inner">
                                <h3> Create </h3>
                                <h3> New Course </h3>
                            </div>
                            <div className="icon">
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </div>
                            <Link to='/create-course' className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card-box bg-red">
                            <div className="inner">
                                <h3> Count </h3>
                                <h3> Admin Staff </h3>
                            </div>
                            <div className="icon">
                                <i className="fa fa-user-plus"></i>
                            </div>
                            <button href="#" style={{ background: 'none', border: 'none' }} className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default AdminDashHome;