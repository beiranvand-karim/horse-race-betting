import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

export const HorseDetailedInformation = ({ horse }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Trainer</TableCell>
              <TableCell>Father</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {horse.trainer.firstName} {horse.trainer.lastName}
              </TableCell>
              <TableCell>{horse.pedigree.father.name}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
