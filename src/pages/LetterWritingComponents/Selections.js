import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {updateSelectedVisa, updateSelectedBundle, updatepersonName, updateselectedService } from '../../components/store'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Cover Letter',
  'Invitation Letter',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
    dispatch(updatepersonName(personName));
  }, [personName, dispatch]);
  

  return (
    <div>
      <FormControl sx={{ minWidth: 230 }} size="medium" fullWidth>
        <InputLabel id="demo-multiple-name-label">What Letter do you need?</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


export function SelectVisa() {
  const [selectedVisa, setSelectedVisa] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSelectedVisa(selectedVisa));

  }, [ selectedVisa, dispatch]);
  

  return (
    <FormControl sx={{ minWidth: 230 }} size="medium" fullWidth>
      <InputLabel id="Visa">Visa</InputLabel>
      <Select
        labelId="Visa"
        id="Visa"
        value={selectedVisa}
        label="selectedVisa"
        onChange={(event) => {
            setSelectedVisa(event.target.value);
          }}
      >
        <MenuItem value={'USA Visa'}>USA Visa</MenuItem>
        <MenuItem value={'Canada Visa'}>Canada Visa</MenuItem>
        <MenuItem value={'Schengen Visa'}>Schengen Visa</MenuItem>
        <MenuItem value={'UK Visa'}>UK Visa</MenuItem>
        <MenuItem value={'Australia Visa'}>Australia Visa</MenuItem>
        <MenuItem value={'China Visa'}>China Visa</MenuItem>
        <MenuItem value={'Japan Visa'}>Japan Visa</MenuItem>
        <MenuItem value={'South Korea Visa'}>South Korea Visa</MenuItem>
        <MenuItem value={'Others'}>Others</MenuItem>
      </Select>
    </FormControl>
  );
}


export function SelectedService() {
  const [selectedService, setSelectedService] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateselectedService(selectedService));

  }, [ selectedService, dispatch]);
  

  return (
    <FormControl sx={{ minWidth: 230 }} size="medium" fullWidth>
      <InputLabel id="Service">Service Type</InputLabel>
      <Select
        labelId="Service"
        id="Service"
        value={selectedService}
        label="selectedService"
        onChange={(event) => {
          setSelectedService(event.target.value);
          }}
      >
        <MenuItem value={'Normal'}>Normal</MenuItem>
        <MenuItem value={'Expedite'}>Expedite</MenuItem>
      </Select>
    </FormControl>
  );
}

export function SelectPackage() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(updateSelectedBundle(selectedPackage));

}, [ selectedPackage, dispatch]);

  return (
    <FormControl sx={{ minWidth: 230 }} size="medium" fullWidth>
      <InputLabel id="Bundle">Select Package</InputLabel>
      <Select
        labelId="Bundle"
        id="Bundle"
        value={selectedPackage}
        label="selectedPackage"
        onChange={(event) => {
          setSelectedPackage(event.target.value);
        }}
      >
        <MenuItem value={'Package A'}>Package A</MenuItem>
        <MenuItem value={'Package B'}>Package B</MenuItem>
        <MenuItem value={'Package C'}>Package C</MenuItem>
        <MenuItem value={'Package D'}>Package D</MenuItem>


      </Select>
    </FormControl>
  );
}