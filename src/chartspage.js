import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import LineRechartComponent from "./linechart";
import PieRechartComponent from "./piechart";
const styles = (theme) => ({});

function ChartsPage(props) {
  const { classes } = props;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Button>
              <Paper
                elevation={2}
                sx={{
                  //maxWidth: "200px",
                  padding: 1,
                  backgroundColor: "#F5EFEF"
                }}
              >
                <LineRechartComponent />
              </Paper>
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* <Box p={1} sx={{ bgcolor: "#FFFFFF" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LineRechartComponent />
            <Divider />
            <PieRechartComponent />
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}
export default withStyles(styles)(ChartsPage);
