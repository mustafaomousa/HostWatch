import { fetch } from './csrf';

const initialState = { };

const getVehicles = (vehicles) => {
    return {
      type: "SET_VEHICLES",
      payload: {vehicles},
    };
};

export const getHostVehicles = (id) => async (dispatch) => {
    const response = await fetch(`/api/vehicle/${id}`);

    if (response.ok) dispatch(getVehicles(response.data));
    console.log(response)
    
    return response;
  };


const vehicleReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "SET_VEHICLES":
        newState = {...action.payload.vehicles}
        return newState;
    default:
      return state;
  }
};

export default vehicleReducer;