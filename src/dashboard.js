import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Dashboard() {
  const [showDetails, setshowDetails] = React.useState(0);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {showDetails === 1 ? (
        <>this is charts page</>
      ) : (
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
                    padding: 1,
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
                    padding: 1,
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
                    padding: 1,
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
              <Button onClick={setshowDetails(1)}>
                <Paper
                  elevation={2}
                  sx={{
                    maxWidth: "200px",
                    padding: 1,
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
                    padding: 1,
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
                    padding: 1,
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
                    padding: 1,
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
                    padding: 1,
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
          </Grid>
        </>
      )}
    </Box>
  );
}
