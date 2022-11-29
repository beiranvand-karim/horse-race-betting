import { useFetchBetsByType } from '../hooks';
import { BetTypeSelect, UpcomingOrExpiredBetsCards } from '../components';
import styled from 'styled-components';
import { Alert, Card, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';

const VisibleContentContainer = styled.div`
  max-width: 1344px;
  margin-left: auto;
  margin-right: auto;
`;

const CardStyled = styled(Card)`
  margin-top: 70px;
`;

const CardContentStyled = styled(CardContent)`
  background-color: #eee;
`;

const AlertStyled = styled(Alert)`
  width: 624px;
  margin-top: 16px;
`;

export const HomePage = () => {
  const [betType, setBetType] = useState('V75');
  const { fetchBets, bets, betsError, betsLoading } = useFetchBetsByType();

  const handleChange = (event) => {
    const { value } = event.target;
    setBetType(value);
    fetchBets(value);
  };

  useEffect(() => {
    fetchBets('V75');
  }, []);

  return (
    <VisibleContentContainer>
      <CardStyled>
        <CardContentStyled>
          <BetTypeSelect betType={betType} handleChange={handleChange} />
          {betsError && <AlertStyled severity="error">{betsError}</AlertStyled>}
          {betsLoading && <AlertStyled severity="info">Bets are loading ...</AlertStyled>}
          {bets && (
            <UpcomingOrExpiredBetsCards
              betsError={betsError}
              betsLoading={betsLoading}
              bets={bets}
            />
          )}
        </CardContentStyled>
      </CardStyled>
    </VisibleContentContainer>
  );
};
