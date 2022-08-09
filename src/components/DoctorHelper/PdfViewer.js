import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import "./Profile.css"

import { Document, Page,pdfjs } from 'react-pdf';

const PdfViewer = () => {
    const [viewPdf, setViewPdf]=useState(null);
	console.log(viewPdf);
    const Searchdatapdf = useSelector(state => state?.amount?.pdfData[0])
	const defaultLayoutPluginInstance = defaultLayoutPlugin();


    useEffect(()=>{
        setViewPdf(Searchdatapdf.pdf)
    },[Searchdatapdf])
  return (
    <div>
       <div className='pdf-container'>

       <Document
        file={{}}
       
        ></Document>
        {/* {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <Viewer fileUrl={Searchdatapdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>} */}

      {/* if we dont have pdf or viewPdf state is null */}
      {/* {!viewPdf&&<>No pdf file selected</>} */}
      </div>
    </div>
  )
}

export default PdfViewer
