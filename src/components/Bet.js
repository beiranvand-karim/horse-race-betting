import { useFetchGameById } from '../hooks';
import { Race } from './Race';
import { useState } from 'react';
import styled from 'styled-components';

const MarginFromLeft = styled.div`
  margin-left: 70px;
`;

export const Bet = ({ bet }) => {
  const { game, gameError, gameLoading } = useFetchGameById(bet.id);
  const [showRace, setShowRaces] = useState(true);

  return (
    <>
      <hr />

      {gameError && <div>{gameError}</div>}
      {gameLoading && <div>game is loading ...</div>}
      <div>
        <div>startTime: {bet.startTime}</div>
        <div
          onClick={() => {
            setShowRaces((value) => !value);
          }}>
          type: {bet.id}
        </div>

        {showRace && (
          <>
            {game?.races && (
              <MarginFromLeft>
                {game.races.map((race) => (
                  <Race key={race.id} race={race} />
                ))}
              </MarginFromLeft>
            )}
          </>
        )}
      </div>
    </>
  );
};
