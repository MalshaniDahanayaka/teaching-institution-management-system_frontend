import React from "react";

const FormValidation = ({firstName, lastName, username, email, password, userID}) => {

  let errors ={};

  if(!firstName){
    errors.firstName="First Name is required."
  }

  if(!lastName){
    errors.lastName="Last Name is required."
  }

  if(!username){
    errors.username="Username is required."
  }

  if(!email){
    errors.email="Email is required."
  }
  
  if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    errors.email="Email is invalid."
  }

  if(!password){
    errors.password="Password is required."
  }else if(password.length < 4){
    errors.password="Passsword must be at least 4 characters."
  }

  if(!userID){
    errors.userID="UserID is required."
  }

  return errors

}

export default FormValidation;