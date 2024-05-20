import './App.css';
// import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom'



function App() {

  const colorMode = () => {
    if (mode === "light" || mode === "dark") {
      document.body.style.backgroundColor = "pink";
    }
    else {
      document.body.style.backgroundColor = "pink";


    }


  }



  const [mode, setmode] = useState(`light`);

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



  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode enable", "success");

    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enable", "success");



    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="MR.textmaster" abouttext="About Us" mode={mode} colormode={colorMode} togglemode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm heading="Enter the text and analyze" showAlert={showAlert} mode={mode} />

      </div>

      {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
            </Route>
          </Switch> */}

      {/* <About/> */}


      {/* </Router> */}

    </>
  );
}

export default App;
