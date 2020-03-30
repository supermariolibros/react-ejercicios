import * as React from 'react';
import { connect } from 'react-redux';
import { MembersState } from '../../reducer';
import { MemberListPage } from './page.members';
//import { getMembersListVM, getServerError } from './selectors';
import { MemberEntity } from "../../model/member";
import { fetchMembers, clearMember, setPage } from '../../actions';

const mapStateToProps = (state: MembersState) => ({
  members: state.members,
  serverError: state.serverError,
  page: state.page,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMembers: (organization: string) => {
    return dispatch(fetchMembers(organization));
  },
  clearMembers: () => {
    return dispatch(clearMember());
  }, 
  updateTable: (page: number) => {
    return dispatch(setPage(page));
  }
});

interface Props {
  members: MemberEntity[];
  page: number;
  serverError: string | null;
  clearMembers: () => void;
  fetchMembers: (organization: string) => void;
  updateTable: (page: number) => void;
}

const PageContainer: React.FunctionComponent<Props> = React.memo((props) => {
  const { members, serverError, fetchMembers, clearMembers, page, updateTable } = props;
  return <MemberListPage members={members} 
                         fetchMembers={fetchMembers}
                         serverError={serverError}
                         clearMembers={clearMembers}
                         page={page}
                         updateTable={updateTable}/>
});

export const MemberListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
