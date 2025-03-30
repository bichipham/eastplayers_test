import React, { useReducer, createContext } from "react";
import { StoreReducer } from "./StoreReducer";
import { fetchAPI } from "./apiService";
const MainContext = createContext();

const initialState = {
  listContact: [],
  currentAppointment: {}
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const dispatchAddContact = ({ data, callback, handleError }) => {
    console.log("!!!!! dispatch ADD contact");
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
    console.log("!!!!! dispatchGetListContact");
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
      type: `GET_SUBMIT_CLIENT`,
      payload: client,
    });
  }

  const dispatchGetVehicleInfo = () => {
    console.log("!!!!! dispatchGetVerhicleInfo");
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

  const contextValues = {
    dispatchGetListContact,
    dispatchGetVehicleInfo,
    dispatchAddContact,
    dispatchSubmitClient,
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
