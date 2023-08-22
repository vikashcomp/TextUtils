

import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';



function App() {
  const[mode,setMode]=useState('light');
  
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })

     setTimeout(()=>{
         setAlert(null)
     },3000)
      
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#842743"
      showAlert("dark mode has been enabled","success")
      document.title='Textuttils-Dark mode'
      // setInterval(()=>{
      //  document.title='Textuttils is amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title='install textuttils now'
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
      document.title='Textuttils-Light mode'
    }
  }
  
  return (
    <>
<Router>
<Navbar title="TextUttils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
<Routes>
        <Route path="/about" element={<About/>} />
        
        {/* <Route path=":id" element={<UserProfile />} /> */}
        <Route path="/home" element={<TextForm  showAlert={showAlert}heading="Enter Text to analyze below" mode={mode}/>} />
      </Routes>
{/* <TextForm  showAlert={showAlert} heading="Enter Text to analyze below" mode={mode}/> */}
</div>
</Router>

{/* <About/> */}

    </>
  );
}

export default App;
