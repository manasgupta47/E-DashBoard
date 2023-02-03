import React from "react";
import {Link,useNavigate} from "react-router-dom"
const Nav=()=>{
  const navigate=useNavigate()
  const auth=localStorage.getItem('user')
  const deleteAuth=()=>{
    localStorage.clear()
    navigate('/SignUp')
  }
  return(
    <div>
      <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01123447/6113.png" alt="logo" className="logo"/>
      { auth ?
      <ul className="nav-ul">
        <li><Link to="/">Product</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/Update">Upadate Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={deleteAuth} to ="/login">Logout ({JSON.parse(auth).name})</Link> </li> 
        </ul>
:
   
   <ul className="nav-ul nav-right">

         <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        
      </ul>
}
    </div>
  )
}
export default Nav;