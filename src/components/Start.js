import { Horse } from './Horse';
import styled from 'styled-components';
import { useState } from 'react';

const MarginFromLeft = styled.div`
  margin-left: 70px;
`;

export const Start = ({ start }) => {
  const [showHorseInfo, setShowHorseInfo] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setShowHorseInfo((value) => !value);
        }}>
        {start.number} {start.horse.name.toUpperCase()} - {start.driver.firstName}{' '}
        {start.driver.lastName}
      </div>
      {showHorseInfo && (
        <MarginFromLeft>
          <Horse horse={start.horse} />
        </MarginFromLeft>
      )}
    </div>
  );
};
