export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST_CONTACT": {
			return {
        ...state,
				listContact: action.payload
      };
    }
    default:
      return state;
  }
};
