import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notes from './Notes';
import { notesData } from '../../harsh reducers/action-creators';
import { DoctorData } from '../../harsh reducers/action-creators';
import {editData} from '../../harsh reducers/action-creators'
import { deletData } from '../../harsh reducers/action-creators'
import dateFormat from 'dateformat';
import "./doctor.css"
const today = new Date();

const Doctor = () => {
  const dispatch =useDispatch()
  const notdata=useSelector(state=>state.amount.notesData)
  const deletedData=useSelector(state=>state.amount.deletedData?.Sucess)
  console.log(notdata);
  // console.log(notdata, "harshs");
  // dateFormat()
    const [discription,setDiscription]=useState({
        title:'',
        discription:''
    });
    const [noteData,setNoteData]=useState([])
    // console.log(noteData);
    const[iid,setIid]=useState('')
    const [modal,setModal]=useState();
    // console.log(modal);
    const [data,setData]=useState([])
    // console.log(data);
    const onchange=(e)=>{
      const{name,value}=e.target;
        setDiscription({...discription,[name]: value})
    }
    const clicked=()=>{
      setData([...data,discription])
      dispatch(DoctorData(discription))
    }    
    useEffect(()=>{
      setNoteData(notdata)
    },[notdata])


    const delet=(id)=>{
      const newDataa=noteData?.filter((data,index)=>index===id)   
      dispatch(deletData(newDataa?.[0]))
      dispatch(notesData())
      if( deletedData===true){
        // debugger;
      //  let singledata= noteData.filter((data, index) => index!==id)
      //  setNoteData(singledata)
      //   console.log(noteData);
      }      
    }    
    const onchangee=(e)=>{ 
      // debugger;
      const{name,value}=e.target;

      setModal({...modal,[name]: value})
    }
    useEffect(()=>{
      const  dataCall=async ()=>{
      dispatch(notesData())
      }
      dataCall();
     },[data])
    const edit=(id)=>{
      setIid(id)
      const newData=noteData?.filter((data,index)=>index===id)
      // console.log(newData);
      setModal(newData?.[0]);
          }
    const saveData=()=>{
      dispatch(editData(modal))
      setData(notdata.map((data,index)=>{
        if (index===iid){
          return modal;
        }
        else{
          return data
        }
      }))
    }

//  console.log(noteData?.schema,"dvwegv");
  return (
  <>
  <div className="container">
    <div className="formDiv d-flex flex-column col-md-8 offset-md-2 mt-4">
     <div className='text-center'>
      <h5 className='style' >
        <b>
      Report key: {noteData?.[0]?.schema}
        </b>
        </h5> 
      </div>
      <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Topic</label>
            <input type="text" class="form-control" id="exampleInputEmail1" name='title' value={discription.title} onChange={onchange}/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Detail</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" name='discription'value={discription.discription}  onChange={onchange} rows="3"></textarea>
          </div>
          <button type="button" class="btn col-md-4 offset-md-4 rounded-2 text-white" style={{backgroundColor:"#10847E"}} onClick={clicked}>Submit</button>
          
      </form>
    </div>
<div className="container d-flex flex-wrap align-items-center p-5 ">
    {noteData?.map((harsh,index)=>{
      // console.log(harsh);
      // const date=harsh?.Date("2019-04-30T08:59:00.000Z", "mmmm dS, yyyy")
      return(
        <div className="col-md-4 d-flex flex-column my-2">
        <div class="card" style={{backgroundColor:"#F1FAFE", width:"350px", height:"200px"}}>

            <div class="card-body">
                <h5 class="card-title">{harsh?.title}</h5>
                <p class="card-text">{harsh?.discription}</p>
                {/* <p class="card-text">{harsh?._id}</p> */}
                <p class="card-text">{harsh?.Date}</p>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={()=>edit(index)}>Edit</button>
                <button class="btn btn-primary" onClick={()=>delet(index)}>delete</button>
                <div className='d-flex justify-content-end'>
                  {`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                  </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Topic</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='title' value={modal?.title} onChange={onchangee}/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name='discription' value={modal?.discription}  onChange={onchangee} rows="3"></textarea>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>saveData(index)}>Save changes</button>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
        
    </div>     
      )
    })}

  </div>
  </div>
 
</>
    )
}

export default Doctor
