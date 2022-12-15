
import React, { useEffect, useState } from "react";
// import "../../"
// import image from './img.gif.gif'
import image2 from '../logout home/img3.gif'
import { imagesData } from '../../harsh reducers/action-creators'
import { SaveImage } from '../../harsh reducers/action-creators'
import { deletImages } from '../../harsh reducers/action-creators'
import { useDispatch, useSelector } from "react-redux";
const Documents = () => {
    const dispatch= useDispatch();    
    const imagesAllData=useSelector(state=>state?.amount?.imagesData)    
    const[mapImages,setMapImages]=useState([]); 
    const [dats, setDats] = useState([]);
    const[img,setImg]=useState('');
    const [dataSend ,setDataSend]=useState()
    const[updated,setUpdated]=useState([])





    
    const ShowImage = (id) => {
        console.log(id);
        imagesAllData.find((data,index)=>{
            if(id===index){
                debugger;
                setImg(data?.image)
            }
        })
    }





    const dataSending=()=>{
        
        
        dispatch(SaveImage(dataSend)) 
        setUpdated([...updated,dats])
        
        

    }
    const DeletNote = (id) => {
        console.log("dwvw");
         const imagesDataDeleting=imagesAllData?.filter((data, index) =>index === id)
         
        //  debugger;
         dispatch(deletImages(imagesDataDeleting?.[0]))
         // debugger;
         // dispatch(imagesData())
     }


    useEffect(()=>{
        
        const imagesDatacall=async()=>{
             dispatch(imagesData())
        }
       
        imagesDatacall()
        // setUpdated([...updated,dats])
    },[updated])




    useEffect(()=>{
        setMapImages(imagesAllData) 
        
    },[imagesAllData])





    return (
        <div >
            <h1 className="text-center mt-2 mb-5">Prescription</h1>
            <div className="container">
                
            <div className="row">
                <div className="input-box d-flex flex-column justify-content-center text-center align-items-center border col-md-6 offset-md-3 rounded-4" style={{backgroundColor:"#E9F3FE"}} >
                   <div className="mt-5">
                    <img src={image2} style={{width:"25rem",height:"16rem"}} />
                    </div> 
                    
                <div className="text-center">
                    <button type="button" onClick={dataSending}>Send Data</button>
               <input 
                type="file" style={{margin:"2rem"}}
                name="image"
                
                onChange={(event) => {
                  event.preventDefault();

                  let selectedImage=event.target.files[0];
                    // ----converting to binary ----//

                //   const formDataGenerator = (data) => {
                //     let formDataValue = new FormData(); 
                    // let keys = Object.keys(data);
                    // keys.map((key) => {
                    //     formDataValue.append(key, data[key]);
                    // });                         
                //     return formDataValue;
                // };


                // ------ converting to string -------//
                setDats('casdvdc')
                let formDataValue = new FormData();
                formDataValue.append('image',selectedImage)
                setDataSend(formDataValue)
                

                  
                   
                        
                    }}
                
                />
                </div>
                </div>
            </div>
        </div>
        
            <br />

            <div className="d-flex flex-wrap justify-content-between align-items-center p-5  ">

                {/* <br />  */}
                {mapImages?.map((harsh, index) => {
                    // console.log(harsh.image);
                    // debugger
                    return (
                        <div  className="d-flex flex-column m-3">

                            <img alt="not fount" width={"300px"} height={"250px"} className="border border-dark" src={`https://backend-production-e1c2.up.railway.app/${harsh?.image}`} onClick={() => ShowImage(index)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                            {/* <span>{selectedImage?.lastModifiedDate}</span> */}
                            
                            <button className="btn btn-sm btn-danger my-2"  type ="button" onClick={() => DeletNote(index)}>Delete</button>
                        </div>
                    )
                }
                )}
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           {img?.length===0?"no image to show":<img alt="not fount" width={"900px"} src={img} />}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Documents
