import React from 'react';
 // Add custom CSS for styling notifications

const Notification = ({ notification,onClose}) => {
   
  return (
   <div className='notification-header'>

   {notification&& <div className="notification my-md-5 my-sm-5 " style={{width:"300px",marginTop:'50px'}}>
      <span className="message ">{notification}</span>
      <button className="close-btn" onClick={onClose}>
        &#x2715;
      </button>
    </div>}
   </div>
  );
};

export default Notification;
