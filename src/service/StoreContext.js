import React, { useReducer, createContext } from 'react';
import { StoreReducer } from './StoreReducer';
const MainContext = createContext();

const initialState = {
    cartMap: new Map(),
    orderInfo: {},
    currentCity: {},
    cityList: [],
    districts: [],
    times: [],
    profile: {},
    suggestions: [],
    currentUserID: '',
    isChangeCity: false,
};
const resetState = { cartMap: new Map(), orderInfo: {}, districts: [], times: [] };

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StoreReducer, initialState);

    const addAccount = payload => {
        dispatch({ type: 'ADD_ACCOUNT', payload });
    };

    const contextValues = {
        addAccount,
        ...state,
    };
    //console.log('!!!!!!!!!!! bichi contextValues ' + JSON.stringify(contextValues));
    return <MainContext.Provider value={contextValues}>{children}</MainContext.Provider>;
};

export { StoreProvider, MainContext };
