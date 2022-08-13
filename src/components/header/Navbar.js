import {React,useEffect} from 'react'
import { Fa500Px } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link ,useLocation} from 'react-router-dom'
import "./Navbar.css"
import image from './img.jpeg'

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  const isAuthenticate = localStorage.getItem(`Authorization`);
 
  console.log(isAuthenticate,"kuhyjk");
  
  const logOut=(
    <nav class={`navbar navbar-expand-lg  navbar-light `} style={location.pathname === "/" ? {backgroundColor:"white"} : {backgroundColor:"#26d5cd"}}>
  <div class="container-fluid">
    <a class="navbar-brand"><Fa500Px fontSize={"40px"}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link  className={`btn m-2 ms-0 ${location.pathname === "/" ? "active" : ""
                  }`} aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link" to="/profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"to="/settings">Settings</Link>
        </li>         */}
        <li class="nav-item">
            <Link  className={`btn m-2 ms-0 ${location.pathname === "/documnets" ? "active" : ""
                  }`}to="/documnets">Report</Link>
          </li> 
          
      </ul>
      <ul class="navbar-nav me-0 mb-2 mb-lg-0">
      <li class="nav-item">
          <Link  className={`btn m-2 ms-0 ${location.pathname === "/SingUP" ? "active" : ""
                  }`}to="/SingUP">Login</Link>
        </li> 
        <li class="nav-item">
          <Link  className={`btn m-2 ms-0 ${location.pathname === "/creataccount" ? "active" : ""
                  }`} to="/creataccount">Create account</Link>
        </li>
        </ul>
      
    </div>
  </div>
</nav>

  )

  const loGin =(
    <nav class="navbar navbar-expand-lg Navbar navbar-dark" >
    <div class="container-fluid">
      <a class="navbar-brand" ><Fa500Px fontSize={"40px"}/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link className={`btn m-2 ms-0 ${location.pathname === "/home" ? "active" : ""
                  }`} aria-current="page" to="/home">Prescription</Link>
          </li>
          <li class="nav-item">
            <Link className={`btn m-2 ms-0 ${location.pathname === "/profile" ? "active" : ""
                  }`} to="/profile">Document</Link>
          </li>
          
          {/* <li class="nav-item">
            <Link class="nav-link"to="/edits">Remark</Link>
          </li>   */}
          <li class="nav-item">
            <Link className={`btn m-2 ms-0 ${location.pathname === "/edits" ? "active" : ""
                  }`}to="/edits">Insights</Link>
          </li> 
          <li class="nav-item">
            <Link className={`btn m-2 ms-0 ${location.pathname === "/report" ? "active" : ""
                  }`}to="/report">Report</Link>
          </li> 
          <li class="nav-item">
            <Link className={`btn m-2 ms-0 ${location.pathname === "/settings" ? "active" : ""
                  }`}to="/settings">Profile</Link>
          </li>      
            
          {/* <li class="nav-item">
            <Link class="nav-link"to="/documnets">Report</Link>
          </li>  */}
          
        </ul>
        <ul class="navbar-nav me-0 mb-2 mb-lg-0">
      <li class="nav-item">
          <Link className={`btn m-2 ms-0 ${location.pathname === "/SignOut" ? "active" : ""
                  }`} to="/SignOut"><RiAccountCircleFill fontSize={"40px"}/> Settings</Link>
        </li> 
        </ul>
        
        
      </div>
    </div>
  </nav>

  )
  return (
    <div>
        
      {isAuthenticate?loGin:logOut}
    </div>
  )
}

export default Navbar
