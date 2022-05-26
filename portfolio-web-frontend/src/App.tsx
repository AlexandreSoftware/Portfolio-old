import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Theme, ThemeContextProvider } from './utils/ThemeContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <ThemeContextProvider>
      <Navbar/>   
          
      <Footer/>
    </ThemeContextProvider>
  );
}

export default App;
