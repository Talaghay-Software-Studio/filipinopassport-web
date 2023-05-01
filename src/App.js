import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services';


function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/services' element={<Services />} />
        </Routes>
    </div>
  );
}

export default App;
