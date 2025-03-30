export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST_CONTACT": {
      return {
        ...state,
        listContact: action.payload,
      };
    }
    case "GET_VEHICLE_INFO": {
      return {
        ...state,
        vehicleInfo: action.payload,
      };
    }
    case "GET_SUBMIT_CLIENT": {
      return {
        ...state,
        currentAppointment: { ...state.currentAppointment, client: action?.payload },
      };
    }
    default:
      return state;
  }
};
