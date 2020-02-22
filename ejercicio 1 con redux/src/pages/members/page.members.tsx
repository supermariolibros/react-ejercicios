import * as React from 'react';
import { MembersTableComponent } from '../../components';
import { MemberEntity } from "../../model/member";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { clearMember } from '../../actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

interface Props {
  serverError: string | null;
  fetchMembers: (organization: string) => void;
  clearMembers: ()=> void;
  members: MemberEntity[];
}

export const MemberListPage: React.FunctionComponent<Props> = ({ members, serverError, fetchMembers, clearMembers }) => (
  <>
    {serverError ? <Alert severity="error">Algo no ha ido bien! ERROR: {serverError}</Alert> : null}
    <MembersTableComponent members={members} fetchMembers={fetchMembers} clearMembers={clearMembers} />
  </>
);
