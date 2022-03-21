import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EnhancedTableHead from "./tableSection";
import LineRechartComponent from "./linechart";
import PieRechartComponent from "./piechart";
import PieComponent from "./piechartRate.js";
import BarChartComponent from "./barchart";
import CustomBarChart from "./customBarchart";
import LineComponent from "./singlestrokelinechart";
import ActiveShapePie from "./activeshapePie";
const styles = (theme) => ({});

function ChartsPage(props) {
  const { classes } = props;
  const [showDetails, setshowDetails] = React.useState(0);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    { showDetails === 0 ? <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          // direction="row"
          // justifyContent="center"
          // alignItems="center"
        >
          <Grid item lg={4}>
            <Button>
              <Paper elevation={2} sx={{}}>
                Project branchng strategy
                <LineRechartComponent />
              </Paper>
            </Button>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={4}>
            <Button>
              <Paper elevation={2} sx={{}}>
                Project failure rate/ success rate
                <PieComponent />
              </Paper>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button>
              <Paper elevation={2} sx={{}}>
                project with least stages
                <BarChartComponent />
              </Paper>
            </Button>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={4}>
            
              <Paper elevation={2} sx={{}}>
                project with/without pipeline -
                <CustomBarChart />
                <Button onClick={() => setshowDetails(1)}> View deails
            </Button>                
              </Paper>              
              </Paper>              
          </Grid>
          <Grid item lg={6}>
            <Button>
              <Paper elevation={2} sx={{}}>
              Project last use pipelie                 
                <LineComponent />
              </Paper>
            </Button>
          </Grid>
        </Grid>
      </Box>
      </> :
      <>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Domain 1" value="1" />
            <Tab label="Domain 2" value="2" />
            <Tab label="Domain 3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Grid
          container
        >
          <Grid item lg={4}>
            <Button>
              <Paper elevation={2} sx={{}}>
              
          <ActiveShapePie />
            Services within Domain 1
              </Paper>
            </Button>
          </Grid>
          <Grid item lg={4}>
            <EnhancedTableHead />
          </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">Domain 2</TabPanel>
        <TabPanel value="3">Domain 3</TabPanel>
      </TabContext>
    </Box>
      </>}
    </>
  );
}
export default withStyles(styles)(ChartsPage);
