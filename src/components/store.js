import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  requirements: null,
  destination: null,
};

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
  },
});

export const { updateRequirements } = requirementsSlice.actions;
export const { updateDestination } = destinationSlice.actions;
export default store;
