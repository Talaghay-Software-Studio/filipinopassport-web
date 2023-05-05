import React, { Component, useState, useRef, useContext, useEffect } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { Countries } from './Countries';
import { useDispatch } from 'react-redux';
import { updateRequirements, updateDestination } from './store';


const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();
  const navRef = useRef();
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    if (selectedOption) {
      const requirements = selectedOption.value;
      const destination = selectedOption.label;
      dispatch(updateRequirements(requirements));
      dispatch(updateDestination(destination));

      alert(destination)
      alert(requirements)
      navigate("/visapassportinfo")
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Select 
            options={Countries}
            components={{
              IndicatorSeparator: () => null
            }}
            scroll
            placeholder={'City or Country'}
            onChange={(selectedOption) => {
              setSelectedOption(selectedOption);
            }}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                textAlign: 'left', 
                width: '264px', 
                height: '56px', 
                borderRadius: '8px', 
                left: '50%',  
                transform: 'translateX(-50%)', 
                marginBottom: '8px',
              }),
              menu: (baseStyles) => ({
                textAlign: 'left', 
                width: '264px', 
                borderRadius: '8px', 
                backgroundColor: '#fff', 
                paddingTop: '16px', 
                margin: 'auto',
                marginBottom: '8px',
                zIndex: 1
              }),
              menuList: styles => {
                console.log('menuList:', styles);
                return {
                  ...styles,
                  maxHeight: 136,
                };
              }
            }}
          />
          <button 
            className="search-button"
            onClick={handleSearchClick}
            style={{ 
              width: '130px',
              height: '33px', 
              borderRadius: '20px', 
              backgroundColor: '#36ADA8', 
              color: '#fff', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '14px',
              fontFamily: 'Mulish',
              marginTop: '8px',
              margin: 'auto',
              zIndex: 0
            }}
          >
            SEARCH NOW
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Dropdown;
