import React, { useEffect, useState } from "react";
// import "../../"
// import image from './img.gif.gif'
import image2 from '../logout home/img3.gif'
import { videoData } from '../../harsh reducers/action-creators'
import { SaveVideo } from '../../harsh reducers/action-creators'
import { deletVideo } from '../../harsh reducers/action-creators'
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from 'react-player';
const Video = () => {
    const dispatch = useDispatch();
    const imagesAllData = useSelector(state => state?.amount?.videoData)
    // const imagesAllDataa=useSelector(state=>state?.amount?.videoData)   
    console.log(imagesAllData, "hehehhe");
    const [mapImages, setMapImages] = useState([]);
    const [dats, setDats] = useState([]);
    const [img, setImg] = useState('');
    const [dataSend, setDataSend] = useState()
    const [updated, setUpdated] = useState([])


    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };

    const ShowImage = (id) => {
        console.log(id);
        imagesAllData.find((data, index) => {
            if (id === index) {
                // debugger;
                setImg(data?.image)
            }
        })
    }





    const dataSending = () => {

        console.log(dataSend, "hehhehheh");
        dispatch(SaveVideo(dataSend))
        setUpdated([...updated, dats])



    }
    const DeletNote = (id) => {
        console.log("dwvw");
        const imagesDataDeleting = imagesAllData?.filter((data, index) => index === id)

        //  debugger;
        dispatch(deletVideo(imagesDataDeleting?.[0]))
        // debugger;
        // dispatch(imagesData())
    }


    useEffect(() => {

        const imagesDatacall = async () => {
            dispatch(videoData())
        }

        imagesDatacall()
        // setUpdated([...updated,dats])
    }, [updated])




    useEffect(() => {
        setMapImages(imagesAllData)

    }, [imagesAllData])





    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setDataSend(file);
    };



    return (
        <div >
            <h1 className="text-center mt-2 mb-5">video 1 </h1>
            <div className="container">

                <div className="row">
                    <div className="input-box d-flex flex-column justify-content-center text-center align-items-center border col-md-6 offset-md-3 rounded-4" style={{ backgroundColor: "#E9F3FE" }} >
                        <div className="mt-5">
                            <img src={image2} style={{ width: "25rem", height: "16rem" }} />
                        </div>

                        <div className="text-center">
                            <button type="button" onClick={dataSending}>Send Data</button>
                            {/* <input 
                type="file" style={{margin:"2rem"}}
                name="video"
                
                onChange={(event) => {
                  event.preventDefault();

                  let selectedVideo = event.target.files[0];
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
                formDataValue.append('video', selectedVideo);
                setDataSend(formDataValue);
                

                  
                   
                        
                    }}
                
                /> */}


                            <h2>Video Input</h2>
                            <input type="file" accept="video/*" onChange={handleFileChange} />
                            {selectedVideo && (
                                <div>
                                    <h3>Selected Video:</h3>
                                    <video width="320" height="240" controls>
                                        <source src={URL.createObjectURL(selectedVideo)} type={selectedVideo.type} />
                                    </video>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="d-flex flex-wrap justify-content-between align-items-center p-5  ">

                {/* <br />  */}
                {mapImages?.map((harsh, index) => (
  <div className="d-flex flex-column m-3">
   <ReactPlayer
      url={`https://therailicious.com/${harsh?.video}`}
      width="300px"
      height="250px"
      controls
      config={{
        file: {
          attributes: {
            controlsList: 'nodownload', // Disable download option
          },
          tracks: [
            { kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true },
            { kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja' },
            { kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de' },
          ],
        },
        // Additional configuration options for specific file types
        // Modify as needed for MOV and M4V files
        // For example, to enable native playback for M4V files, you can add:
        m4v: {
          attributes: {
            controlsList: 'nodownload',
          },
        },
        // For MOV files, you can add:
        mov: {
          attributes: {
            controlsList: 'nodownload',
          },
        },
      }}
      // playing={isHovered}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />

  <button className="btn btn-sm btn-danger my-2" type="button" onClick={() => DeletNote(index)}>
    Delete
  </button>
</div>
))}

            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {img?.length === 0 ? "no image to show" : <img alt="not fount" width={"900px"} src={img} />}
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

export default Video
