import { NEW_DESTINATION } from '../types';

export const CreateNewTodo = (formval) => ({
  type: NEW_DESTINATION,
  payload: formval
});
