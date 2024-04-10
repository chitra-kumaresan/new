import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logout,isLoggedInUser } from '../services/AuthService';

const HeaderComponent = () => {
  const navigator= useNavigate();

  const isAuth=isLoggedInUser();
  const handleLogout=()=>{
    logout();
    navigator("/");
  }
  return (
  <div>
    <header>  
<nav class="navbar navbar-light bg-light">

<a class="navbar-brand" href="#"><h2>Employee Management Application</h2></a>
{!isAuth && (
<button type="button" onClick={()=>navigator("/reg")} className="btn btn-success btn-lg" >Sign in</button> )}

{!isAuth && (
<button type="button" onClick={()=>navigator("/login")} className="btn btn-success btn-lg" >Login</button> )}

{isAuth && (
<button type="button" className="btn btn-warning btn-lg" onClick={handleLogout} >Logout</button>)}

</nav>
</header> 
</div>
  )
}

export default HeaderComponent;