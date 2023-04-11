import './App.css';
import React from 'react'
import { useWindowSize } from "./components/useWindowSize"
import Navbar from "./NavBar";
import Dropdown from "./dropdown"

function App() {
  const [width, height] = useWindowSize()
  const mq = window.matchMedia('(max-width: 1024px)');

// Check if the media query matches
if (mq.matches) {
  titleStyles.fontSize = '16px';
  headingStyles.fontSize = '32px';
  descriptionStyles.fontSize = '16px';
}

// Listen for changes in the media query
mq.addEventListener('change', (e) => {
  if (e.matches) {
    // Adjust styles for smaller screens
    titleStyles.fontSize = '16px';
    headingStyles.fontSize = '32px';
    headingStyles.top= '150px';
    descriptionStyles.fontSize = '16px';
    descriptionStyles.top= '200px'
    footerTitle.fontSize= '24px'
    footerDescription.fontSize = '16px'

  } else {
    // Reset styles for larger screens
    titleStyles.fontSize = '22px';
    headingStyles.fontSize = '44px';
    headingStyles.top= '170px';
    descriptionStyles.fontSize = '20px';
    descriptionStyles.top= '240px';
    footerTitle.fontSize= '32px'
    footerDescription.fontSize = '20px'
  }
});
  
return (
  <div className="App" style={{ width: `${width}px`, height: `${height}px`,}}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </div>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <div className="full-screen-rectangle"></div>
    </div>
    <div className="bg" style={{ width: `${width}px`,height: `${height}px`, zIndex: -2 }}> </div>
    <div>
      <p minFontSize={12} maxFontSize={15} style={{ ...titleStyles, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '120px', textAlign: 'center' }}>Welcome to</p>
      <p style={{ ...headingStyles, position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>FilipinoPassport.com</p>
      <p style={{ ...descriptionStyles, position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        Visa Application Services and Travel Guides for Philippines Passport Holders
      </p>
    </div>
    <div style={{ zIndex: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '350px', margin: '0 auto' }}>
      <p style={{ ...dropdownStyles, fontSize: '14px', marginBottom: '8px'}}>Where are You Going?</p>
    </div>
    <div style={{ zIndex: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '380px', width: '70%', marginBottom: 'auto'}}>
      <Dropdown />
      <button style={{ 
    width: '130px', 
    height: '33px', 
    borderRadius: '20px', 
    backgroundColor: '#36ADA8', 
    color: '#fff', 
    border: 'none', 
    cursor: 'pointer', 
    fontSize: '14px',
    fontFamily: 'Mulish',
    marginTop: '8px'
  }}>
    SEARCH NOW
  </button>
    </div>
    <div className="footer" style={{ top: `${height}px`, height: `220px` }}>
  <p style={{ ...footerTitle, position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', marginBottom: '24px' }}>FilipinoPassport.com</p>
  <p style={{ ...footerDescription, position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', marginTop: '56px', width: '80%' }}>
    provides the simplest solution to help with the process of tourist visa and more
  </p>
</div>
  </div>
  
);
}

export default App;

const footerTitle = { fontSize: '32px', fontFamily: 'Mulish', fontWeight: 800 }
const footerDescription = {fontSize: '20px', fontFamily: 'Mulish', fontWeight: 400}
const titleStyles = {
  fontFamily: 'Mulish',
  fontWeight: 700,
  fontSize: '22px',
  color: '#FFFFFF',
  lineHeight: '30px',
  width: '132px',
  height: '30px',
  transition: 'font-size 0.8s ease-in-out', 
};

const headingStyles = {
  fontFamily: 'Mulish',
  fontWeight: 800,
  fontSize: '44px',
  color: '#FFFFFF',
  lineHeight: '46px',
  width: '458px',
  height: '46px',
  top: '170px',
  transition: 'font-size 0.8s ease-in-out, top 0.8s ease-in-out', 
};

const descriptionStyles = {
  fontFamily: 'Mulish',
  fontWeight: 500,
  fontSize: '20px',
  color: '#FFFFFF',
  lineHeight: '25px',
  textAlign: 'center',
  width: '416px',
  height: '50px',
  top: '240px',
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
