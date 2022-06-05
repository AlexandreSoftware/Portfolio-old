import React, { useContext } from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ThemeContext, { Theme } from './utils/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Blog from './Pages/Blog';
import Background from './Components/Background';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Background/>   
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/About" element={<About/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
