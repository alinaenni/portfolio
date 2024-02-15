import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const theme = createTheme({
    components: {
      MuiTimelineContent: {
        styleOverrides: {
          root: {
            fontFamily: 'Crimson Text',
            fontSize: '1.9rem',
            textShadow: '1px 1px 2px #000',
            color: '#d8d8d8',
            backgroundColor: 'transparent', // Set the background color globally
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h6: {
            textTransform: 'uppercase',
          },
        },
      },
      MuiTimelineDot: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiTimelineConnector: {
        styleOverrides: {
          root: {
            borderColor: 'white', // Color of the connector
            width: '0.20vw', // Thickness of the connector
            minHeight: '12vh', // Length of the connector
          },
        },
      },
    },
  });

export default function AlternateTimeline() {
  return (
    <ThemeProvider theme={theme}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>

            <TimelineDot>
              <SchoolOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">February 2024</Typography>
            MA Linguistic Diversity and Digital Humanities<br />
            <Typography variant="h5">University of Helsinki</Typography>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
        <TimelineDot>
              <FavoriteBorderOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">December 2023</Typography>
          Learning to build with React
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot>
              <WorkOutlineOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">June 2023</Typography>
          Technical Writer<br />
          <Typography variant="h5">FA Solutions</Typography></TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot>
              <WorkOutlineOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">March 2022</Typography>
          Technical Communication Trainee<br />
          <Typography variant="h5">Nokia</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot>
              <WorkOutlineOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">October 2021</Typography>
          Think Corner Host<br />
          <Typography variant="h5">Think Corner</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
        <TimelineDot>
              <SchoolOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">May 2021</Typography>
          MA Linguistics and English Language<br />
          <Typography variant="h5">University of Edinburgh</Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </ThemeProvider>
  );
}

