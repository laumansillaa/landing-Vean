import * as React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, 
    TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import {Box} from '@mui/material'


export default function RoadMui() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Bienvenida</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Prueba de concepto</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>El camino</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>La expansión</TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{border: '1px solid red'}}>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>El futuro</TimelineContent>
        {/* <Box>Modelo de franquiciado: librerías asociadas.
          Gobernanza descentralizada: primer token nativo. Nuevas funciones:
          alquileres, suscripciones y más.
        </Box> */}
      </TimelineItem>
    </Timeline>
  );
}