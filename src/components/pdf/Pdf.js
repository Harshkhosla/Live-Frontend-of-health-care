// import React from 'react'
// import {saveAS} from 'file-saver'
// import axios from 'axios'
// import { useState } from 'react'

// const Pdf = () => {
//     const [signup,setSignUp]=useState({
//         email:'',
//         password:''
//       })
      
//       const signUpChange=(e)=>{
//         const {name,value}=e.target
//         setSignUp({...signup,[name]:value})
//       }
//       const onSubmit=()=>{
//         axios.post('api/notes/create-pdf',signup)
//         .then(() => axios.get('api/notes/fetch-pdf', { responseType: 'blob' }))
//       .then((res) => {
//         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

//         saveAS(pdfBlob, 'newPdf.pdf');
//       })
//       }
//   return (
//     <div>
//        <input type="email" id="typeEmailX" class="form-control form-control-lg" value={signup.email} name='email' onChange={signUpChange} />
//        <input type="password" id="typePasswordX" class="form-control form-control-lg"  value={signup.password} name='password' onChange={signUpChange}  />
//        <button onClick={onSubmit}>hellosjbch</button>
//     </div>
//   )
// }

// export default Pdf


import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

// import './App.css';

class Pdf extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  }
  

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })
 
  createAndDownloadPdf = () => {
    axios.post('api/notes/create-pdf', this.state)
      .then(() => axios.get('api/notes/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
        <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
        <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default Pdf;
