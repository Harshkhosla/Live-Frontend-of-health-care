import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from "../../harsh reducers/action-creators";
import { Gettingdata } from "../../harsh reducers/action-creators";

import { UpdatName } from "../../harsh reducers/action-creators";
import "./SignOut.css"
const SignOut = () => {
    // const Context = useContext(documentContext);
    // const{Account,UpdateName,accounts,Mysettings}=Context;
    const UserName=useSelector(state=>state?.amount?.UserAllInformation)
    console.log(UserName);
  
    const[details,setDetails]=useState([]);
    const[update,setUpdate]=useState('');
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [account,setAccount]=useState({
      email:'',
      password:'',
      newPassword:'',
      cPassword:''
    })
    const [updatename,setUpdateName]=useState({
      name:'',
      _id:''
    })
    // const [comingname,setComingName]=useState('')
    console.log(updatename);
  
    const onChange=(e)=>{
      const{name,value}=e.target;
      setAccount({...account,[name]:value})
      setUpdate({...account.fullnam,[name]:value})
    }
    const onChangee=(e)=>{
      const{name,value}=e.target;
      setUpdateName({...updatename,[name]:value})
  }
  
    const updateName = async () => {
      dispatch(UpdatName(updatename))
    };
  
    useEffect(() => {
      const datasave = async () => {
        dispatch(Gettingdata())
      }
      datasave();
    },[])
  
    useEffect(() => {
      setUpdateName(UserName)
    }, [UserName])
  
  
    const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   Account(account);
      // debugger;
    };
  
  
    function onLogout() {
      dispatch(LogOut(navigate));
    }
  return (
       <>
      <div className="container">
        <div className="row" style={{ marginTop: "1rem" }}>
          <div className="col-md-8 col-sm-12 offset-md-2 mb-3">
            <h1 className="text-center mb-2 header"> My Account</h1>
            <p className="text-center mb-4 headertext">
              Manage your user account, including your contact and sign in
              information.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-5 col-form-label py-3">
                  Email address
                </label>
                <div className="col-sm-7">
                  <input
                    type="email"
                    className="form-control py-3"
                    id="inputEmail3"
                    // placeholder={details?.data?.[0]?.[0]?.email}
                    // name="email"
                    value={"Harshkhosla9945@gmail.com"}
                    // // onChange={onChange}


                  />
                </div>
              </div>
              <div className="row mb-5">
                <label htmlFor="inputText" className="col-sm-5 col-form-label py-3">
                  Full Name
                </label>
                <div className="col-sm-7" style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="form-control py-3"                    
                    name="name"
                    value={updatename.name}
                    onChange={onChangee}

                  />
                  <span className="updateBtn"
                    onClick={updateName}>UPDATE</span>

                </div>


              </div>
              <div className="row mb-4 mt-4">
                <label htmlFor="inputText" className="col-sm-12 col-form-label py-3">
                  Change Your Password
                </label>
                <div className="d-flex flex-column">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control py-3"
                      id="form1Example2"
                      placeholder="Current Password"
                      name="password"
                      value={account.password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="d-flex">
                    <div className="col-sm-6 me-2 mt-3">
                      <input
                        type="text"
                        className="form-control py-3"
                        id="form1Example2"
                        name="newPassword"
                        placeholder="New Password"
                        value={account.newPassword}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-sm-6 mt-3">
                      <input
                        type="text"
                        className="form-control py-3 px-2 "
                        id="form1Example2"
                        placeholder="Repeat Password"
                        name="cPassword"
                        value={account.cPassword}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4 ">
                <div className="forgotpassword sign-out-btn">
                  <span
                    // to="/"
                    className="text-decoration-none rounded"
                    style={{ color: "#BE0202", padding: ".6rem", border: "1px solid #8E4141" }}
                    onClick={onLogout}
                  >
                    <FaSignOutAlt className="me-2" />
                    <small>
                      Sign out
                    </small>
                  </span>
                </div>
                <div className="submitbtn">
                  <a to="/">
                    <button
                      type="submit"
                      className="btn btn-primary primarybutton px-5 py-2 btn-sm"
                    >
                      Save
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default SignOut
