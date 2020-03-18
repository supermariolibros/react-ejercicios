import { actionIds } from './actionsIds';

export const setPage = (page: Number) => ({
    type: actionIds.UPDATE_PAGE,
    payload: page,
  });
