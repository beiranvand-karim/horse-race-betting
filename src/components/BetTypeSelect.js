import { FormControl, InputLabel, MenuItem, Select as MaterialSelect } from '@mui/material';
import styled from 'styled-components';

const FormControlStyled = styled(FormControl)`
  width: 300px;
  background-color: white;
`;

export const BetTypeSelect = ({ betType, handleChange }) => {
  return (
    <FormControlStyled>
      <InputLabel id="select-label">Choose a bet type</InputLabel>
      <MaterialSelect
        labelId="select-label"
        id="select"
        value={betType}
        label="Choose a bet type"
        onChange={handleChange}>
        <MenuItem value="V75">V75</MenuItem>
        <MenuItem value="V86">V86</MenuItem>
        <MenuItem value="GS75">GS75</MenuItem>
      </MaterialSelect>
    </FormControlStyled>
  );
};
