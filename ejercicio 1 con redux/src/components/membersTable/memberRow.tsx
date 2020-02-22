import * as React from 'react';
import {MemberEntity} from '../../model/member';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export const MemberRow = (props: {member : MemberEntity}) => {
  const history = useHistory();
return (
      <TableRow hover onClick={() => history.push(`member/${props.member.login}`)}>
         <TableCell>
           <img src={props.member.avatar_url} style ={{maxWidth: '10rem'}}/>
         </TableCell>
         <TableCell>
           {props.member.id}
         </TableCell>
         <TableCell>
           {props.member.login}
         </TableCell>
       </TableRow>);

}