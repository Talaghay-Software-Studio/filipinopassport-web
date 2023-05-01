import '../App.css';
import React, {useState, useEffect} from 'react'
import Navbar from "../NavBar";
import Footer from '../Footer';
import Montenegro from '../images/Montenegro.png'
import Checkout from '../components/Checkout'

function Services() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
const headingStyles = {
  fontFamily: 'Mulish',
  fontWeight: 800,
  fontSize: isSmallScreen ? '32px' : '40px',
  color: '#FFFFFF',
  lineHeight: isSmallScreen ? '32px' : '40px',
  textAlign: 'justify' ,
  height: '46px',
  transition: 'font-size 0.3s ease-in-out, lineHeight 0.8s ease-in-out', 
};

const descriptionStyles = {
  fontFamily: 'Mulish',
  fontWeight: 300,
  fontSize: isSmallScreen ? '14px' : '16px',
  color: '#FFFFFF',
  textAlign: 'justify',
  transition: 'font-size 0.3s ease-in-out', 

};

const dropdownStyles = {
  fontFamily: 'Mulish',
  fontWeight: 1000,
  fontSize: isSmallScreen ? '32px' : '40px',
  marginTop: '-20px',
  color: '#FFFFFF',
  textAlign: 'justify',
  transition: 'font-size 0.3s ease-in-out', 
}

  return (
    <div className="App">
    <div style={{ 
      zIndex: -2,
      backgroundImage: `url(${Montenegro})`,
      backgroundSize: 'cover',
      width: '100vw',
      position: 'absolute' }} />
    <React.Fragment>
      <Navbar />
    </React.Fragment>
    <div className="full-screen-rectangle" style={{backgroundColor: '#36ADA8', opacity: '0.72', zIndex: -1,}}></div>
  <div style={{ position: 'absolute',  width: '1000px', textAlign: 'justify', left: '85%', transform: 'translateX(-40%)' }}>
    <p style={{ ...headingStyles, marginTop: '80px' }}>LET'S NOW BOOK YOUR <br /> RENTAL FLIGHT TICKET</p>
    <p style={{ ...descriptionStyles, marginTop: '160px' }}> AT A VERY LOW PRICE OF</p>
    <p style={{ ...dropdownStyles,}}>€30 euro or $35 USD.</p>
  </div>
  <div style={{ transform: 'translateX(-25%)' }}>
  <Checkout />
  </div>
  <footer style={{ margin: 0, position: 'relative', marginTop: '50vh', width: '100vw' }}>
  <Footer />
  </footer>
</div>
  );
}

export default Services;

