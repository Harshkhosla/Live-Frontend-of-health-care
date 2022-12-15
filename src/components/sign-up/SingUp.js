import React, { useEffect, useState } from 'react'
import { signItUp } from '../../harsh reducers/action-creators'
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

const SingUp = () => {
  const isAthenticated =localStorage.getItem(`Authorization`)
  console.log(isAthenticated?.length);
  const navigate =useNavigate();
  const dispatch =useDispatch()
  const [signup,setSignUp]=useState({
    email:'',
    password:''
  })
  // console.log(signup);
  const signUpChange=(e)=>{
    const {name,value}=e.target
    setSignUp({...signup,[name]:value})
  }
  
  function signUpData(e){
  e.preventDefault();
  dispatch(signItUp(navigate,signup))
  
  }
  return (
    <div>
    <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{bordeRadius: "1rem"}}>
          
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" value={signup.email} name='email' onChange={signUpChange} />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg"  value={signup.password} name='password' onChange={signUpChange}  />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={signUpData}>Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SingUp
