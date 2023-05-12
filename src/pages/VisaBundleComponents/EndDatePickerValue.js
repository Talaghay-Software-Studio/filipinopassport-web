import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { updateEndDate} from '../../components/store';
import { useDispatch } from 'react-redux';

export default function EndDatePickerValue() {
  const [endDate, setEndDate] = React.useState(dayjs('YYYY-MM-DD'))
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
        <DatePicker fullWidth
          label="End Date of your Travel"
          disablePast
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
            dispatch(updateEndDate(newValue));
          }}
          // onChange={(newValue) => setValue(newValue)}
        />
    </LocalizationProvider>
  );
}