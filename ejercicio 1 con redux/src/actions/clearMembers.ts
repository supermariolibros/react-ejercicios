import { actionIds } from './actionsIds';

export const clearMember = () => (dispatch) => (
     dispatch(clearMemberAction())
  );


  export const clearMemberAction = () => ({
    type: actionIds.CLEAR_TABLE,
    payload: [],
  });