import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {course,image,name}=props;

  return (
    <div>
       <div className="card shadow-lg" >
  <Link to={`/course/${course}`}><img src={image} className="card-img-top" alt="..." style={{height:"250px"}}/></Link>
  <div className="card-body">
    <Link  to={`course/${course}`} className=' text-decoration-none text-dark'><h5 className="card-title">{course}</h5></Link>
    <p>By {name}</p>
  
  </div>
</div>
    </div>
  )
}

export default Card
