const initialState={
    authtoken:[],
    notesData:[],
    searchData:[],
    deletedData:[],
    imagesData:[],
    pdfData:[],
    UserData:[],
    UserAllInformation:[],
    imagesData2:[],
    imagesData3:[],
    imagesData4:[],
    imagesData5:[],
}

const reducer =(state=initialState,action)=>{

    if(action.type==="authtoken"){        
        return {...state ,authtoken:action.payload}        
    }else if (action.type==="logOut"){    
        return{authtoken:null}
    }else if (action.type==="alltheData"){       
        return{...state,notesData:action.payload}        
    }else if (action.type==="searchData"){    
        return{...state,searchData:action.payload}        
    }else if(action.type==="deleteddata"){        
        const sample =state.notesData.filter((data,index)=>data._id!==action.payload.note._id)
        console.log(sample);
        return{...state,notesData:sample}
    }else if(action.type==="imagesdata"){            
        return{...state,imagesData:action.payload.images}
    }
    else if(action.type==="imagesdata2"){            
        return{...state,imagesData2:action.payload.images}
    }
    else if(action.type==="imagesdata3"){            
        return{...state,imagesData3:action.payload.images}
    }
    else if(action.type==="imagesdata4"){            
        return{...state,imagesData4:action.payload.images}
    }
    else if(action.type==="imagesdata5"){            
        return{...state,imagesData5:action.payload.images}
    }
    
    else if(action.type==="deletingImage"){ 
        const images =state.imagesData.filter((data,index)=>data._id!==action.payload.images._id)
        console.log(images);        
        return{...state,imagesData:images}        
    }else if(action.type==="deletingImage2"){ 
        const images =state.imagesData2.filter((data,index)=>data._id!==action.payload.images._id)
        console.log(images);        
        return{...state,imagesData2:images}        
    }else if(action.type==="deletingImage3"){ 
        const images =state.imagesData3.filter((data,index)=>data._id!==action.payload.images._id)
        console.log(images);        
        return{...state,imagesData3:images}        
    }else if(action.type==="deletingImage4"){ 
        const images =state.imagesData4.filter((data,index)=>data._id!==action.payload.images._id)
        console.log(images);        
        return{...state,imagesData4:images}        
    }else if(action.type==="deletingImage5"){ 
        const images =state.imagesData5.filter((data,index)=>data._id!==action.payload.images._id)
        console.log(images);        
        return{...state,imagesData5:images}        
    }
    
    else if(action.type==="SavingImages"){
        // debugger;
        return{...state,pdfData:action.payload.PDF}
    }else if(action.type==="SavingUserInformation"){
        // debugger;
        return{...state,UserData:action.payload}
    }else if(action.type==="Updatingnames"){
        // debugger;
        return{...state,UserAllInformation:action.payload}
    }
    return state
}
export default reducer;