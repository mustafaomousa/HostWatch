import { fetch } from './csrf';

const initialState = { };

const getTrips = (trips) => {
    return {
      type: "SET_TRIPS",
      payload: { trips },
    };
};

const newTrip = (trip) => {
  return {
    type: "ADD_TRIP",
    payload: { trip }
  };
};

const deleteTrip = (tripId) => {
  return {
    type: "DELETE_TRIP",
    payload: tripId
  };
};

export const getHostTrips = (id) => async (dispatch) => {
    const response = await fetch(`/api/trip/${id}`);

    if (response.ok) dispatch(getTrips(response.data));
    
    return response;
  };

export const addHostTrip = (startDate, endDate, earnings, reinbursements, milesDriven, vehicleId, userId, receiptUrl) => async (dispatch) => {
  const response = await fetch('/api/trip', {
    method: "POST",
    body: JSON.stringify({
      startDate,
      endDate,
      earnings,
      reinbursements,
      milesDriven,
      vehicleId,
      userId,
      receiptUrl
    })
  });

  if (response.ok) dispatch(newTrip(response.data));

  return response;
}

export const deleteHostTrip = (tripId) => async (dispatch) => {
  const response = await fetch(`/api/trip/${tripId}`, {
    method: "DELETE"
  });

  if (response.ok) dispatch(deleteTrip(response.data));

  return response
};


const tripReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "SET_TRIPS":
        newState = {};
        action.payload.trips.map((trip) => newState[trip.id] = trip)
        return newState;
    case "ADD_TRIP":
      let tripId = action.payload.trip.id
      newState = {...state};
      newState[tripId]= action.payload.trip;
      return newState;
    case "DELETE_TRIP":
      newState = {...state};
      delete newState[parseInt(action.payload)]
      return newState;
    default:
      return state;
  }
};

export default tripReducer;