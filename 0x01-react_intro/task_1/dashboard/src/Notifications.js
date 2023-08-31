import React from 'react';
import './Notifications.css';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };
  return (
   
      <div className='Notifications' style={{ position: 'relative' }}>
        <p>Here is the list of notifications</p>
      </div>
    
  );
}

export default Notifications;
