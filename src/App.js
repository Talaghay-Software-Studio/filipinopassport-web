import './App.css';
import React from 'react'
import { useWindowSize } from "./components/useWindowSize"
import Navbar from "./NavBar";
import Dropdown from "./Dropdown"
import Footer from './Footer';


function App() {
  const [width, height] = useWindowSize()
  const mq = window.matchMedia('(max-width: 1024px)');
  
return (
  <div className="App" style={{ width: `${width}px`, height: `${height}px`,}}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',}}>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </div>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <div className="full-screen-rectangle"></div>
    </div>
    <div>
      <p minFontSize={12} maxFontSize={15} style={{ ...titleStyles, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '120px', textAlign: 'center' }}>Welcome to</p>
      <p style={{ ...headingStyles, position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>FilipinoPassport.com</p>
      <p style={{ ...descriptionStyles, position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        Visa Application Services and Travel Guides for Philippines Passport Holders
      </p>
    </div>
    <div style={{ zIndex: 0, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '300px', margin: '0 auto' }}>
      <p style={{ ...dropdownStyles, fontSize: '14px', marginBottom: '8px'}}>Where are You Going?</p>
    </div>
    <div style={{ zIndex: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '330px', width: '70%', marginBottom: 'auto'}}>
      <Dropdown /> 
    </div>
    <div className="bg" style={{ position:'fixed' ,width: '100vw',height: `${height}px`, zIndex: -2,}}> </div>
    <div style={{ position: 'absolute', left: '0', width: '100vw',top: '950px', bottom: '0px', zIndex: 0}}>
      <Footer />
    </div>
  </div>
  
);
}

export default App;

const titleStyles = {
  fontFamily: 'Mulish',
  fontWeight: 700,
  fontSize: '16px',
  color: '#FFFFFF',
  lineHeight: '30px',
  width: '132px',
  height: '30px',
  transition: 'font-size 0.8s ease-in-out', 
};

const headingStyles = {
  fontFamily: 'Mulish',
  fontWeight: 800,
  fontSize: '32px',
  color: '#FFFFFF',
  lineHeight: '46px',
  width: '458px',
  height: '46px',
  top: '150px',
  transition: 'font-size 0.8s ease-in-out, top 0.8s ease-in-out', 
};

const descriptionStyles = {
  fontFamily: 'Mulish',
  fontWeight: 500,
  fontSize: '16px',
  color: '#FFFFFF',
  lineHeight: '25px',
  textAlign: 'center',
  width: '416px',
  height: '50px',
  top: '200px',
  transition: 'font-size 0.8s ease-in-out, top 0.8s ease-in-out', 
};

const dropdownStyles = {
  fontFamily: 'Mulish',
  fontWeight: 700,
  fontSize: '20px',
  color: '#FFFFFF',
  lineHeight: '25px',
  textAlign: 'center',
  top: '20px'
}
