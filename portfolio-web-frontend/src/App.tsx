import React, { useContext } from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ThemeContext, { Theme } from './utils/ThemeContext';

function App() {
  let [context,SetContext] =useContext(ThemeContext)
  return (
    <div className={`App App-${Theme[context]}`}>
      <Navbar/>   
          
      <Footer/>
    </div>
  );
}

export default App;
