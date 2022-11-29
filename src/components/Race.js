import { Start } from './Start';
import styled from 'styled-components';
import { useState } from 'react';

const MarginFromLeft = styled.div`
  margin-left: 70px;
`;

export const Race = ({ race }) => {
  const [showStarts, setShowStarts] = useState(false);
  const clickHandler = () => {
    setShowStarts((value) => !value);
  };
  return (
    <div>
      <div onClick={clickHandler}>
        {race.number} - {race.name} - {race.startTime}
      </div>
      {showStarts && (
        <>
          {race?.starts && (
            <MarginFromLeft>
              {race.starts.map((start) => (
                <Start key={start.number} start={start} />
              ))}
            </MarginFromLeft>
          )}
        </>
      )}
    </div>
  );
};
