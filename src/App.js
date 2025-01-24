import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleModeBlue = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#03012b';
    showAlert("Blue Dark Mode has been enabled", "success");
  }

  const toggleModeGreen = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#072707';
    showAlert("Green Dark Mode has been enabled", "success");
  }

  const toggleModeRed = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#391515';
    showAlert("Red Dark Mode has been enabled", "success");
  }

  const toggleModeLight = () => {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled", "success");
  }


  return (
    <>
      <Router>
        <Navbar title="Text Analyzer" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} toggleModeRed={toggleModeRed} toggleModeLight={toggleModeLight} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text here to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;