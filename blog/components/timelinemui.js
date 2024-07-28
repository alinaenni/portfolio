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
            fontFamily: 'Quicksand',    // Place or location
            fontSize: '1.5rem',
            color: '#a3a3a3',
            lineHeight: '3vh',
            backgroundColor: 'transparent', // Set the background color globally
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h6: {  // Month and year
            fontFamily: 'Quicksand',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'none',
            color: '#a3a3a3',
          },
          h5: {  // Accomplishment
            fontFamily: 'Quicksand',
            color: '#c7c7c7',
            textTransform: 'none',
            fontSize: '1.9rem',
            marginTop: '1.5vh',
          }
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
            width: '0.18vw', // Thickness of the connector
            minHeight: '10vh', // Length of the connector
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
            <Typography variant="h6">August 2024</Typography>
            Haaga-Helia university of applied sciences<br />
            <Typography variant="h5">Start of data processing studies</Typography>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>

            <TimelineDot>
              <SchoolOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">February 2024</Typography>
            University of Helsinki<br />
            <Typography variant="h5">Completed master's degree</Typography>
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
          <Typography variant="h6">2023</Typography>
          <Typography variant="h5">Began building projects with Figma and React</Typography>
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
          <Typography variant="h6">2022</Typography>
          University of Helsinki<br />
          <Typography variant="h5">Learned Python and R for LLM projects and data analysis</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
        <TimelineDot>
              <SchoolOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">May 2021</Typography>
          University of Edinburgh<br />
          <Typography variant="h5">Completed bachelor's degree</Typography>
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
          <Typography variant="h6">2017</Typography>
          University of Edinburgh<br />
          <Typography variant="h5">Started programming in C</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
        <TimelineDot>
              <FavoriteBorderOutlinedIcon style={{ fontSize: '3.5rem' }} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6">Middle school</Typography>
          <Typography variant="h5">Learned HTML and CSS for web development</Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </ThemeProvider>
  );
}

