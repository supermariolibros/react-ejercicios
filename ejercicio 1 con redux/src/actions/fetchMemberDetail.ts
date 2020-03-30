import { actionIds } from './actionsIds';
import { memberAPI } from "../api/memberAPI";

export const fetchMemberDetails = (id : string) => (dispatch) => {
    memberAPI.getAMemberDetail(id).then(member => dispatch(memberDetail(member)));
};


  export const memberDetail = (details) => ({
    type: actionIds.FETCH_MEMBERS_DETAILS,
    payload: details,
  });