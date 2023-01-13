import { ControlSpacingBetweenGroupedPanels } from './definitions';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import styled from 'styled-components';
import { useState } from 'react';
import {
  Accordion as MaterialAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material';

export const AlignVoidFillerAndRacePanels = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EmptinessOnLeftSideOfPanels = styled.div`
  width: 60px;
  background-color: #eee;
`;

export const StretchToFillAllAvailableSpace = styled.div`
  width: 100%;
`;

export const ListOfExpandableAndRetractableElements = ({
  children,
  size,
  primaryText,
  secondaryText,
  emptyRoomOnLeftSide,
  noSpaceAround
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordion = (
    <MaterialAccordion expanded={expanded === 'panel'} onChange={handleChange('panel')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: `${size}%`, flexShrink: 0 }}>{primaryText}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{secondaryText}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {emptyRoomOnLeftSide ? (
          <AlignVoidFillerAndRacePanels>
            <EmptinessOnLeftSideOfPanels />
            <StretchToFillAllAvailableSpace>{children}</StretchToFillAllAvailableSpace>
          </AlignVoidFillerAndRacePanels>
        ) : (
          children
        )}
      </AccordionDetails>
    </MaterialAccordion>
  );

  return noSpaceAround ? (
    accordion
  ) : (
    // Wouldn't be necessary if I could add the styles to Accordion through styled components.
    // @mui library is not so compatible with styled components yet. So it might have been better to use another component library
    <ControlSpacingBetweenGroupedPanels>{accordion}</ControlSpacingBetweenGroupedPanels>
  );
};
