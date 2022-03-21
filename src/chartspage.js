import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import LineRechartComponent from "./linechart";
import PieRechartComponent from "./piechart";
import PieComponent from "./piechartRate.js";
import BarChartComponent from "./barchart";
import CustomBarChart from "./customBarchart";
import LineComponent from "./siglestrokelinechart";
import ActiveShapePie from "./activeshapepiechart";
const styles = (theme) => ({});

function ChartsPage(props) {
  const { classes } = props;
  return (
    <>
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
            <Button>
              <Paper elevation={2} sx={{}}>
                project with/without pipeline -
                <CustomBarChart />
              </Paper>
            </Button>
          </Grid>
          <Grid item lg={6}>
            <Button>
              <Paper elevation={2} sx={{}}>
                Project last use pipelie
                <LineComponent />
                <ActiveShapePie />
              </Paper>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default withStyles(styles)(ChartsPage);
