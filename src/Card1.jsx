import React from 'react'

const Card = (props) => {
    const {course,image,name}=props;
  return (
    <div>
       <div className="card shadow-lg" >
<img src={`/${image}`} className="card-img-top" alt="..." style={{height:"250px"}}/>
  <div className="card-body">
     <h5 className="card-title">{course}</h5>
    <p>By {name}</p>
  
  </div>
</div>
    </div>
  )
}

export default Card
