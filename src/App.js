import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import RentFlight from './pages/RentFlight';
import VisaPassportInfo from './pages/VisaPassportInfo';
import Services from './pages/Services';
import VisaBundle from './pages/VisaBundle';
import LetterWriting from './pages/LetterWriting';

function App() {
  return (
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
  );
}

export default App;
