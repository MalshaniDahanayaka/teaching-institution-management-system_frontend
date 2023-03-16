import React from "react";
import { CourseDetails } from "../components/CourseDetails";
import NavigationBar from "../components/NavigationBar";

export const CourseDetailsPage = () => {
    return(
        <div>
            <NavigationBar />
            <CourseDetails />
        </div>
    );
}