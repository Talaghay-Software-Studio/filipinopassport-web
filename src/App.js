import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import RentFlight from './pages/RentFlight';
import VisaPassportInfo from './pages/VisaPassportInfo';
import Services from './pages/Services';
import VisaBundle from './pages/VisaBundleComponents/VisaBundle';
import LetterWriting from './pages/LetterWriting';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import "@fontsource/montserrat";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/rentflight' element={<RentFlight />} />
          <Route path='/visapassportinfo' element={<VisaPassportInfo/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/visabundle' element={<VisaBundle/>} />
          <Route path='/letterwriting' element={<LetterWriting/>} />
        </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
