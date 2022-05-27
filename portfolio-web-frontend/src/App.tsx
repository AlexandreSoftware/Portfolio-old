import React from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import { Theme, ThemeContextProvider } from './utils/ThemeContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { OldThemeContextProvider } from './utils/OldThemeContext';


function App() {
  return (
    <ThemeContextProvider>
      <OldThemeContextProvider>
        <Navbar/>   
            
        <Footer/>
      </OldThemeContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
