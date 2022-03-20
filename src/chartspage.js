import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import LineRechartComponent from "./linechart";
import PieRechartComponent from "./piechart";
const styles = (theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  }
});

function ChartsPage(props) {
  const { classes } = props;
  return (
    <>
      <Box p={1} sx={{ bgcolor: "#FFFFFF" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LineRechartComponent />
            <Divider />
            <PieRechartComponent />
          </Grid>
        </Grid>
      </Box>
    </>
    //</Box>
    // </div>
  );
}
export default withStyles(styles)(ChartsPage);
