import React from 'react'
import { useParams } from 'react-router-dom'
import Card1 from './Card1'

const SpecificCard = () => {
    const data = [
        {
          id: 1,
          name: 'Jane Smith',
          course: 'React',
          text: 'React Js is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. ',
          image:'./download.png',
          rating:'4/5'
        },
        {
          id: 2,
          name: 'John Doe',
          course: 'Javascript',
          text: " JS is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. ",
          image:"./down.png",
          rating:'4/5'
        },
        {
          id: 3,
          name: 'Sarah Johnson',
          course: 'Node',
          text: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment.',
          image:'./node.png',
          rating:'4/5'
        },
        {
          id: 4,
          name: 'Michael Brown',
          course: 'Next',
          text: 'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.',
          image:"./next.jfif",
          rating:'4/5'
        },]

    const {id}=useParams();
   
const filterCourse= data.filter((data)=>data.course==id)
  
return (
    <div>
     <div className="container my-5  ">
        <div className="row">
            <div className="col-md-12">
            <div className="card mb-3" >
    
   
      {filterCourse.map((filterCourse)=><>

  <div className="row g-0" >
        <div className="col-md-4 " key={filterCourse.id} >

      <img src={`/${filterCourse.image}`} className="img-fluid rounded-start h-100 w-100" alt=""/>
    </div>
    <div className="col-md-8 ">
    <div className="card-body m-md-5">
        <h5 className="card-title" style={{color:"#fa9191"}}>Course {filterCourse.course}</h5> 
        <p className="card-text">{filterCourse.text}</p>
        <p className="card-text">Course By  <span className=' fw-bold'>{filterCourse.name}</span></p>
        <p className="card-text">Rating <span className='fw-bold'>: {filterCourse.rating}</span></p>
      </div>
    </div>
  </div>
      </>
      
      )}

</div>
            </div>
        </div>
        <h3 className=' my-3' style={{color:"#fa9191"}}>Related Video</h3>
        <ul className=' list-group mb-5'>
          <li className=' list-group-item bg-primary  text-light fw-bold shadow-sm'>Course Video</li>
          <li className=' list-group-item '>Introducation <button className=' btn btn-dark float-end'>play &gt; </button></li>
          <li className=' list-group-item '>Setup React app <button className=' btn btn-dark float-end'>play &gt;</button></li>
          <li className=' list-group-item '>Function base Components <button className=' btn btn-dark float-end'>play &gt;</button></li>
        </ul>

        <div className="row">
     <h3 style={{color:"#fa9191"}}>Related Courses:</h3>
         {data.map((data)=><>
        
        <div className="col-md-3 my-3 mb-md-5">
         <Card1 course={data.course} image={data.image} name={data.name}  key={data.id}/>
          </div>
         </>
         )}  
     </div>
        
     </div>
    
    </div>
  )
}

export default SpecificCard
