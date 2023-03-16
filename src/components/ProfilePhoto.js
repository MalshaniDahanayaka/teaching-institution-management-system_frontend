import React from 'react';

const ProfilePhoto = ({ firstName, lastName }) => {
  const initials = `${firstName[0]}${lastName[0]}`;
  return (
    <div style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: '#f2f2f2',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '50px',
      fontWeight: 'bold',
      color: '#333',
      marginLeft: '4.0vw',
      marginTop: '3.3vw'
    }}>
      {initials}
    </div>
  );
};

export default ProfilePhoto;
