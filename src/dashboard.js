import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EventIcon from "@mui/icons-material/Event";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#F5EFEF" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    JIRA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#D0E2E2" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    JIRA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#FFF2E5" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    JIRA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#E9F3C2" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    GitLab
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#F3DABF" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    JIRA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#CCF2FF" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    JIRA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#F8E1A6" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    JIRA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => alert("clicked")}>
            <Paper
              elevation={2}
              sx={{ padding: 2, backgroundColor: "#C4C4E7" }}
            >
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <Typography
                    variant="h6"
                    display="block"
                    gutterBottom
                    align="center"
                  >
                    JIRA
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Issues
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" display="block" align="center">
                    New Reports
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
