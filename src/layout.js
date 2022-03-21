import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SearchAppBar from "./topBar";
import List from "@material-ui/core/List";
import { styled, useTheme } from "@mui/material/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import DraftsIcon from "@material-ui/icons/Drafts";
import MailIcon from "@material-ui/icons/Mail";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@material-ui/core/Button";
import ChartsPage from "./chartspage";
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
  drawer: {
    // backgroundColor: "red"
    // width: theme.layout.drawerWidth
    width: 150
  },
  drawerPaper: {
    width: "inherit"
    // width: 150,
    // backgroundColor: theme.palette.background.default
  },
  toolbarIe11: {
    display: "flex",
    backgroundColor: "#041c49"
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
  justifyContent: "flex-end",
  backgroudColor: "red"
}));
function Layout(props) {
  const { classes } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showcomponent, setshowcomponent] = React.useState(0);

  return (
    <div className={classes.root}>
      {/* <SearchAppBar /> */}
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
                  <img
                    src="https://www.bankfab.com/-/media/fabgroup/logos/fablogo.svg?h=0&w=0&la=en&hash=2A1479C46C1F862C48E568B8FD48F96776F9F0FC"
                    alt="logo"
                  />
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
                    <HomeIcon />
                    <Typography variant="body1">Home</Typography>
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setshowcomponent(1)}
                    edge="end"
                    sx={{ ...open }}
                  >
                    <WidgetsOutlinedIcon />
                    <Typography variant="body1">Dashboard</Typography>
                  </IconButton>
                </ListItemIcon>
              </ListItem>

              {/* <ListItem button>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  // onClick={handleDrawerOpen}
                  edge="end"
                  sx={{ ...open }}
                >
                  <MailIcon />
                </IconButton>
              </ListItem> */}
              {/* <ListItem button>
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
              </ListItem> */}
            </List>
          </div>

          <Main open={open}>
            <DrawerHeader />
          </Main>
        </>
        {/* <NavItems /> */}
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
          <Box sx={{ flexGrow: 1 }}>
            <>
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
                        maxWidth: "200px",
                        //padding: theme.spacing(1.5, 3),
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#F5EFEF"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            JIRA
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button>
                    <Paper
                      elevation={2}
                      sx={{
                        maxWidth: "200px",
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#D0E2E2"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            Automation
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button>
                    <Paper
                      elevation={2}
                      sx={{
                        maxWidth: "200px",
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#FFF2E5"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            Functional
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          8
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button onClick={() => setshowcomponent(2)}>
                    <Paper
                      elevation={2}
                      sx={{
                        maxWidth: "200px",
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#E9F3C2"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            GitLab
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button>
                    <Paper
                      elevation={2}
                      sx={{
                        maxWidth: "200px",
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#F3DABF"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            SonarQube
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button>
                    <Paper
                      elevation={2}
                      sx={{
                        maxWidth: "200px",
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#CCF2FF"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            ServiceNow
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button>
                    <Paper
                      elevation={2}
                      sx={{
                        maxWidth: "200px",
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#F8E1A6"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            CheckMarx
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button>
                    <Paper
                      elevation={2}
                      sx={{
                        maxWidth: "200px",
                        padding: theme.spacing(1.5, 3),
                        backgroundColor: "#C4C4E7"
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid xs={12}>
                          <Typography
                            variant="body1"
                            display="block"
                            align="center"
                          >
                            Others
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Issues
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          0
                          <Typography
                            variant="caption"
                            display="block"
                            align="center"
                          >
                            New Reports
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Button>
                </Grid>
              </Grid>
            </>
          </Box>
        ) : showcomponent === 2 ? (
          <ChartsPage />
        ) : (
          //  <>this is charts page</>

          <>This is home page</>
        )}
      </Box>
    </div>
  );
}
export default withStyles(styles)(Layout);
