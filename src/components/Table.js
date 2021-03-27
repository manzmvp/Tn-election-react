import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import candidateList from '../list/candidateList.json';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    // marginTop: -350
  },
});

export default function Tables( { district } ) {

  const filterDistrict = candidateList.filter((data) => data.District === district)
  console.log(filterDistrict)
  console.log(filterDistrict[0].Candidate1)
  const classes = useStyles();


  console.log(district)

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
        <TableRow> 
          <StyledTableCell>{district}</StyledTableCell> 
        </TableRow>
        <TableRow>  
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Constituency Name</StyledTableCell>   
              <StyledTableCell align="right">Party</StyledTableCell>  
              <StyledTableCell align="right" >Candidate</StyledTableCell>
              <StyledTableCell align="right">Party</StyledTableCell>  
              <StyledTableCell align="right" >Candidate</StyledTableCell>
              <StyledTableCell align="right">Party</StyledTableCell>  
              <StyledTableCell align="right" >Candidate</StyledTableCell>
              <StyledTableCell align="right">Party</StyledTableCell>  
              <StyledTableCell align="right" >Candidate</StyledTableCell>
              <StyledTableCell align="right">Party</StyledTableCell>  
              <StyledTableCell align="right" >Candidate</StyledTableCell>    
            </TableRow>  
        {/* <TableRow>
          <StyledTableCell align="center">Assembly Constituency	</StyledTableCell>
        </TableRow>
          <TableRow>
            <StyledTableCell >Assembly Constituency	</StyledTableCell>
            <StyledTableCell align="right">NDA</StyledTableCell>
            <StyledTableCell align="right">SPA</StyledTableCell>
            <StyledTableCell align="right">AMMK+</StyledTableCell>
            <StyledTableCell align="right">MNM+</StyledTableCell>
            <StyledTableCell align="right">NTK</StyledTableCell<StyledTableCell align="right">{row.Party1}</StyledTableCell>
              <StyledTableCell align="right">{row.Candidate1}</StyledTableCell>yledTableCell>
          </TableRow> */}
        </TableHead>
        <TableBody>
        {filterDistrict.map((row) => (
            <StyledTableRow key={row.Constituency}>
              <StyledTableCell component="th" scope="row">
                {row.Constituency}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.Party1}</StyledTableCell>
              <StyledTableCell align="right">{row.Candidate1}</StyledTableCell>
              <StyledTableCell align="right">{row.Party2}</StyledTableCell>
              <StyledTableCell align="right">{row.Candidate2}</StyledTableCell>
              <StyledTableCell align="right">{row.Party3}</StyledTableCell>
              <StyledTableCell align="right">{row.Candidate3}</StyledTableCell>
              <StyledTableCell align="right">{row.Party4}</StyledTableCell>
              <StyledTableCell align="right">{row.Candidate4}</StyledTableCell>
              <StyledTableCell align="right">{row.Party5}</StyledTableCell>
              <StyledTableCell align="right">{row.Candidate5}</StyledTableCell>
              
            </StyledTableRow>
          ))}
          
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{district}</StyledTableCell>
            </StyledTableRow>
          ))}
           */}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
