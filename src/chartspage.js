import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";


const styles = (theme) => ({
  // The main flex container for the app's layout. Its min-height
  // is set to `100vh` so it always fill the height of the screen.
  root: {
    display: "flex",
    minHeight: "100vh",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    // For full-height drawer
    //  maxWidth: `calc(100% - ${theme.layout.drawerWidth}px)`
    maxWidth: `calc(100% - 100px)`
  },
  toolbarActions: {
    marginLeft: "auto"
  },
  drawer: {
    // width: theme.layout.drawerWidth
    width: 100
  },
  drawerPaper: {
    width: "inherit"
  }
});

function ChartsPage(props) {
  const { classes } = props;
  return (

    <>
      <Box p={1} sx={{ bgcolor: "#FFFFFF" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="body"
              gutterBottom
              component="div"
              align="left"
            >
              Employees Directory
            </Typography>
            <Divider />
          </Grid>
         
        </Grid>
      </Box>
    </>
    //</Box>
    // </div>
  );
}
export default withStyles(styles)(ChartsPage);