import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  requirements: null,
  destination: null,
  deliveryEmailAddress: null,
  travelerName: null,
  travelerFlightDetails: null, 
  flightDate: null,
};

const flightDateSlice = createSlice({
  name: 'flightDate',
  initialState,
  reducers: {
    updateflightDate: (state, action) => {
      state.flightDate = action.payload;
    },
  },
});

const travelerFlightDetailsSlice = createSlice({
  name: 'travelerFlightDetails',
  initialState,
  reducers: {
    updatetravelerFlightDetails: (state, action) => {
      state.travelerFlightDetails = action.payload;
    },
  },
});

const travelerNameSlice = createSlice({
  name: 'travelerName',
  initialState,
  reducers: {
    updatetravelerName: (state, action) => {
      state.travelerName = action.payload;
    },
  },
});

const deliveryEmailAddressSlice = createSlice({
  name: 'deliveryEmailAddress',
  initialState,
  reducers: {
    updatedeliveryEmailAddress: (state, action) => {
      state.deliveryEmailAddress = action.payload;
    },
  },
});

const requirementsSlice = createSlice({
  name: 'requirements',
  initialState,
  reducers: {
    updateRequirements: (state, action) => {
      state.requirements = action.payload;
    },
  },
});

const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    updateDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    requirements: requirementsSlice.reducer,
    destination: destinationSlice.reducer,
    deliveryEmailAddress: deliveryEmailAddressSlice.reducer,
    travelerName: travelerNameSlice.reducer,
    travelerFlightDetails: travelerFlightDetailsSlice.reducer,
    flightDate: flightDateSlice.reducer,
  },
});

export const { updateRequirements } = requirementsSlice.actions;
export const { updateDestination } = destinationSlice.actions;
export const { updatedeliveryEmailAddress } = deliveryEmailAddressSlice.actions;
export const { updatetravelerName} = travelerNameSlice.actions;
export const { updatetravelerFlightDetails } = travelerFlightDetailsSlice.actions;
export const { updateflightDate } = flightDateSlice.actions;

export default store;
