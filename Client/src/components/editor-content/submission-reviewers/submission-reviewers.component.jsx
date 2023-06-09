import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   '&:last-child td, &:last-child th': {
      border: 0,
   },
}));

function createData(manuscriptId, manuscriptTitle, submission, submissionDate, approvalDate, reviewers, action) {
   return { manuscriptId, manuscriptTitle, submission, submissionDate, approvalDate, reviewers, action };
}

const rows = [
   createData(12, 'Deep Generative Models for Synthetic Medical Image Generation', <Link style={{color: 'blue', textDecoration: 'underline'}}>view submission</Link>, "20-04-2023", "21-04-2023", <Link style={{color: 'blue', textDecoration: 'underline'}}>Select Reviewers</Link>, 
   <div> 
   <Button variant="contained" color="success">
      Submit
   </Button>
</div> ),
   createData(14, 'Addressing the Challenges of Medical Image Registration', <Link style={{color: 'blue', textDecoration: 'underline'}}>view submission</Link>, "20-04-2023", "21-04-2023", <Link style={{color: 'blue', textDecoration: 'underline'}}>Select Reviewers</Link>, 
   <div> 
   <Button variant="contained" color="success">
      Submit
   </Button>
</div> ),
];

export default function SubmissionReviewers() {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell align='center'>Manuscript ID</StyledTableCell>
                  <StyledTableCell align='center'>Manuscript Title</StyledTableCell>
                  <StyledTableCell align='center'>Submission</StyledTableCell>
                  <StyledTableCell align='center'>Submitting Date</StyledTableCell>
                  <StyledTableCell align='center'>Approval Date</StyledTableCell>
                  <StyledTableCell align='center'>Reviewers</StyledTableCell>
                  <StyledTableCell align='center'>Action</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                     <StyledTableCell align='center'>{row.manuscriptId}</StyledTableCell>
                     <StyledTableCell align='center'>{row.manuscriptTitle}</StyledTableCell>
                     <StyledTableCell align='center'>{row.submission}</StyledTableCell>
                     <StyledTableCell align='center'>{row.submissionDate}</StyledTableCell>
                     <StyledTableCell align='center'>{row.approvalDate}</StyledTableCell>
                     <StyledTableCell align='center'>{row.reviewers}</StyledTableCell>
                     <StyledTableCell align='center'>{row.action}</StyledTableCell>
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
