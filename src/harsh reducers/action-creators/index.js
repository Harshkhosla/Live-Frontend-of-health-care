
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Navigate} from "react-router-dom";

export const loginuser =(input)=>{
    // debugger;
    return (dispatch)=>{
        const{name, email,password}=input;
        fetch("http://localhost:5000/api/auth/createuser", {
         method: "POST",
         headers: {
           "content-type": "application/json"
         },
   
         body: JSON.stringify(
           {
             name, email,password
           })
       })
   
         .then(response => response.json())
         .then(response => {
   
           if (!response?.success) {
             throw Error(response.error)
   
           }
          //  console.log(response);
          //  console.log(response);
           toast.success(response?.message)
           // setMessage(response);
          //  navigate("/sign-in")
   
         })
         .catch((error) => {
          //  console.log(error);
           toast.error(error?.message);
   
         });

    }
}
const logindata=(amount)=>{
    return {
        type:"logindata",
        payload:amount
    }
}
export const signItUp=(navigate,field)=>{
  
    
    return  (dispatch)=>{
        const { email, password} = field;
        

         fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((response) => response.json())
          
          
          .then((response) => {
            toast.success(response?.toast)
            console.log(response,"casdvas")
            
    
            if (!response?.success) {
              throw Error(response.error)
            }
            // debugger;
            localStorage.setItem("Authorization", JSON.stringify(response.authtoken));           
            dispatch(authtoken(JSON.stringify(response.authtoken).replaceAll('"','')))
            navigate("/home")
          
            
          })
          .catch((err) => {
            console.log(err,"cvdsavs");
            // setError(err.message);
            // toast.error(err?.message);
            
    
          });

    }

}
const authtoken=(amount)=>{
    // debugger;
    return{
        type:'authtoken',
        payload:amount
    }
}
export const LogOut=(navigate,amount)=>{
  localStorage.removeItem("Authorization");
  navigate("/singUp");
  return{
    type:"logOut",
    payload:amount
  }
}



export const DoctorData=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    const { title, discription} = feilds;
        // debugger;

    fetch("http://localhost:5000/api/notes/addnote", {
     method: "POST",
     headers: {
       "content-type": "application/json",
       "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
     },

     body: JSON.stringify({
      title,
      discription,
     }),
   })
     .then((response) => response.json())
     
     .then((response) => {
      //  console.log(response.sucess)
       toast.success(response?.sucess)      

       if (!response?.sucess) {
         throw Error(response.error)
       }      
      //  console.log(response);       
     })
     .catch((err) => {
       // setError(err.message);
      //  toast.error(err);     

     })
  }
}

export const notesData=()=>{
  // debugger
  return(dispatch)=>{
    fetch("http://localhost:5000/api/notes/fetchallnotes", {

            method: "GET",
            headers: {
                "content-type": "application/json",
                'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
            },
        })
            .then(response => response.json())
            .then(response => {
              dispatch(saveData(response))
                // setSettingsData(response);/
            })
            .catch(error => {
                // console.log(error, "joih");
            });
  }
}
const saveData=(amount)=>{
  // debugger;
  return{
    type:"alltheData",
    payload:amount
  }
}
export const SearchDatas=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    const { schema} = feilds;
    fetch("http://localhost:5000/api/health/healthId", {

      
      // debugger;

 
   method: "POST",
   headers: {
     "content-type": "application/json"
     
   },

   body: JSON.stringify({
    schema
   }),
 })
   .then((response) => response.json())
   
   .then((response) => {
    //  console.log(response)
     dispatch(DataSearch(response))

     toast.success(response?.sucess)
     

     if (!response?.sucess) {
       throw Error(response.error)
     }
    
    //  console.log(response);
     
   })
   .catch((err) => {
     // setError(err.message);
    //  toast.error(err?.message);
     

   })
  }
}
const DataSearch=(amount)=>{
  // debugger;
  return{
    type:"searchData",
    payload:amount
  }
}

export const editData=(feilds)=>{
  // debugger
  return(dispatch)=>{
    const {title,discription,_id}=feilds;
    // debugger;
    fetch(`http://localhost:5000/api/notes/updatenote/${(_id).replaceAll('"', "")}`, {
   method: "PUT",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },

   body: JSON.stringify({
    title,discription
   }),
 })
   .then((response) => response.json())
   
   .then((response) => {
    //  dispatch(DataSearch(response))
    //  toast.success(response?.sucess)
    //  if (!response?.sucess) {
    //    throw Error(response.error)

    console.log(response);
    //  }
   })
   .catch((err) => {
   })
  }
}
export const deletData =(feilds)=>{
  // debugger  
  return(dispatch)=>{
    const{_id}=feilds
    fetch(`http://localhost:5000/api/notes/deletenote/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(deleteddata(response))
   })
   .catch((err) => {
   })
  }
}
const deleteddata =(amount)=>{
  return{
    type:"deleteddata",
    payload:amount
  }
}

export const SaveImage=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    const{image}=feilds

    console.log(image);
    fetch(`http://localhost:5000/api/Image/saveimage`, {
      method: "POST",   
      headers: {
        
        "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
      },
      body: feilds
    })
      .then((response) => response.json())      
      .then((response) => {  
        console.log(response); 
        toast.success(response?.sucess)           
        if (!response?.sucess) {
          throw Error(response.error)
        }
      })
      .catch((err) => {       
   
      })
  }
}

export const imagesData=()=>{
  return(dispatch)=>{
    fetch("http://localhost:5000/api/Image/getallimages", {

      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasImage(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 

const datasImage =(amount)=>{
  // debugger;
  return{
    type:'imagesdata',
    payload:amount
  }
}
export const deletImages=(feilds)=>{
  return(dispatch)=>{
    debugger;
    const{_id}=feilds
    fetch(`http://localhost:5000/api/Image/deleteImage/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(imagesDeleted(response))
   })
   .catch((err) => {
   })
  }

}
const imagesDeleted=(amount)=>{
  // debugger
  return{
    type:'deletingImage',
    payload:amount
  }
}

export const pdfData=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    const{image}=feilds

    console.log(image);
    fetch(`http://localhost:5000/api/pdf/savePdf`, {
      method: "POST",   
      headers: {
        
        "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
      },
      body: feilds
    })
      .then((response) => response.json())      
      .then((response) => {  
        console.log(response); 
        toast.success(response?.sucess)           
        if (!response?.sucess) {
          throw Error(response.error)
        }
      })
      .catch((err) => {       
   
      })
  }
}
export const PdfDataGet=(feilds)=>{
  const {schema}=feilds;
  // debugger
  return(dispatch)=>{
    fetch(`http://localhost:5000/api/pdf/getallPdf/${schema}`, {

      method: "GET",
   
  })
      .then(response => response.json())
      .then(response => {
        console.log();
        dispatch(sendPdf(response))
      })
      .catch(error => {
      });
  }
} 
const sendPdf=(amount)=>{
  // debugger;
  return{
    type:'SavingImages',
    payload:amount
  }
}