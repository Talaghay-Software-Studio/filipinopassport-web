import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { updatesubmitDate } from '../../components/store';
import { useDispatch } from 'react-redux';

export default function SubmitDatePickerValue() {
  const [submitDate, setsubmitDate] = React.useState(dayjs('YYYY-MM-DD'))
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="When are you submitting the visa application?"
          slotProps={{ textField: { fullWidth: true } }}
          disablePast
          value={submitDate}
          onChange={(newValue) => {
            setsubmitDate(newValue);
            dispatch(updatesubmitDate(newValue));
          }}
          renderInput={(params) => <TextField {...params} fullWidth />} 
          // onChange={(newValue) => setValue(newValue)}
        />
    </LocalizationProvider>
  );
}