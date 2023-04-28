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
    <body style={{ 
      backgroundImage: `url(${Montenegro})`,}}>
    <div className="App">
    <React.Fragment>
      <Navbar />
    </React.Fragment>
    <div className="full-screen-rectangle" style={{backgroundColor: '#36ADA8', opacity: '0.72'}}></div>
  <div style={{ position: 'absolute',  width: '1000px', textAlign: 'justify', left: '85%', transform: 'translateX(-40%)' }}>
    <p style={{ ...headingStyles, marginTop: '80px' }}>LET'S NOW BOOK YOUR <br /> RENTAL FLIGHT TICKET</p>
    <p style={{ ...descriptionStyles, marginTop: '160px' }}> AT A VERY LOW PRICE OF</p>
    <p style={{ ...dropdownStyles,}}>€30 euro or $35 USD.</p>
  </div>
  <div style={{left: '75%', transform: 'translateX(-20%)'}}>
  <Checkout />
  </div>
  <footer style={{ margin: 0, position: 'relative', marginTop: '950px', width: '100vw' }}>
  <Footer />
  </footer>
</div>
</body>
  );
}

export default Services;

