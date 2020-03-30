import * as React from "react";
import { MemberEntity } from "../../model/member";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { TablePaginationActions } from "./tableWithPagination";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import { InnerSpinner } from "../spinner";

export interface PropsTable {
  members: MemberEntity[];
  page: number;
  fetchMembers: (organization: string) => void;
  clearMembers: () => void;
  updateTable: (page: number) => void;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: "60%"
  },
  button: {
    margin: "2 em",
  },
});

export const MembersTableComponent: React.FunctionComponent<PropsTable> = (props: PropsTable) => {
  const [organization, setOrganizarion] = React.useState<string>("lemoncode");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    props.updateTable(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    props.updateTable(0);
  };

  const classes = useStyles();

  const loadMembers = () => {
      props.fetchMembers(organization)
  };

  const clearTheTable = () => {
   props.clearMembers();
  }

  return (
    <div className="row">
      <h2> Members Page</h2>
      <TextField 
        id="standard-basic" 
        label="Organization" 
        onChange={event => setOrganizarion(event.target.value)}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />} 
        onClick={loadMembers}>Update the table</Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
       onClick={clearTheTable}>Clear the table</Button>
       
      <TableContainer component={Paper}>
      <InnerSpinner/>
        <Table className={classes.table}>
          <TableHead>
            <MemberHead />
          </TableHead>
          <TableBody>
          {(rowsPerPage > 0
            ? props.members.slice(props.page * rowsPerPage, props.page * rowsPerPage + rowsPerPage)
            : props.members
          ).map((member: MemberEntity) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={props.members.length}
              rowsPerPage={rowsPerPage}
              page={props.page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};
