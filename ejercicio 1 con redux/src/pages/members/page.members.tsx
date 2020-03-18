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
  members: MemberEntity[];
  page: number;
  serverError: string | null;
  clearMembers: () => void;
  fetchMembers: (organization: string) => void;
  updateTable: (page: number) => void;
}

export const MemberListPage: React.FunctionComponent<Props> = ({ members, serverError, fetchMembers, clearMembers, page, updateTable }) => (
  <>
    {serverError ? <Alert severity="error">Algo no ha ido bien! ERROR: {serverError}</Alert> : null}
    <MembersTableComponent members={members}
                           fetchMembers={fetchMembers}
                           clearMembers={clearMembers}
                           page={page}
                           updateTable={updateTable}/>
  </>
);
