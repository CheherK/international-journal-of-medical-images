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

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData(1, 'Enhancing Diagnostic Accuracy in Radiology', <Link style={{color: 'blue', textDecoration: 'underline'}}>view submission</Link>, "20-05-2023", 
   <div> 
   <Button variant="contained" color="success">
      Accept
   </Button>
   <Button variant="contained" color="error">
      Reject
   </Button>
</div> ),
   createData(2, 'Computer-Aided Detection and Diagnosis of Abnormalities in Medical Images', <Link style={{color: 'blue', textDecoration: 'underline'}}>view submission</Link>, "23-05-2023", 
   <div> 
   <Button variant="contained" color="success">
      Accept
   </Button>
   <Button variant="contained" color="error">
      Reject
   </Button>
</div> ),
   createData(3, 'Exploring the Role of Artificial Intelligence in Medical Imaging', <Link style={{color: 'blue', textDecoration: 'underline'}}>view submission</Link>, "23-05-2023", 
   <div> 
   <Button variant="contained" color="success">
      Accept
   </Button>
   <Button variant="contained" color="error">
      Reject
   </Button>
</div> ),
];

export default function CustomizedTables() {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
               <TableRow>
                  <StyledTableCell align='center'>Manuscript ID</StyledTableCell>
                  <StyledTableCell align='center'>Manuscript Title</StyledTableCell>
                  <StyledTableCell align='center'>Submission</StyledTableCell>
                  <StyledTableCell align='center'>Invitation Date</StyledTableCell>
                  <StyledTableCell align='center'>Action</StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                     <StyledTableCell align='center'>{row.name}</StyledTableCell>
                     <StyledTableCell align='center'>{row.calories}</StyledTableCell>
                     <StyledTableCell align='center'>{row.fat}</StyledTableCell>
                     <StyledTableCell align='center'>{row.carbs}</StyledTableCell>
                     <StyledTableCell align='center'>{row.protein}</StyledTableCell>
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
