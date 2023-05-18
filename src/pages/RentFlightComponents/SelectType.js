import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectType() {
  const [quantity, setQuantity] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
      <InputLabel id="demo-select-small-label">Normal</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={quantity}
        label="Normal"
        onChange={handleChange}
        defaultValue={30}
        displayEmpty
        disabled
      >
        <MenuItem value={30}>Normal</MenuItem>
        {/* <MenuItem value={40}>Expedite</MenuItem> */}
      </Select>
    </FormControl>
  );
}