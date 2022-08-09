import React, { useState } from "react";
import { FcFolder,FcAddImage } from 'react-icons/fc';
import { Fa500Px } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
         <div class="d-flex justify-content-evenly">
         <Link to="/documnets" ><FcFolder fontSize={"250px"}/></Link>
         <Link to="/image"><FcAddImage fontSize={"200px"}/></Link>
         <Link to="/edits"><Fa500Px fontSize={"180px"}/></Link>
   
         </div>
      
  </div>
  )
}

export default Home
