import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar/Navbar";
import First from "./Components/First-course/First";
import Second from "./Components/Second-course/Second";
import Third from "./Components/Third-course/Third";
import FourthContainer from "./Components/Fourth-course/FourthContainer";


function App() {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/first-course/' element={<First/>} />
                      <Route path='/second-course/' element={<Second/>} />
                      <Route path='/third-course/' element={<Third/>} />
                      <Route path='/fourth-course/' element={<FourthContainer/>} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
