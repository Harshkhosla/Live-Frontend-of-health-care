import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {UserData} from '../../harsh reducers/action-creators'
import {UserInformationData} from '../../harsh reducers/action-creators'
import { Gettingdata } from "../../harsh reducers/action-creators";
// import documentContext from '../context/document/documentContext';
import './Settings.css'

function Setting() {
    const navigate = useNavigate
    
    const UserName=useSelector(state=>state?.amount?.UserAllInformation)
    const UserDataInfo=useSelector(state=>state?.amount?.UserData[0])
    console.log(UserDataInfo);
    const dispatch=useDispatch()
    const [submit, setSubmit] = useState([]);
    console.log(submit);

    const [fields, setfields] = useState({
        _id:'',
        name:'',
        organisationDesc: '',
        organisationName: '',
        adharNo: '',
        email: '',
        PhoneNo: '',
        webSite: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        taxId: "",
        baseCurrency: "",
        country: "",
        postalCode: ''
    })
    const [input, setInput] = useState();
    console.log(fields);


const savedData =()=>{
    dispatch(UserData(fields))
}
    useEffect(() => {
        const datasave = async () => {
            dispatch(UserInformationData()) 
        }
        datasave();
    }, [])
    useEffect(()=>{
        setSubmit(UserDataInfo)
    },[UserDataInfo])
//   console.log(input,"jyvhgcvh");

    const [formError, setFormError] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault(fields);
        // Settings(fields);
    }
    useEffect(() => {
        const datasave = async () => {
          dispatch(Gettingdata())
        }
        datasave();
      },[])
      useEffect(() => {
        setfields(UserName)
      }, [UserName])
    const [state, setState] = useState()
    const onChange = (setmodal) => {
        const value = setmodal.target.value;
        const name = setmodal.target.name;
        setfields({ ...fields,...input, [name]: value })
        setInput({...input, [name]: value})
    }
    // console.log(fields);
    return (
        <>
            <div className="container settings" >
                <div className="row" style={{ marginTop: "1rem" }}>
                    <div className="col-sm-12 mb-3">
                        <h1 className="text-center mb-2"> Profile</h1>
                        {/* <p className='text-center mb-4 para '>Edit your organization's settings and public profile.</p> */}
                        <h6 className='mb-2 pb-0'>
                            Contact Information
                        </h6>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6 ">
                                <label htmlFor="validationCustom01" className='mb-0'>NAME</label>
                                <input type="text" className="form-control py-3" id="validationCustom01"  name="name" placeholder="Harsh" onChange={onChange} value={fields.name}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="text" className="form-label mb-0">AADHAR NUMBER</label>
                                <input type="number" className="form-control py-3" id="inputNumber" placeholder='624930606283549' onChange={onChange} name="adharNo" value={fields.adharNo} />
                            </div>
                            <div className="col-md-6  mt-1">
                                <label htmlFor="inputEmail4" className="form-label mb-0">EMAIL</label>
                                <input type="email" className="form-control py-3" id="inputEmail4" placeholder='Harshkhosla9945@gmail.com' onChange={onChange} name="email" value={fields.email} />
                            </div>
                            <div className="col-md-6 mt-1">
                                <label htmlFor="text" className="form-label mb-0 ">PHONE NUMBER</label>
                                <input type="text" className="form-control py-3" id="inputNumber" placeholder='0141 302019' onChange={onChange} name="PhoneNo" value={fields.PhoneNo} />
                            </div>
                            <div className="col-md-6 mt-1">
                                <label htmlFor="text" className="form-label mb-0 ">GENDER</label>
                                <input type="text" className="form-control py-3" id="inputName" placeholder='Gender' onChange={onChange}  value ={"Male"}name="webSite" />
                            </div>
                            {/* <label htmlFor="text" className="form-label mb-0">COUNTRY</label>
                                <input id="inputState" className="form-select py-3" name='phoneNumber'  onChange={onChange}>
                                    {/* <option defaultValue={fields.country}>INDIA</option>
                                    <option defaultValue={fields.country}>sd</option>
                                    <option defaultValue={fields.country}>ds</option>
                                    <option defaultValue={fields.country}>asd</option> */}
                                    {/* <option>US</option>
                                    <option>UK</option>
                                    <option>CHINA</option>
                                    <option>RUSSIA</option>
                                    <option>JAPAN</option>
                                </input> */} 
                            <div className="col-md-6 mt-1">
                                <label htmlFor="text" className="form-label mb-0">DATE OF BIRTH</label>
                                <input type="text" className="form-control py-3" id="inputNumber" placeholder='20/04/2002'  value={'20/04/2002'} onChange={onChange} />
                            </div>
                            <div className="col-12 mt-1">
                                <label htmlFor="inputAddress" className="form-label mb-0">BLOOD GROUP</label>
                                <input type="text" className="form-control py-3" id="inputAddress" placeholder="A+" value={"A+"} onChange={onChange} name="organisationDesc" />

                                {/* <p><small>Appears on your profile below your name</small></p> */}
                                <p><small>{formError.orgDesc}</small></p>
                            </div>
                            <div className='my-2'>
                                <hr />
                            </div>
                            <h6 className='mb-2 pb-0'>
                                Address
                            </h6>
                            <div className="col-md-6 ">
                                <label htmlFor="inputAddress" className='mb-0'>ADDRESS LINE 1</label>
                                <input type="text" className="form-control py-3" id="inputAddress" placeholder="560-561 Symphony Pride, Kings Rd" onChange={onChange} name="addressLine1" value={fields.addressLine1} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputAddress" className='mb-0'>ADDRESS LINE 2</label>
                                <input type="text" className="form-control py-3" id="inputNumber" placeholder='Nirman Nagar' onChange={onChange} name="addressLine2" value={fields.addressLine2}/>
                            </div>
                            <div className="col-md-6  mt-1">
                                <label htmlFor="inputCity" className="form-label mb-0">City</label>
                                <input type="text" className="form-control py-3" id="inputCity" placeholder={input?.city?.length===0?'Eg:-Jaipur':input?.city} onChange={onChange} name="city" value={fields.city} />

                            </div>
                            <div className="col-md-6 mt-1">
                                <label htmlFor="inputState" className="form-label mb-0 ">STATE</label>
                                <input type="text" className="form-control py-3" id="inputState" placeholder={input?.state?.length===0?'Eg:-RAJASTHAN':input?.state} onChange={onChange} name="state" value={fields.state}/>
                            </div>
                            <div className="col-md-6 mt-1">
                                <label htmlFor="inputZipCode" className="form-label mb-0 ">ZIP CODE</label>
                                <input type="text" className="form-control py-3" id="inputZipCode" placeholder={input?.postalCode?.length===0?'Eg:-302019':input?.postalCode} onChange={onChange} name="postalCode" value={input?.postalCode?.length===0?fields.postalCode:input?.postalCode} />
                            </div>
                            <div className="col-md-6 mt-1">
                                <label htmlFor="text" className="form-label mb-0">COUNTRY</label>
                                <input id="inputState" className="form-select py-3" name='country' value={input?.data?.[0]?.[0].country} onChange={onChange}>
                                    {/* <option defaultValue={fields.country}>INDIA</option>
                                    <option defaultValue={fields.country}>sd</option>
                                    <option defaultValue={fields.country}>ds</option>
                                    <option defaultValue={fields.country}>asd</option> */}
                                    {/* <option>US</option>
                                    <option>UK</option>
                                    <option>CHINA</option>
                                    <option>RUSSIA</option>
                                    <option>JAPAN</option> */}
                                </input>
                            </div>
                            <div className='mt-4'>
                                {/* <hr /> */}
                            </div>
                            {/* <h6 className='mb-2 pb-0'>
                                Business Detail
                            </h6>
                            <div className="col-md-6 mt-1">
                                <label htmlFor="inputZipCode" className="form-label mb-0 ">TAX ID / VAT NUMBER</label>
                                <input type="text" className="form-control py-3" id="inputZipCode" placeholder='eg. GB 123 4567 89' name='taxId' value={fields.taxId} onChange={onChange} />
                            </div> */}
                            {/* <div className="col-md-6 mt-1">
                                <label htmlFor="text" className="form-label mb-0">BASE CURRENCY</label>
                                <input id="inputState" className="form-select py-3" name='baseCurrency' value={input?.data?.[0]?.[0].currency} onChange={onChange}>
                                    <option defaultValue={fields.baseCurrency}>Indian Rupee</option>
                                    <option>US Dollar</option>
                                    <option>Pound sterling</option>
                                    <option>Chinese Yuan</option>
                                    <option>Russian Ruble</option>
                                    <option>Japanese Yen</option>
                                </input>
                            </div> */}
                            <div className='d-flex flex-row-reverse'>
                                <button className="btn btn-primary mt-4 col-sm-2 " onClick={savedData} type="submit">Save</button>

                            </div>
                        </form>
                        <div className='text-end'>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content rounded-4">
                                        <div className="heading text-center my-4">
                                            <h6>
                                                WEB PLANET SOFT TECHNOLOGIES
                                            </h6>
                                            <h6 className='modal-company-id'>
                                                {fields.panNum}
                                            </h6>
                                        </div>
                                        <div className="modal-body border d-flex flex-column text-start">
                                        <label htmlFor=""><small>DETAILS</small></label>
                                            <div className='d-flex flex-column'>
                                                    <span>
                                                    {fields.organisationName}
                                                    </span>
                                                    <span>
                                                    {fields.panNumber}
                                                    </span>
                                                    <span>
                                                    {fields.supEmail}
                                                    </span>
                                                    <span>
                                                    {fields.phoneNumber}
                                                    </span>
                                                </div>
                                            <div className="org-description">
                                                <label htmlFor=""><small>CONTACT INFORMATION</small></label>
                                                <div className='d-flex flex-column'>
                                                    <span>
                                                        {input?.email}
                                                    </span>
                                                    <span>
                                                        {fields.organisationDesc}
                                                    </span>
                                                    <span>
                                                        {fields.webSite}
                                                    </span>
                                                </div>

                                            </div>
                                            <div className="org-description">
                                                <label htmlFor=""><small>ADDRESS DETAILS</small></label>
                                                <div className='d-flex flex-column'>
                                                    <span>
                                                        {fields.addlane}
                                                    </span>
                                                    <span>
                                                        {input?.addRes}
                                                    </span>
                                                    <span>
                                                        {input?.city} {input?.postalCode}
                                                    </span><span>
                                                        {input?.state}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="Modal-close-btn" data-bs-dismiss="modal">Back to Home</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
