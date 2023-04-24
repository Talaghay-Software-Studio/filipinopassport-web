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
    <div className="App" style={{ width: `${width}px`, height: `${height}px` }}>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <div className="full-screen-rectangle" style={{ position: 'fixed', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', textAlign: 'center', left: '50%', transform: 'translateX(-50%)' }}>
        <p style={{ ...titleStyles, marginTop: '56px', marginBottom: '1px' }}>Welcome to</p>
        <p style={{ ...headingStyles }}>FilipinosPassport.com</p>
        <p style={{ ...descriptionStyles, marginBottom: '56px' }}>
          Visa Application Services and Travel Guides
          <br />
          for Philippines Passport Holders
        </p>
        <p style={{ ...dropdownStyles, fontSize: '14px', marginBottom: '16px' }}>Where are You Going?</p>
      </div>
      <div style={{ zIndex: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '340px', width: '70%', marginBottom: 'auto' }}>
        <Dropdown />
      </div>
      <div className="bg" style={{ position: 'fixed', width: `${width}px`, height: `${height}px`, zIndex: -2 }}></div>
      <footer style={{ margin: 0, position: 'relative', marginTop: '950px', width: '100vw' }}>
      <Footer />
      </footer>
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
  transition: 'font-size 0.8s ease-in-out', 
};

const headingStyles = {
  fontFamily: 'Mulish',
  fontWeight: 800,
  fontSize: '32px',
  color: '#FFFFFF',
  lineHeight: '46px',
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
