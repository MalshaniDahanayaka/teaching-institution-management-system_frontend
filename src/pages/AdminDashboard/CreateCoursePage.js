import React from "react";
import AdminDashboardNavBar from "../../components/AdminDashboardNavBar";
import { CreateCourse } from "../../components/CreateCourse";

export const CreateCoursePage = () => {

    return (
        <div>
            <AdminDashboardNavBar />
            <CreateCourse />
            
        </div>
    );
}