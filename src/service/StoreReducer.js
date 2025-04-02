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
      // console.log('!!!!! SUBMIT_CLIENT ', action?.payload);
      return {
        ...state,
        currentAppointment: { ...state.currentAppointment, client: action?.payload },
      };
    }
    case "SET_STEP_APPOINTMENT": {
      // console.log('!!!!! SET_STEP_APPOINTMENT ', action?.payload);
      return {
        ...state,
        stepAppointment: action?.payload,
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
