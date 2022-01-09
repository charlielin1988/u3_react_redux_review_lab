import { ADD_DESTINATION, NEW_DESTINATION, REMOVE_DESTINATION } from '../types';

const initialState = {
  destinations: [],
  newDestination: ''
};

const DestinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DESTINATION:
      return {
        ...state,
        destinations: [...state.destinations, action.payload]
      };
    case NEW_DESTINATION:
      return { ...state, newDestination: action.payload };
    case REMOVE_DESTINATION:
      return { ...state };
    default:
      return { ...state };
  }
};

export default DestinationReducer;
