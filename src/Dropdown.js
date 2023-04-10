import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div class="dropdown">
    <div class="select">
      <span class="selected">Figma</span>
      <div class="caret"></div>
    </div>
    <ul class="menu">
      <li>Framer</li>
      <li>Sketch</li>
      <li>InStudio</li>
      <li class="active">Figma</li>
    </ul>
    </div>
  );
}

export default Dropdown;