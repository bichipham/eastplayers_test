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
    case "SUBMIT_CLIENT": {
      return {
        ...state,
        currentAppointment: { ...state.currentAppointment, client: action?.payload },
      };
    }
    case "SUBMIT_VEHICLE": {
      return {
        ...state,
        currentAppointment: { ...state.currentAppointment, vehicle: action?.payload },
      };
    }
    case "SET_STEP_APPOINTMENT": {
      return {
        ...state,
        stepAppointment: action?.payload,
      };
    }
    case "SUBMIT_PACKAGE": {
      return {
        ...state,
        currentAppointment: { ...state.currentAppointment, package: action?.payload },
      };
    }

    case "GET_LIST_PACKAGE": {
      return {
        ...state,
        listPackage: action.payload,
      };
    }
    
    default:
      return state;
  }
};
