import { ControlSpacingBetweenGroupedPanels, formattedStartTime } from './definitions';
import { useFetchGameById } from '../hooks';
import styled from 'styled-components';
import { Alert } from '@mui/material';
import { ListOfExpandableAndRetractableElements } from './ListOfExpandableAndRetractableElements';
import { HorseDetailedInformation } from './HorseDetailedInformation';

const AlertStyled = styled(Alert)`
  width: 598px; // keep the panel and alert sizes fitting as data is being loaded
`;

const FixMarginForCategorizedByTrackGroups = styled.div`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const BetChildrenNestedCollections = ({ bet }) => {
  const { game, gameError, gameLoading } = useFetchGameById(bet.id);

  const racesCategorizedByTrackName =
    game &&
    (() => {
      // this could be done in a more pure functional way
      const racesPartitionedByTrackName = [];
      for (const track of bet.tracks) {
        const racesWithMatchingTracks = game.races.filter((race) => race.track.name === track.name);
        racesPartitionedByTrackName.push({ category: track.name, races: racesWithMatchingTracks });
      }
      return racesPartitionedByTrackName;
    })();

  return (
    <ControlSpacingBetweenGroupedPanels>
      {gameError && <AlertStyled severity="error">{gameError}</AlertStyled>}
      {gameLoading && <AlertStyled severity="info">Game is loading ...</AlertStyled>}
      {racesCategorizedByTrackName?.length > 0 &&
        racesCategorizedByTrackName.map((categorizedRaceCollection) => (
          <FixMarginForCategorizedByTrackGroups key={categorizedRaceCollection.category}>
            <ListOfExpandableAndRetractableElements
              noSpaceAround
              key={categorizedRaceCollection.category}
              size="20"
              primaryText={categorizedRaceCollection.category}
              secondaryText={formattedStartTime(bet.startTime)}
              emptyRoomOnLeftSide>
              {categorizedRaceCollection.races.map((race) => (
                <ListOfExpandableAndRetractableElements
                  key={race.id}
                  size="67"
                  primaryText={`${race.number} ${race.name || '[ Race name is missing ... ]'}`}
                  secondaryText={formattedStartTime(race.startTime)}
                  emptyRoomOnLeftSide>
                  {race.starts.map((start) => (
                    <ListOfExpandableAndRetractableElements
                      key={start.number}
                      size="50"
                      start={start}
                      primaryText={`${start.number} - ${start.horse.name.toUpperCase()}`}
                      secondaryText={`${start.driver.firstName} - ${start.driver.lastName}`}>
                      <HorseDetailedInformation horse={start.horse} />
                    </ListOfExpandableAndRetractableElements>
                  ))}
                </ListOfExpandableAndRetractableElements>
              ))}
            </ListOfExpandableAndRetractableElements>
          </FixMarginForCategorizedByTrackGroups>
        ))}
    </ControlSpacingBetweenGroupedPanels>
  );
};
