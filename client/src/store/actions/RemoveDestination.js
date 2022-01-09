import { REMOVE_DESTINATION } from '../types';

export const RemoveDestination = (index) => ({
  type: REMOVE_DESTINATION,
  payload: index
});
