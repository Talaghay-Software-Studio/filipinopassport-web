import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { updateflightDate} from '../../components/store';
import { useDispatch } from 'react-redux';

export default function DatePickerValue() {
  const [flightDate, setFlightDate] = React.useState(dayjs('YYYY-MM-DD'));
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
        <DatePicker fullWidth
          label="When is your Appointment or Flight Date"
          disablePast
          value={flightDate}
          slotProps={{
            textField: {
              helperText: "Tell us when the ticket will be used as we recommend sending your ticket 3 days before for longer reservation period.",
            },
          }}
          onChange={(newValue) => {
            setFlightDate(newValue);
            dispatch(updateflightDate(newValue));
          }}
          // onChange={(newValue) => setValue(newValue)}
        />
    </LocalizationProvider>
  );
}