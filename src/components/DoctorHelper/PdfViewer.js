import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import PDFViewer from 'pdf-viewer-reactjs'

const PdfViewer = (props) => {
    const [viewPdf, setViewPdf]=useState(null);
	console.log(viewPdf);
    const Searchdatapdf = useSelector(state => state?.amount?.pdfData[0])
    useEffect(()=>{
        setViewPdf(Searchdatapdf.pdf)
    },[Searchdatapdf])
  return (
    <div>
       
      {/* <PDFViewer
            document={{
                url: 'https://nameless-bastion-00469.herokuapp.com/datas/Harsh_Khosla_Hired_Certificate.pdf',
            }}/> */}
    </div>
  )
}

export default PdfViewer
