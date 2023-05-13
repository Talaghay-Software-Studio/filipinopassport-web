import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  requirements: null,
  destination: null,
  deliveryEmailAddress: null,
  travelerName: null,
  travelerFlightDetails: null,
  sponsorBackground: null,
  companion: null,
  visitingCountry: null,
  dailyBudget: null,
  entireBudget: null,
  whatsappInfo: null,
  facebookInfo: null,
  backgroundInfo: null,
  selectedVisa: null,
  selectedSponsor: null,
  startDate: null,
  endDate: null,
  flightDate: null,
  totalAmount: null,
  referenceNumber: null,
  selectedBundle: null,
  selectedAdditional: null,
  totalAmountVisaBundle: null,
};


const referenceNumberSlice = createSlice({
  name: 'referenceNumber',
  initialState,
  reducers: {
    updatereferenceNumber: (state, action) => {
      state.referenceNumber = action.payload;
    },
  },
});

const totalAmountSlice = createSlice({
  name: 'totalAmount',
  initialState,
  reducers: {
    updatetotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

const flightDateSlice = createSlice({
  name: 'flightDate',
  initialState,
  reducers: {
    updateflightDate: (state, action) => {
      state.flightDate = action.payload;
    },
  },
});

const startDateSlice = createSlice({
  name: 'startDate',
  initialState,
  reducers: {
    updateStartDate: (state, action) => {
      state.startDate = action.payload;
    },
  },
});

const endDateSlice = createSlice({
  name: 'endDate',
  initialState,
  reducers: {
    updateEndDate: (state, action) => {
      state.endDate = action.payload;
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

const sponsorBackgroundSlice = createSlice({
  name: 'sponsorBackground',
  initialState,
  reducers: {
    updateSponsorBackground: (state, action) => {
      state.sponsorBackground = action.payload;
    },
  },
});

const companionSlice = createSlice({
  name: 'companion',
  initialState,
  reducers: {
    updateCompanion: (state, action) => {
      state.companion = action.payload;
    },
  },
});

const visitingCountrySlice = createSlice({
  name: 'visitingCountry',
  initialState,
  reducers: {
    updateVisitingCountry: (state, action) => {
      state.visitingCountry = action.payload;
    },
  },
});

const dailyBudgetSlice = createSlice({
  name: 'dailyBudget',
  initialState,
  reducers: {
    updateDailyBudget: (state, action) => {
      state.dailyBudget = action.payload;
    },
  },
});

const entireBudgetSlice = createSlice({
  name: 'entireBudget',
  initialState,
  reducers: {
    updateEntireBudget: (state, action) => {
      state.entireBudget = action.payload;
    },
  },
});

const whatsappInfoSlice = createSlice({
  name: 'whatsappInfo',
  initialState,
  reducers: {
    updateWhatsappInfo: (state, action) => {
      state.whatsappInfo = action.payload;
    },
  },
});

const facebookInfoSlice = createSlice({
  name: 'facebookInfo',
  initialState,
  reducers: {
    updateFacebookInfo: (state, action) => {
      state.facebookInfo = action.payload;
    },
  },
});

const backgroundInfoSlice = createSlice({
  name: 'backgroundInfo',
  initialState,
  reducers: {
    updateBackgroundInfo: (state, action) => {
      state.backgroundInfo = action.payload;
    },
  },
});

const selectedVisaSlice = createSlice({
  name: 'selectedVisa',
  initialState: null,
  reducers: {
    updateSelectedVisa: (state, action) => {
      return action.payload;
    },
  },
});

const selectedSponsorSlice = createSlice({
  name: 'selectedSponsor',
  initialState: null,
  reducers: {
    updateSelectedSponsor: (state, action) => {
      return action.payload;
    },
  },
});

const selectedBundleSlice = createSlice({
  name: 'selectedBundle',
  initialState: null,
  reducers: {
    updateSelectedBundle: (state, action) => {
      return action.payload;
    },
  },
});

const selectedAdditionalSlice = createSlice({
  name: 'selectedAdditional',
  initialState: null,
  reducers: {
    updateSelectedAdditional: (state, action) => {
      return action.payload;
    },
  },
});

const totalAmountVisaBundleSlice = createSlice({
  name: 'totalAmountVisaBundle',
  initialState,
  reducers: {
    updateTotalAmountVisaBundle: (state, action) => {
      return action.payload;
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
    totalAmount: totalAmountSlice.reducer,
    referenceNumber: referenceNumberSlice.reducer,
    sponsorBackground: sponsorBackgroundSlice.reducer,
    companion: companionSlice.reducer,
    visitingCountry: visitingCountrySlice.reducer,
    dailyBudget: dailyBudgetSlice.reducer,
    entireBudget: entireBudgetSlice.reducer,
    whatsappInfo: whatsappInfoSlice.reducer,
    facebookInfo: facebookInfoSlice.reducer,
    backgroundInfo: backgroundInfoSlice.reducer,
    selectedVisa: selectedVisaSlice.reducer,
    selectedSponsor: selectedSponsorSlice.reducer,
    startDate: startDateSlice.reducer,
    endDate: endDateSlice.reducer,
    selectedBundle: selectedBundleSlice.reducer,
    selectedAdditional: selectedAdditionalSlice.reducer,
    totalAmountVisaBundle: totalAmountVisaBundleSlice.reducer,
  },
});

export const { updateRequirements } = requirementsSlice.actions;
export const { updateDestination } = destinationSlice.actions;
export const { updatedeliveryEmailAddress } = deliveryEmailAddressSlice.actions;
export const { updatetravelerName} = travelerNameSlice.actions;
export const { updatetravelerFlightDetails } = travelerFlightDetailsSlice.actions;
export const { updateflightDate } = flightDateSlice.actions;
export const { updatetotalAmount } = totalAmountSlice.actions;
export const { updatereferenceNumber } = referenceNumberSlice.actions;
export const { updateSponsorBackground } = sponsorBackgroundSlice.actions;
export const { updateCompanion } = companionSlice.actions;
export const { updateVisitingCountry } = visitingCountrySlice.actions;
export const { updateDailyBudget } = dailyBudgetSlice.actions;
export const { updateEntireBudget } = entireBudgetSlice.actions;
export const { updateWhatsappInfo } = whatsappInfoSlice.actions;
export const { updateFacebookInfo } = facebookInfoSlice.actions;
export const { updateBackgroundInfo } = backgroundInfoSlice.actions;
export const { updateSelectedVisa } = selectedVisaSlice.actions;
export const { updateSelectedSponsor } = selectedSponsorSlice.actions;
export const { updateStartDate } = startDateSlice.actions;
export const { updateEndDate } = endDateSlice.actions;
export const { updateSelectedBundle } = selectedBundleSlice.actions;
export const { updateSelectedAdditional } = selectedAdditionalSlice.actions;
export const { updateTotalAmountVisaBundle } = totalAmountVisaBundleSlice.actions;


export const selectEndDate = (state) => state.endDate.endDate;
export const selectStartDate = (state) => state.startDate.startDate;
export const selectflightDate = (state) => state.flightDate.flightDate;


export default store;
