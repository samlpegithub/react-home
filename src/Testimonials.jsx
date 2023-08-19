import React from 'react';

const Testimonial = ({testimonial}) => {

  
 
  return(
  <div className="testimonial my-3 ">
   

    <div className="card p-3 border border-1  pt-4" style={{height:"250px"}}>
      <p className="card-text">{testimonial.text}</p>
      <p className="card-title text-center" style={{color:'#fa9191'}}>- {testimonial.name}</p>
      <p className="card-subtitle  text-center">{testimonial.course}</p>
    </div>
   
  </div>
);
}
export default Testimonial;
  