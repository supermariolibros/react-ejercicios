import React from 'react';
import { fetchMemberDetails } from "../../actions";
import { MemberDetail } from "./memberDetail";
import { MembersState } from '../../reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state: MembersState) => ({
    member: state.memberDetail,
  });

const mapDispatchToProps = (dispatch) => ({
    memberToGetDetail: (name: string) => {
      return dispatch(fetchMemberDetails(name));
    },
    
  });

 const memberDetailContainer: React.FunctionComponent<any> = (props: any) => {
    const { member, memberToGetDetail} = props;
  const [userName, setUserName] = React.useState<string>();

  return <MemberDetail  username={props.match.params.username} fetchMemberDetails={memberToGetDetail} member={member}/>;
}

export const MemberDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(memberDetailContainer);
