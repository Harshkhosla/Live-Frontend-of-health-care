
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

export const SaveImage = (fields) => {
  return (dispatch) => {
    // const formData = new FormData();
    // formData.append('image', fields.image);
    
//  debugger;
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/saveimage`, {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem('Authorization').replaceAll('"', ""),
      },
      body: fields
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        toast.success(response?.success);
        if (!response?.success) {
          throw Error(response.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



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















export const SaveImage2=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    // const{video}=feilds

    // console.log(image);
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/saveimagedata`, {
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


export const imagesData2=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata`, {

      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasImage2(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 

const datasImage2 =(amount)=>{
  // debugger;
  return{
    type:'imagesdata2',
    payload:amount
  }
}
export const deletImages2=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/deleteImagedata/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(imagesDeleted2(response))
   })
   .catch((err) => {
   })
  }

}
const imagesDeleted2=(amount)=>{
  // debugger
  return{
    type:'deletingImage2',
    payload:amount
  }
}











export const SaveImage3=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    // const{video}=feilds

    // console.log(image);
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/saveimagedata2`, {
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


export const imagesData3=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata2`, {

      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasImage3(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 

const datasImage3 =(amount)=>{
  // debugger;
  return{
    type:'imagesdata3',
    payload:amount
  }
}
export const deletImages3=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/deleteImagedata2/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(imagesDeleted3(response))
   })
   .catch((err) => {
   })
  }

}
const imagesDeleted3=(amount)=>{
  // debugger
  return{
    type:'deletingImage3',
    payload:amount
  }
}








export const SaveImage4=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    // const{video}=feilds

    // console.log(image);
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/saveimagedata3`, {
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





export const imagesData4=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata3`, {

      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasImage4(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 

const datasImage4 =(amount)=>{
  // debugger;
  return{
    type:'imagesdata4',
    payload:amount
  }
}
export const deletImages4=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/deleteImagedata3/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(imagesDeleted4(response))
   })
   .catch((err) => {
   })
  }

}
const imagesDeleted4=(amount)=>{
  // debugger
  return{
    type:'deletingImage4',
    payload:amount
  }
}







export const SaveImage5=(feilds)=>{
  // debugger;
  return(dispatch)=>{
    // const{video}=feilds

    // console.log(image);
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/saveimagedata4`, {
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


export const imagesData5=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/getallimagesdata4`, {

      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasImage5(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 

const datasImage5 =(amount)=>{
  // debugger;
  return{
    type:'imagesdata5',
    payload:amount
  }
}
export const deletImages5=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/Image/deleteImagedata4/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(imagesDeleted5(response))
   })
   .catch((err) => {
   })
  }

}
const imagesDeleted5=(amount)=>{
  // debugger
  return{
    type:'deletingImage5',
    payload:amount
  }
}









export const SaveVideo = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo =(amount)=>{
  // debugger;
  return{
    type:'videodata',
    payload:amount
  }
}

export const deletVideo=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted=(amount)=>{
  // debugger
  return{
    type:'deletingvideo',
    payload:amount
  }
}










export const SaveVideo2 = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo2`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData2=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo2`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo2(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo2 =(amount)=>{
  // debugger;
  return{
    type:'videodata2',
    payload:amount
  }
}

export const deletVideo2=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo2/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted2(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted2=(amount)=>{
  // debugger
  return{
    type:'deletingvideo2',
    payload:amount
  }
}








export const SaveVideo3 = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo3`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData3=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo3`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo3(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo3 =(amount)=>{
  // debugger;
  return{
    type:'videodata3',
    payload:amount
  }
}

export const deletVideo3=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo3/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted3(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted3=(amount)=>{
  // debugger
  return{
    type:'deletingvideo3',
    payload:amount
  }
}












export const SaveVideo4 = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo4`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData4=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo4`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo4(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo4 =(amount)=>{
  // debugger;
  return{
    type:'videodata4',
    payload:amount
  }
}

export const deletVideo4=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo4/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted4(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted4=(amount)=>{
  // debugger
  return{
    type:'deletingvideo4',
    payload:amount
  }
}















export const SaveVideo5 = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo5`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData5=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo5`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo5(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo5 =(amount)=>{
  // debugger;
  return{
    type:'videodata5',
    payload:amount
  }
}

export const deletVideo5=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo5/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted5(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted5=(amount)=>{
  // debugger
  return{
    type:'deletingvideo5',
    payload:amount
  }
}








export const SaveVideo6 = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo6`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData6=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo6`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo6(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo6 =(amount)=>{
  // debugger;
  return{
    type:'videodata6',
    payload:amount
  }
}

export const deletVideo6=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo6/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted6(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted6=(amount)=>{
  // debugger
  return{
    type:'deletingvideo6',
    payload:amount
  }
}










export const SaveVideo7 = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo7`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData7=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo7`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo7(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo7 =(amount)=>{
  // debugger;
  return{
    type:'videodata7',
    payload:amount
  }
}

export const deletVideo7=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo7/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted7(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted7=(amount)=>{
  // debugger
  return{
    type:'deletingvideo7',
    payload:amount
  }
}












export const SaveVideo8 = (file) => {
  const chunkSize = 5 * 1024 * 1024; // 5MB chunk size (adjust as needed)
  const totalChunks = Math.ceil(file.size / chunkSize);

  return (dispatch) => {
    const uploadChunk = (start, end, chunkIndex) => {
      const chunk = file.slice(start, end);
      const formData = new FormData();
      formData.append("video", chunk);

      fetch(`https://backend-production-e1c2.up.railway.app/api/video/savevideo8`, {
        method: "POST",
        headers: {
          "Authorization": localStorage.getItem("Authorization").replaceAll('"', ""),
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(`Chunk ${chunkIndex + 1} uploaded.`, response);
          // dispatch(datasVideo(response));
          if (chunkIndex + 1 < totalChunks) {
            const nextStart = end;
            const nextEnd = Math.min(nextStart + chunkSize, file.size);
            const nextChunkIndex = chunkIndex + 1;
            uploadChunk(nextStart, nextEnd, nextChunkIndex);
          } else {
            console.log("All chunks uploaded successfully.");
            toast.success(response?.success);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    uploadChunk(0, chunkSize, 0);
  };
};

export const videoData8=()=>{
  return(dispatch)=>{
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/getallvideo8`, {
  
      method: "GET",
      headers: {
          "content-type": "application/json",
          'Authorization': localStorage.getItem(`Authorization`).replaceAll('"', '')
      },
  })
      .then(response => response.json())
      .then(response => {
        dispatch(datasVideo8(response))
          // setSettingsData(response);/
      })
      .catch(error => {
          // console.log(error, "joih");
      });
  }
} 



const datasVideo8 =(amount)=>{
  // debugger;
  return{
    type:'videodata8',
    payload:amount
  }
}

export const deletVideo8=(feilds)=>{
  return(dispatch)=>{
    // debugger;
    const{_id}=feilds
    fetch(`https://backend-production-e1c2.up.railway.app/api/video/deleteVideo8/${_id}`, {
   method: "DELETE",
   headers: {
     "content-type": "application/json",
     "Authorization": localStorage.getItem(`Authorization`).replaceAll('"', ""),
   },
 })
   .then((response) => response.json())
   
   .then((response) => {
    console.log(response);
    dispatch(videoDeleted8(response))
   })
   .catch((err) => {
   })
  }

}
const videoDeleted8=(amount)=>{
  // debugger
  return{
    type:'deletingvideo8',
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