import * as React from 'react';
import { connect } from 'react-redux';
import { MembersState } from '../../reducer';
import { MemberListPage } from './page.members';
//import { getMembersListVM, getServerError } from './selectors';
import { MemberEntity } from "../../model/member";
import { fetchMembers, clearMember } from '../../actions';

const mapStateToProps = (state: MembersState) => ({
  members: state.members,
  serverError: state.serverError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMembers: (organization: string) => {
    return dispatch(fetchMembers(organization));
  },
  clearMembers: () => {
    return dispatch(clearMember());
  }
});

interface Props {
  members: MemberEntity[];
  serverError: string | null;
  clearMembers: () => void;
  fetchMembers: (organization: string) => void;
}

const PageContainer: React.FunctionComponent<Props> = React.memo((props) => {
  const { members, serverError, fetchMembers, clearMembers } = props;
 //   React.useEffect(fetchMembers,[]);
  return <MemberListPage members={members} fetchMembers={fetchMembers} serverError={serverError} clearMembers={clearMembers}/>
});

export const MemberListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
