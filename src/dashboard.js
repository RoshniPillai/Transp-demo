import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EventIcon from "@mui/icons-material/Event";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import InputLabel from "@mui/material/InputLabel";

import PrimarySearchAppBar from "./topBar";

import List from "@material-ui/core/List";
import { styled, useTheme } from "@mui/material/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import DraftsIcon from "@material-ui/icons/Drafts";
import MailIcon from "@material-ui/icons/Mail";
import ReportIcon from "@material-ui/icons/Report";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Button from "@material-ui/core/Button";

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
  },
  toolbarIe11: {
    display: "flex"
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: `0 ${theme.spacing.unit * 3}px`,
    ...theme.mixins.toolbar
  }
});
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));
function Dashboard(props) {
  const { classes } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showcomponent, setshowcomponent] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <PrimarySearchAppBar />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <>
          <div>
            <div className={classes.toolbarIe11}>
              <div className={classes.heading}>
                <Typography variant="title">
                  <img src="" alt="logo" width="50" />
                </Typography>
              </div>
            </div>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setshowcomponent(0)}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <WidgetsOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <PeopleAltOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="end"
                  sx={{ ...open }}
                >
                  <MailIcon />
                </IconButton>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    //onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <DraftsIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    //onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <PeopleAltOutlinedIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    //onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <DraftsIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    // onClick={handleDrawerOpen}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <ReportIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            </List>
          </div>

          <Main open={open}>
            <DrawerHeader />
          </Main>
        </>
      </Drawer>
      <Box
        p={3}
        sx={{
          flexGrow: 1,
          paddingTop: "74px",
          backgroundColor: "#F2F3F5"
        }}
        classes={classes.main}
      >
        {showcomponent === 1 ? (
          <></>
        ) : showcomponent === 2 ? (
          <></>
        ) : (
          <>
            <Grid container spacing={4}>
              
              
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
}
export default withStyles(styles)(Dashboard);
