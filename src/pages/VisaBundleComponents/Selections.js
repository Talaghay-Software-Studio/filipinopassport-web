import * as React from 'react';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import {updateSelectedVisa, updateSelectedSponsor, updateSelectedBundle, updateSelectedAdditional} from '../../components/store'

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

export function SelectSponsor() {
    const [selectedSponsor, setSelectedSponsor] = useState(null)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSelectedSponsor(selectedSponsor));

  }, [ selectedSponsor, dispatch]);

    return (
      <FormControl sx={{ minWidth: 230 }} size="medium" fullWidth>
        <InputLabel id="Sponsor">Sponsor</InputLabel>
        <Select
          labelId="Sponsor"
          id="Sponsor"
          value={selectedSponsor}
          label="selectedSponsor"
          onChange={(event) => {
            setSelectedSponsor(event.target.value);
          }}
        >
          <MenuItem value={'Self Sponsored'}>Self Sponsored</MenuItem>
          <MenuItem value={'Someone Else'}>Someone Else</MenuItem>
        </Select>
      </FormControl>
    );
  }

  export function SelectBundle() {
    const [selectedBundle, setSelectedBundle] = useState(null)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSelectedBundle(selectedBundle));

  }, [ selectedBundle, dispatch]);

    return (
      <FormControl sx={{ minWidth: 230 }} size="medium" fullWidth>
        <InputLabel id="Bundle">Select Bundle</InputLabel>
        <Select
          labelId="Bundle"
          id="Bundle"
          value={selectedBundle}
          label="selectedBundle"
          onChange={(event) => {
            setSelectedBundle(event.target.value);
          }}
        >
          <MenuItem value={'Bundle A'}>Bundle A</MenuItem>
          <MenuItem value={'Bundle B'}>Bundle B</MenuItem>
          <MenuItem value={'Bundle C'}>Bundle C</MenuItem>

        </Select>
      </FormControl>
    );
  }

  export function SelectAdditional() {
    const [selectedAdditional, setSelectedAdditional] = useState(null)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSelectedAdditional(selectedAdditional));

  }, [ selectedAdditional, dispatch]);

    return (
      <FormControl sx={{ minWidth: 230 }} size="medium" fullWidth>
        <InputLabel id="Additional">Additional Leg</InputLabel>
        <Select
          labelId="Additional"
          id="Additional"
          value={selectedAdditional}
          label="setSelectedAdditional"
          onChange={(event) => {
            setSelectedAdditional(event.target.value);
          }}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>

        </Select>
      </FormControl>
    );
  }