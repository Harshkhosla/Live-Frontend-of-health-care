import React,{useState} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import "./Report.css"
const today = new Date()

const Report = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
	// for onchange event
	const [pdfFile, setPdfFile]=useState(null);
	const [pdfFileError, setPdfFileError]=useState('');
    const[date,setdate]=useState('')
    console.log(date);
    const [name,setname]=useState();
    const [datachange,setdatachange]=useState('')
	
  
	// for submit event
	const [viewPdf, setViewPdf]=useState(null);
	console.log(viewPdf);
  
	// onchange event
	const fileType=['application/pdf'];
	const handlePdfFileChange=(e)=>{
	  let selectedFile=e.target.files[0];
	  if(selectedFile){
		if(selectedFile&&fileType.includes(selectedFile.type)){
		  let reader = new FileReader();
			  reader.readAsDataURL(selectedFile);
			  reader.onloadend = (e) =>{
				setPdfFile(e.target.result);
				setPdfFileError('');
			  }
		}
		else{
		  setPdfFile(null);
		  setPdfFileError('Please select valid pdf file');
		}
	  }
	  else{
		console.log('select your file');
	  }
	}
  
	// form submit
	const handlePdfFileSubmit=(e)=>{
	  e.preventDefault();
      setdatachange(name)
      setdate(`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`)
	  if(pdfFile!==null){
		setViewPdf(pdfFile);
	  }
	  else{
		setViewPdf(null);
	  }
	}
    const harshdata=(e)=>{       
        setname(e.target.value)
    }
  return (
    <div className='container'>

    <br></br>
    
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
      <label htmlFor=""><small>DOCUMENT NAME</small></label>
      <input className='form-control my-3'
          required value={name} onChange={harshdata}/>
        <input type="file" className='form-control'
          required onChange={handlePdfFileChange}
        />
        
        {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}
        <br></br>
        <button type="submit" className='btn btn-success btn-lg'>
          UPLOAD
        </button>
      </form>
      <br></br>
      <h4>View PDF</h4>
      <h3>{!date?null:date}</h3>
      <h3>{datachange}</h3>
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf&&<>No pdf file selected</>}
      </div>
      {/* <div>dkcbwhjgevjvbwhveb</div> */}

    </div>
  )
}

export default Report


