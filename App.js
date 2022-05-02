
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
/*import About from './components/About';*/

import React, { useState } from 'react';
import Alert from './components/Alert';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/





let name = "Mohit";
function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
  }


const toggleMode = ()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert('Dark mode has been enabled', 'success');
    document.title = 'TextUtils - Dark Mode';
  }else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert('Light mode has been enabled', 'success');
    document.title = 'TextUtils - Light Mode'
}
}

  return (
    <>
     {/* <Navbar title="TextUtils"   /> */}
     {/*<Router>*/}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} About1="About" />
    <Alert alert={alert}/>
      <div className="container my-3">
     {/*<Switch>*/}
        {/*  <Route  path="/about">
             <About />
             </Route>*/}
        { /* <Route  path="/">*/}
          <Textform showAlert={showAlert} heading="Enter the  text to analyze below" mode={mode} />
          { /*</Route> */}
    {/*</Switch>*/}
    </div>
     {/*</Router>  */}
     
    </>
  );
}

export default App;
