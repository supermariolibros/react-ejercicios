import { Reducer } from 'redux';
import { MemberEntity } from '../model/member';
import { BaseAction } from '../actions';
import { actionIds } from '../actions/actionsIds';

export interface MembersState {
  members: MemberEntity[];
  memberDetail: MemberEntity;
  page: number;
  serverError: string | null;
}

const createInitialState = (): MembersState => ({
  members: [],
  memberDetail: { 
    id: -1,
    login: '',
    avatar_url: '',
  },
  page: 0,
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
    case actionIds.UPDATE_PAGE:
      return handlePage(state, action.payload);
    case actionIds.FETCH_MEMBERS_DETAILS:
      return handleFetchMembersDetails(state, action.payload);
    default:
      return state;
  }
};

const handlePage = (state: MembersState, page: number): MembersState => ({
  ...state,
  page,
});

const handleFetchMembersSuccess = (state: MembersState, members: MemberEntity[]): MembersState => ({
  ...state,
  members,
  page:0,
  
});

const handleFetchMembersError = (state: MembersState, error: string): MembersState => ({
  ...state,
  serverError: error,
});

const handleFetchMembersDetails = (state: MembersState, memberDetail: MemberEntity): MembersState => ({
 ...state, 
 memberDetail,
});


