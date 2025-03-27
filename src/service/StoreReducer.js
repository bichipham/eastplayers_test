

export const StoreReducer = (state, action) => {
    let newCart = {};
    let newState = {};
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return {
                ...state,
            };
        default:
            return state;
    }
};
