import './App.css';
// import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import Profile from './components/Profile/Profile';
import Settings from './components/settings/Settings';
import SingUp from './components/sign-up/SingUp';
import CreatAcoount from './components/Create-account/CreatAcoount';
import Documents from './components/Documents.js/Documents';

import Navbar from './components/header/Navbar';
import Doctor from './components/doctors/Doctor';
import Pdf from './components/pdf/Pdf';
import SignOut from './components/Sign-out/SignOut';
import Scearch from './components/DoctorHelper/Scearch';
import HomeLog from './components/logout home/HomeLog';

import { ToastContainer } from 'react-toastify';
import Report from './components/Report/Report';
import PdfViewer from './components/DoctorHelper/PdfViewer';
import Documents1 from './components/Documents.js/Documents1';
import Video from './components/Documents.js/Video';
import Documents2 from './components/Documents.js/Documents2';
import Documents3 from './components/Documents.js/Documents3';
import Documents4 from './components/Documents.js/Documents4';
// import { ToastContainer } from 'react-toastify/dist/components';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar/>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />

    <Routes>
    <Route path="/" element={< HomeLog/>}/>
      <Route path="/home" element={<Documents />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path='/singUp' element={<SingUp/>}/>
        <Route path='/creataccount' element={<CreatAcoount/>}/>
        <Route path='/documnets' element={<Scearch/>}/>
        <Route path='/edits' element={<Doctor/>}/>
        <Route path='/signOut' element={<SignOut/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/pdfgenrator' element={<PdfViewer/>}/>
        <Route path='/documnets1' element={<Documents1/>}/>
        <Route path='/documnets2' element={<Documents2/>}/>
        <Route path='/documnets3' element={<Documents3/>}/>
        <Route path='/documnets4' element={<Documents4/>}/>
        <Route path='/video' element={<Video/>}/>
        

     
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
