import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'


const UserProfile = () => {

let navigate=    useNavigate();
    const [user, setuser] = useState();
    useEffect(() => {
     
if(!localStorage.getItem('token')){
navigate('/login')

}
else{





         fetch('https://backend-rust-chi.vercel.app/api/auth/getuser', {
            method: "GET",
            
            headers: {
              "Content-Type": "application/json",
              "token":localStorage.getItem('token')
             },
           
          }).then((response)=>response.json())
          .then((data)=>setuser(data.user))

        }

    }, []);
    


  return (
    <div className="container mt-5 vh-100">
      <div className="row  mt-5">
      <h2 className=' text-center' style={{color:"#fa9191"}}>User Information</h2>
      {user &&  user.map((user)=><><div className="col-md-3 mt-5  text-center ms-md-5" key={user.id}>
     
          <img src={'./malik.jpeg'} alt={user.name} className="img-fluid rounded-circle" style={{width:"100px"}} />
        </div>
    <div className="col-md-8 mt-5 " >
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>A passionate developer who loves coding and creating awesome applications.</p>
    </div></>)}


      </div>
    </div>
  );
};

export default UserProfile;
