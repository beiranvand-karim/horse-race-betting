import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import styled from 'styled-components';

export const formattedStartTime = (startTime) =>
  format(parseISO(startTime), 'HH:mm (d MMM)', {
    locale: enUS
  });

export const ControlSpacingBetweenGroupedPanels = styled.div`
  background-color: #eee;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;

  &:first-child {
    padding-top: 8px;
  }

  &:last-child {
    padding-bottom: 8px;
  }
`;
