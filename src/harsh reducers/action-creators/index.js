
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Navigate} from "react-router-dom";

export const loginuser =(input)=>{
    // debugger;
    return (dispatch)=>{
        const{name, email, password}=input;
        fetch(`https://backend-production-e1c2.up.railway.app/api/auth/createuser`, {
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
      
        
         fetch(`https://backend-production-e1c2.up.railway.app/api/auth/login`, {
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

    fetch(`https://backend-production-e1c2.up.railway.app/api/notes/addnote`, {
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
    fetch(`https://backend-production-e1c2.up.railway.app/api/notes/fetchallnotes`, {

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
    fetch(`https://backend-production-e1c2.up.railway.app/api/health/healthId`, {

      
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
    fetch(`https://backend-production-e1c2.up.railway.app/api/notes/updatenote/${(_id).replaceAll('"', "")}`, {
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
    fetch(`https://backend-production-e1c2.up.railway.app/api/notes/deletenote/${_id}`, {
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
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/saveimage`, {
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
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimages`, {

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
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/deleteImage/${_id}`, {
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
    fetch(`https://backend-production-e1c2.up.railway.app/api/pdf/savePdf`, {
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
    fetch(`https://backend-production-e1c2.up.railway.app/api/pdf/getallPdf/${schema}`, {

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
export const UserData=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    const {name,PhoneNo,addressLine1,addressLine2,adharNo,city,email,postalCode,state,_id}=feilds;
    fetch(`https://backend-production-e1c2.up.railway.app/api/auth/UserInformation/${_id}`, {
      method: "PUT",   
      headers: {
        "content-type": "application/json",
        'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
    },
    body: JSON.stringify(
      {
        PhoneNo,addressLine1,addressLine2,adharNo,city,postalCode,state
      })
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
export const UserInformationData=()=>{
  // debugger
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/information/fetchallData`, {

      method: "GET",
      headers: {
        "content-type": "application/json",
        'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
    },
   
  })
      .then(response => response.json())
      .then(response => {
        console.log();
        dispatch(SenduserInformation(response))
      })
      .catch(error => {
      });
  }
} 
const SenduserInformation=(amount)=>{
  // debugger;
  return{
    type:'SavingUserInformation',
    payload:amount
  }
}
export const Gettingdata=()=>{
  // debugger
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/auth/getuser`, {

      method: "POST",
      headers: {
        "content-type": "application/json",
        'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
    },
   
  })
      .then(response => response.json())
      .then(response => {
        console.log();
        dispatch(UpdatingName(response))
      })
      .catch(error => {
      });
  }
}
const UpdatingName=(amount)=>{
  // debugger;
  return{
    type:'Updatingnames',
    payload:amount
  }
}
export const UpdatName=(feilds)=>{
  const{name,_id}=feilds
  debugger
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/auth/updatename/${_id}`, {

      method: "PUT",
      headers: {
        "content-type": "application/json",
        'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
    }, 
    body: JSON.stringify(
      {
        name
      })
   
  })
      .then(response => response.json())
      .then(response => {
        console.log();
        dispatch(UpdatingName(response))
      })
      .catch(error => {
      });
  }
}