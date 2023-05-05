import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services';
import VisaPassportInfo from './pages/VisaPassportInfo';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/services' element={<Services />} />
          <Route path='/visapassportinfo' element={<VisaPassportInfo/>} />
        </Routes>
    </div>
  );
}

export default App;
