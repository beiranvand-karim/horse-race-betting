import { Alert, Card, CardContent, Typography } from '@mui/material';
import { BetChildrenNestedCollections } from './BetChildrenNestedCollections';
import styled from 'styled-components';

const AlignCardsSideBySide = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  justify-content: space-between;
`;

export const StretchToFillAllAvailableSpace = styled.div`
  width: 100%;
`;

const MarginProviderForSecondCard = styled.div`
  width: 50%;
  &:nth-child(2) {
    margin-left: 16px;
  }
`;

export const UpcomingOrExpiredBetsCards = ({ betsError, betsLoading, bets }) => {
  const numerableBetsGroupedByTime =
    bets &&
    (() => {
      let accumulator = [];
      if (bets.results) {
        accumulator = [{ id: 1, title: 'RESULTS', bets: bets.results }];
      }
      if (bets.upcoming) {
        accumulator = [...accumulator, { id: 2, title: 'UPCOMING', bets: bets.upcoming }];
      }
      return accumulator;
    })();

  return (
    <AlignCardsSideBySide>
      {numerableBetsGroupedByTime &&
        numerableBetsGroupedByTime.map((timeGroupedBetCollection) => {
          return (
            <MarginProviderForSecondCard key={timeGroupedBetCollection.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {timeGroupedBetCollection.title}
                  </Typography>
                  <StretchToFillAllAvailableSpace>
                    {timeGroupedBetCollection.bets.map((bet) => (
                      <BetChildrenNestedCollections bet={bet} key={bet.id} />
                    ))}
                  </StretchToFillAllAvailableSpace>
                </CardContent>
              </Card>
            </MarginProviderForSecondCard>
          );
        })}
    </AlignCardsSideBySide>
  );
};
