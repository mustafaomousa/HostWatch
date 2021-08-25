import { fetch } from './csrf';

const initialState = { };

const getVehicles = (vehicles) => {
    return {
      type: "SET_VEHICLES",
      payload: {vehicles},
    };
};

const newVehicle = (vehicle) => {
  return {
    type: "ADD_VEHICLE",
    payload: {vehicle}
  };
};

export const getHostVehicles = (id) => async (dispatch) => {
    const response = await fetch(`/api/vehicle/${id}`);

    if (response.ok) dispatch(getVehicles(response.data));
    
    return response;
  };

export const addHostVehicle = (year, make, model, startingMileage, picturesUrl, userId) => async (dispatch) => {
  const response = await fetch('/api/vehicle', {
    method: "POST",
    body: JSON.stringify({
      year,
      make,
      model,
      startingMileage,
      picturesUrl,
      userId
    })
  });

  if (response.ok) dispatch(newVehicle(response.data));

  return response;
}


const vehicleReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "SET_VEHICLES":
        newState = {};
        action.payload.vehicles.map((vehicle) => newState[vehicle.id] = vehicle)
        return newState;
    case "ADD_VEHICLE":
      let vehicleId = action.payload.vehicle.id
      newState = {...state};
      newState[vehicleId]= action.payload.vehicle;
      return newState;
    default:
      return state;
  }
};

export default vehicleReducer;