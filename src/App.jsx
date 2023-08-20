import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Homepage from './HomePage'
import Navbar from './Navbar'
import "./App.css"
import AboutUsPage from './About'
import ContactUs from './Contact'
import Login from './Login'
import Footer from '../Footer'
import SpecificCard from './SCard'
import Notification from './Notification'
import SignUpPage from './Signup'
import UserProfile from './ProfieUser'
import UserDashboard from './user/Userdashboard'

const App = () => {


  const [notification, setNotification] = useState('Welcome to the LMS!');

  useEffect(() => {
    
  
      
      
      
      setTimeout(() => {
        setNotification(null)
      }, 5000);
      
    
      
    

  }, []);

  const [data, setdata] = useState({
color:"dark",
bg:"light"
});


const handle=()=>{
if(data.color==='dark'){
setdata({
  color:"light",
  bg:"dark"
})
document.body.style.color="light";
document.body.style.backgroundColor='#222';
}

else{
  setdata({
    color:"dark",
    bg:"light"
  })
  document.body.style.color="black";
document.body.style.backgroundColor='white';
}
}








  return (
    <div>
<Router>
<Navbar color={data.color} bg={data.bg} handle={handle}/>
 <Notification notification={notification} onClose={()=>setNotification(null)} />
<Routes>
<Route  exact path='/' element={<Homepage color={data.color} bg={data.bg}/>}/>
<Route  exact path='/about' element={<AboutUsPage color={data.color} bg={data.bg}/>}/>
<Route  exact path='/contact' element={<ContactUs  color={data.color} bg={data.bg}/>}/>
<Route  exact path='/login' element={<Login color={data.color} bg={data.bg}/>}/>
<Route  exact path='/signup' element={<SignUpPage/>}/>
<Route  exact path='/course/:id' element={<SpecificCard/>}/>
<Route  exact path='/profile' element={<UserProfile/>}/>
<Route  exact path='/user-dashbaord' element={<UserDashboard/>}/>


</Routes>
<Footer/>

</Router>

      
    </div>
  )
}

export default App
