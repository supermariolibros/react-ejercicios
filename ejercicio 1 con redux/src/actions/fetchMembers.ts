import { actionIds } from './actionsIds';
import { memberAPI } from '../api/memberAPI';
import {MemberEntity } from '../model/member';
import { trackPromise} from 'react-promise-tracker';

export const fetchMembers = (organization: string) => (dispatch) => (
  trackPromise( 
  memberAPI.getAllMembers(organization)
    .then((members) => dispatch(fetchMembersCompleted(members)))
    .catch((error) => {
        dispatch(fetchMembersFailed(error));
      }))
);

const fetchMembersCompleted = (members: MemberEntity[]) => ({
  type: actionIds.UPDATE_MEMBERS,
  payload: members,
});

const fetchMembersFailed = (error) => ({
    type: actionIds.FETCH_MEMBERS_ERROR,
    payload: error.message,
  });
