import { Reducer } from 'redux';
import { MemberEntity } from '../model/member';
import { BaseAction } from '../actions';
import { actionIds } from '../actions/actionsIds';

export interface MembersState {
  members: MemberEntity[];
  serverError: string | null;
}

const createInitialState = (): MembersState => ({
  members: [],
  serverError: null,
});

type MembersReducer = Reducer<MembersState, BaseAction>;
export const membersReducer: MembersReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case actionIds.UPDATE_MEMBERS:
    case actionIds.CLEAR_TABLE:
      return handleFetchMembersSuccess(state, action.payload);
    case actionIds.FETCH_MEMBERS_ERROR:
      return handleFetchMembersError(state, action.payload);
    default:
      return state;
  }
};

const handleFetchMembersSuccess = (_state: MembersState, members: MemberEntity[]): MembersState => ({
  members,
  serverError: null,
});

const handleFetchMembersError = (state: MembersState, error: string): MembersState => ({
  ...state,
  serverError: error,
});


