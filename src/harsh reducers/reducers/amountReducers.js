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
    videoData:[],
    videoData2:[],
    videoData3:[],
    videoData4:[],
    videoData5:[],
    videoData6:[],
    videoData7:[],
    videoData8:[],
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
    else if(action.type==="videodata"){    
        // debugger;        
        return{...state,videoData:action.payload.videos}
    }
    else if(action.type==="videodata2"){    
        // debugger;        
        return{...state,videoData2:action.payload.videos}
    }
    else if(action.type==="videodata3"){    
        // debugger;        
        return{...state,videoData3:action.payload.videos}
    }
    else if(action.type==="videodata4"){    
        // debugger;        
        return{...state,videoData4:action.payload.videos}
    }
    else if(action.type==="videodata5"){    
        // debugger;        
        return{...state,videoData5:action.payload.videos}
    }
    else if(action.type==="videodata6"){    
        // debugger;        
        return{...state,videoData6:action.payload.videos}
    }
    else if(action.type==="videodata7"){    
        // debugger;        
        return{...state,videoData7:action.payload.videos}
    }
    else if(action.type==="videodata8"){    
        // debugger;        
        return{...state,videoData8:action.payload.videos}
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
    }else if(action.type==="deletingvideo"){ 
        const videos =state.videoData.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData:videos}        
    }else if(action.type==="deletingvideo2"){ 
        const videos =state.videoData2.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData2:videos}        
    }else if(action.type==="deletingvideo3"){ 
        const videos =state.videoData3.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData3:videos}        
    }else if(action.type==="deletingvideo4"){ 
        const videos =state.videoData4.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData4:videos}        
    }else if(action.type==="deletingvideo5"){ 
        const videos =state.videoData5.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData5:videos}        
    }else if(action.type==="deletingvideo6"){ 
        const videos =state.videoData6.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData6:videos}        
    }else if(action.type==="deletingvideo7"){ 
        const videos =state.videoData7.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData7:videos}        
    }else if(action.type==="deletingvideo8"){ 
        const videos =state.videoData8.filter((data,index)=>data._id!==action.payload.videos._id)
        console.log(videos);        
        return{...state,videoData8:videos}        
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