import styled from 'styled-components';

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
