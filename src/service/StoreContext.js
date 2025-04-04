import React, { useReducer, createContext } from "react";
import { StoreReducer } from "./StoreReducer";
import { fetchAPI } from "./apiService";
const MainContext = createContext();

const initialState = {
  listContact: [],
  currentAppointment: {},
  stepAppointment: 1
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const dispatchAddContact = ({ data, callback, handleError }) => {
    fetchAPI({
      url: "/contacts",
      payload: { method: "POST", data: data },
    })
      .then((res) => {
        if (callback) callback();
      })
      .catch((err) => {
        if (handleError) handleError(err);
      });
  };

  const dispatchGetListContact = () => {
    fetchAPI({
      url: `/contacts`,
      payload: { method: "GET" },
    }).then((res) => {
      dispatch({
        type: `GET_LIST_CONTACT`,
        payload: res,
      });
    });
  };

  const dispatchSubmitClient = (client) => {
    dispatch({
      type: `SUBMIT_CLIENT`,
      payload: client,
    });
  }

  const dispatchSubmitVehicle = (vehicle) => {
    dispatch({
      type: `SUBMIT_VEHICLE`,
      payload: vehicle,
    });
  }

  const dispatchSubmitPackage = packages => {
    dispatch({
      type: `SUBMIT_PACKAGE`,
      payload: packages,
    });
  }

  const dispatchSetStepAppointment = (step) => {
    dispatch({
      type: `SET_STEP_APPOINTMENT`,
      payload: step,
    });
  }

  const dispatchGetVehicleInfo = () => {
    fetchAPI({
      url: `/vehicleInfo`,
      payload: { method: "GET" },
    }).then((res) => {
      dispatch({
        type: `GET_VEHICLE_INFO`,
        payload: res,
      });
    });
  };

  const dispatchGetListPackage = () => {
    fetchAPI({
      url: `/packages`,
      payload: { method: "GET" },
    }).then((res) => {
      dispatch({
        type: `GET_LIST_PACKAGE`,
        payload: res,
      });
    });
  };

  const contextValues = {
    dispatchGetListContact,
    dispatchGetVehicleInfo,
    dispatchAddContact,
    dispatchSubmitClient,
    dispatchSetStepAppointment,
    dispatchGetListPackage,
    dispatchSubmitVehicle,
    dispatchSubmitPackage,
    ...state,
  };
  //console.log('!!!!!!!!!!! bichi contextValues ' + JSON.stringify(contextValues));
  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};

export { StoreProvider, MainContext };
