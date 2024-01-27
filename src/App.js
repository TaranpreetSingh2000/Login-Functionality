import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Textform from './Components/Navbar/Textform';
import Loginfile from './Components/Login/Loginfile';
import Signup from './Components/Signup/Signup';
import Otplogin from './Components/Otplogin';
import Home from './Components/Dashboard/Home';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [authenticated, setAuthenticated] = useState(false);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    const newBtnText = mode === 'light' ? 'Enable Light Mode' : 'Enable Dark Mode';
    const newBackgroundColor = mode === 'light' ? 'rgb(0 12 24)' : 'white';
    const newColor = mode === 'light' ? 'white' : 'black';

    setMode(newMode);
    setBtnText(newBtnText);
    document.body.style.backgroundColor = newBackgroundColor;
    document.body.style.color = newColor;
};

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/login"
            element={<Loginfile setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/otplogin"
            element={<Otplogin setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/navbar"
            element={
              authenticated ? (
                <>
                  <Navbar
                    mode={mode}
                    toggleMode={toggleMode}
                    toggleBtn={btnText}
                  />
                  <Textform headingText="Enter your text below:" />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
