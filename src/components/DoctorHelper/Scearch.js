import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SearchDatas } from '../../harsh reducers/action-creators'
import { useNavigate } from "react-router-dom";
import { AiOutlineFilePdf } from 'react-icons/ai';

import { Link ,useLocation} from 'react-router-dom'
import { PdfDataGet } from '../../harsh reducers/action-creators'// Import the styles
import PdfViewer from './PdfViewer';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// // Worker
// import { Worker } from '@react-pdf-viewer/core'; // install this library
// import "./Profile.css"

const Scearch = () => {
  const dispatch = useDispatch();
  const Searchdatanotes = useSelector(state => state?.amount?.searchData?.[0])
  const SearchdataImages = useSelector(state => state?.amount?.searchData?.[1])
  
  const Searchdatapdf = useSelector(state => state?.amount?.pdfData)
  // const imagesAllData=useSelector(state=>state.amount.imagesData) 
  console.log(Searchdatapdf);
  console.log(Searchdatanotes);
  const [signup, setSignUp] = useState({
    schema: ''
  })


  console.log(signup);
  const signUpChange = (e) => {
    const { name, value } = e.target
    setSignUp({ ...signup, [name]: value })
  }
  const searchdata = () => {
    // debugger;
    dispatch(SearchDatas(signup))
    dispatch(PdfDataGet(signup))
  }
  return (
    <div>
      <div className="container">

        <div class="form-outline form-white mb-4">
          <h1 style={{fontSize:"40px"}}>Enter your report key here </h1>
          <input type="email" id="typeEmailX" class="form-control form-control-lg" value={signup.schema} name='schema' onChange={signUpChange} />
          <button type="button" class="btn btn-secondary" onClick={searchdata}>Secondary</button>
        </div>
      </div>
      <div className="container d-flex flex-wrap align-items-center p-5">
        {Searchdatanotes?.map((harsh, index) => {
          console.log(harsh);
          return (
            <div className="col-md-4 d-flex flex-column my-2">
              <div class="card " style={{ backgroundColor: "#F1FAFE", width: "350px", height: "200px" }}>

                <div class="card-body">
                  <h5 class="card-title">{harsh?.title}</h5>
                  <p class="card-text">{harsh?.discription}</p>


                </div>
              </div>

            </div>
          )
        })}

      {SearchdataImages?.map((data, index) => {
        console.log(data);
        return(
        <div className="d-flex flex-column m-3">

          <img alt="not fount" width={"300px"} height={"250px"} className="border border-dark" src={`https://backend-production-e1c2.up.railway.app/${data?.image}`} data-bs-toggle="modal" data-bs-target="#exampleModal" />
         

          {/* <button className="btn btn-sm btn-danger my-2"  type ="button" onClick={() => DeletNote(index)}>Delete</button> */}
        </div>)
      })}


{Searchdatapdf?.map((data, index) => {
        console.log(data);
        return(
        <div className="d-flex flex-column m-3">

          {/* <img alt="not fount" width={"300px"} height={"250px"} className="border border-dark" fileUrl={data.pdf} data-bs-toggle="modal" data-bs-target="#exampleModal" /> */}
{/*          
          {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <Viewer fileUrl={data}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>} */}
      
    <Link to='/pdfgenrator'>
     < AiOutlineFilePdf size={250}  />
     {/* <PdfViewer data={data}/> */}
    </Link>
          {/* <button className="btn btn-sm btn-danger my-2"  type ="button" onClick={() => DeletNote(index)}>Delete</button> */}
        </div>)
      })}
      </div>


    </div>
  )
}

export default Scearch
