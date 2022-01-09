import { ADD_DESTINATION } from '../types';

export const AddDestination = (destination) => ({
  type: ADD_DESTINATION,
  payload: destination
});

export const LoadDestinations = () => {
  return async (dispatch) => {
    try {
      const destinations = await GetDestinations();
      console.log(destinations);
    } catch (error) {
      throw error;
    }
  };
};
