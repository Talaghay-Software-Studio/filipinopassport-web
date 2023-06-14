import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectQuantity(props) {
  const { quantity, setQuantity } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Quantity</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={quantity}
        label="Quantity"
        onChange={handleChange}
      >
        <MenuItem value={1}>Solo</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
  );
}