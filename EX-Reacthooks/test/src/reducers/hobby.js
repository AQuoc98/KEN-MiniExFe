const initialState = {
  lists: [],
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_HOBBY":
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default hobbyReducer;
