// src/LeftSidebar.js

import React from 'react';
import { Nav } from 'react-bootstrap';

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <Nav className="flex-column">
        <Nav.Link href="#" active>
          Dashboard
        </Nav.Link>
        <div className="d-flex">
        <i className="bi bi-book   text-light display-6 "></i>
        <Nav.Link href="#" className='text-light'>Courses</Nav.Link>
        </div>
        <hr />
       <div className=" d-flex">
       <i class="bi bi-building-check display-6 text-white"></i>
        <Nav.Link href="#" className='text-light'>Progress</Nav.Link>
       </div>
        <hr />

       <div className="d-flex">
       <i class="bi bi-file-earmark-text display-6 text-white "></i> 
       <Nav.Link href="#" className='text-light'>Assignments</Nav.Link>
       </div>
        <hr />
        <div className="d-flex">

      
        <i className="bi bi-check   text-light display-6 "></i>
        <Nav.Link href="#" className='text-light'>Messages</Nav.Link>
        </div>
        <hr />
        {/* Add more navigation links as needed */}
      </Nav>
    </aside>
  );
};

export default LeftSidebar;
