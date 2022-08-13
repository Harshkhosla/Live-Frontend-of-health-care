import React, { useEffect, useState } from 'react'
import img1 from './img1.gif'
import img2 from './img2.gif'
import img3 from './img3.gif'
import img5 from './img5.gif'
import img8 from './img8.jpg'
import imh from './wats.jpeg'
import Doctor from './doctor.png'
import icon from './icon.jpeg'
import icon2 from './icon2.jpeg'
import icon3 from './icon3.jpeg'
import icon4 from './icon4.jpeg'
import icon5 from './icon5.jpeg'
import icon7 from './icon7.jpeg'
import icon8 from './icon8.jpeg'
import icon9 from './icon9.jpeg'
import icom0 from './icom0.jpeg'
import icon77 from './icon77.jpg'
import blue from './blue.jpg'
import { Parallax,ParallaxLayer  } from '@react-spring/parallax'
// import { Animator,ScrollContainer,ZoomOut,ScrollPage,Sticky,Fade,batch,MoveOut,FadeIn,ZoomIn,StickyIn,Move,MoveIn} from 'react-scroll-motion'
const HomeLog = () => {
    const [offset,setOffset]=useState(0);
    const handleScroll=()=>setOffset(window.pageYOffset)

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return ()=>window.removeEventListener("scroll",handleScroll)
    },[])
   
    return (
        <div >
            <Parallax pages={3}>

            


          {/* <div className="section-3"> */}
          <div className=" d-flex flex-column text-center text-light my-3" >
            <h2>    
            <ParallaxLayer speed={1}  style={{backgroundImage:`url(${Doctor})`,
        backgroundSize:"cover"  ,backgroundColor:`#A020F0` }}>       
          
          <h1  class="font-weight-bold display-1">MediLocker</h1>
          </ParallaxLayer>
          
       <div className="container my-5">
<ParallaxLayer offset={0.4}>


          <h3 >SIMPLEST PLATFORM TO MANAGE ALL YOUR </h3>
            <h3>HEALTH RECORDS</h3>
      
         
          <h1 className='display-5'> Process Of Treatment Made Easy</h1>
          <div className="container d-flex  flex-wrap align-items-start my-5">

          <h4>MediLocker helps patient and doctor across various specialities with easy</h4>
          <h4>record management , highly secure and easy interface, better </h4>
          <h4>understanding of patients health conditions, saving time and much more</h4>
          </div>
</ParallaxLayer>
       </div>
      
          
            </h2>
            </div>
            

            <ParallaxLayer offset={1} factor={1} style={{backgroundImage:`url(${icon77})`,
        backgroundSize:"cover"  }}>
          <div className="container d-flex flex-wrap align-items-center p-5">

            <div class="card mx-5" style={{width: "18rem"}}>
  <img class="card-img-top" src={icon3}   alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Easy Patient Management</h5>
    <p class="card-text">Easily access patients data anywhere and anytime.</p>
    <a  class="btn btn-primary">Learn More</a>
  </div>
</div>
<div class="card mx-5" style={{width: "18rem"}}>
  <img class="card-img-top" src={icom0} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Track Treatment History</h5>
    <p class="card-text">Save hours by getting history of each patients medical records right from the website.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
<div class="card mx-5" style={{width: "18rem"}}>
  <img class="card-img-top" src={icon5} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Quickly Save Prescription</h5>
    <p class="card-text">Save prescriptions in seconds and use them whenever needed.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
          </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2}   speed={2} factor={1} style={{backgroundImage:`url(${blue})`,backgroundSize:"cover"  }}>

          <div className="container d-flex flex-wrap align-items-center p-5">

            <div class="card mx-5" style={{width: "18rem"}}>
  <img class="card-img-top" src={icon4} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Simple Insurance Process</h5>
    <p class="card-text">Hassle free claims, buying a insurance was never this easy.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
<div class="card mx-5" style={{width: "18rem"}}>
  <img class="card-img-top" src={icon8} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">A Step Towards Digitization</h5>
    <p class="card-text">No more manual report keeping and easy retrieval of data.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
<div class="card mx-5" style={{width: "18rem"}}>
  <img class="card-img-top" src={icon9} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Keep Track Of Insights</h5>
    <p class="card-text">Save your insights and doctor's remarks in a click.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
          </div>
            </ParallaxLayer>
           
          
            {/* <div className='d-flex align-items-start'>
         
            <div className="container d-flex flex-column mx-5 my-3">
            <h1>Keep Your Simple Tasks Simple</h1>
            <h5>...... is the first and only PDF software you’ll love. We have all the tools</h5>
            <h5> you’ll need to start, store, and finish your work with digital documents.</h5>
            </div>
         
          <div><img src={imh} style={{width:"500px",height:"250px"}} alt="" /></div>
         
          
            </div>
           */}
            



           
           

           



               


{/* 





            <div className='d-flex align-items-center'>
            <div><img src={img5} style={{width:"1000px",height:"350px"}} alt="" /></div>
            <div className="container d-flex flex-column  ">
            <h1>Keep Your Sivfg bmple Tasks Simple</h1>
            <h5>...... is the first and only PDF software you’ll love. We have all the tools</h5>
            <h5> you’ll need to start, store, and finish your work with digital documents.</h5>
            </div>                
            </div>
            <div className='d-flex align-items-center'>
            <div className="container d-flex flex-column mx-5 my-3">
            <h1>Keep Your Simple Tasks Simple</h1>
            <h5>...... is the first and only PDF software you’ll love. We have all the tools</h5>
            <h5> you’ll need to start, store, and finish your work with digital documents.</h5>
            </div>
                <div><img src={img8} style={{width:"400px",height:"350px"}} alt="" /></div>
            </div>
            <div className="container w-50 ">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-50 m-auto" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-50 m-auto" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-50 m-auto" alt="..." />
                        </div>
                    </div>
                </div>
            </div> */}
                        
            </Parallax>
        </div>
    )
}

export default HomeLog

