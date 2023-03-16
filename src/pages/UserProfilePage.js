import React from "react";
import '../App.css';
import Navigationbar from '../components/NavigationBar'
import ProfileInfoBox from "../components/ProfileInfoBox";


export const UserProfilePage = (props) => {

  return (

    <div>
      <Navigationbar />
      <ProfileInfoBox />
    </div>

  );


}
