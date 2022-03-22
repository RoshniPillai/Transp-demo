import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EnhancedTableHead from "./tableSection";
import LineRechartComponent from "./linechart";
import PieRechartComponent from "./piechart";
import PieComponent from "./piechartRate.js";
import BarChartComponent from "./barchart";
import CustomBarChart from "./customBarchart";
import LineComponent from "./singlestrokelinechart";
import ActiveShapePie from "./activeshapePie";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({});

function ChartsPage(props) {
  const { classes } = props;
  const [showchart, setshowchart] = React.useState(0);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {showDetails === 0 ? (
        <>
          <Box sx={{ flexGrow: 1 }}></Box>
        </>
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Button onClick={() => setshowchart(1)}>
                    <Paper
                      elevation={3}
                      sx={{
                        maxWidth: "600px",
                        padding: 2,
                        color: "#041c49",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <Typography
                        variant="body1"
                        display="block"
                        align="center"
                      >
                        Project branching strategy
                      </Typography>
                    </Paper>
                  </Button>
                </Grid>

                <Grid item xs={4}>
                  <Button onClick={() => setshowchart(2)}>
                    <Paper
                      elevation={3}
                      sx={{
                        maxWidth: "600px",
                        padding: 2,
                        color: "#041c49",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <Typography
                        variant="body1"
                        display="block"
                        align="center"
                      >
                        Project failure rate/ success rate
                      </Typography>
                    </Paper>
                  </Button>
                </Grid>

                <Grid item xs={4}>
                  <Button onClick={() => setshowchart(3)}>
                    <Paper
                      elevation={3}
                      sx={{
                        maxWidth: "600px",
                        padding: 2,
                        color: "#041c49",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <Typography
                        variant="body1"
                        display="block"
                        align="center"
                      >
                        project with least stages
                      </Typography>
                    </Paper>
                  </Button>
                </Grid>

                <Grid item xs={4}>
                  <Button onClick={() => setshowchart(4)}>
                    <Paper
                      elevation={3}
                      sx={{
                        maxWidth: "600px",
                        padding: 2,
                        color: "#041c49",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <Typography
                        variant="body1"
                        display="block"
                        align="center"
                      >
                        project with/without pipeline
                      </Typography>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button onClick={() => setshowchart(5)}>
                    <Paper
                      elevation={3}
                      sx={{
                        maxWidth: "600px",
                        padding: 2,
                        color: "#041c49",
                        backgroundColor: "#ffffff"
                      }}
                    >
                      <Typography
                        variant="body1"
                        display="block"
                        align="center"
                      >
                        Project last use pipeline
                      </Typography>
                    </Paper>
                  </Button>
                </Grid>
              </Grid>
            </>
          </Box>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="All Domain " value="1" />
                  <Tab label="Domain 1" value="2" />
                  <Tab label="Domain 2" value="3" />
                  <Tab label="Domain 3" value="4" />
                  <Tab label="Domain 4" value="5" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid container>
                  <Grid item lg={4}>
                    {showchart === 1 ? (
                      <LineRechartComponent />
                    ) : showchart === 2 ? (
                      <PieComponent />
                    ) : showchart === 3 ? (
                      <BarChartComponent />
                    ) : showchart === 4 ? (
                      <CustomBarChart />
                    ) : showchart === 5 ? (
                      <LineComponent />
                    ) : (
                      "please select the card to view detaislss"
                    )}
                    {/* <ActiveShapePie /> */}
                    Services within Domain 1
                  </Grid>
                  <Grid item lg={1}></Grid>
                  <Grid item lg={6}>
                    1
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">Domain 2</TabPanel>
              <TabPanel value="3">Domain 3</TabPanel>
            </TabContext>
          </Box>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Domain 1" value="1" />
                  <Tab label="Domain 2" value="2" />
                  <Tab label="Domain 3" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid container>
                  <Grid item lg={4}>
                    <ActiveShapePie />
                    Services within Domain 1
                  </Grid>
                  <Grid item lg={1}></Grid>
                  <Grid item lg={6}>
                    <EnhancedTableHead />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">Domain 2</TabPanel>
              <TabPanel value="3">Domain 3</TabPanel>
            </TabContext>
          </Box>
        </>
      )}
    </>
  );
}
export default withStyles(styles)(ChartsPage);
