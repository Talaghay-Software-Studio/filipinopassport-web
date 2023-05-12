import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { updateStartDate} from '../../components/store';
import { useDispatch } from 'react-redux';

export default function StartDatePickerValue() {
  const [startDate, setStartDate] = React.useState(dayjs('YYYY-MM-DD'))
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
        <DatePicker fullWidth
          label="Start Date of your Travel"
          disablePast
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
            dispatch(updateStartDate(newValue));
          }}
          // onChange={(newValue) => setValue(newValue)}
        />
    </LocalizationProvider>
  );
}