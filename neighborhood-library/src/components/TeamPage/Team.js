import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

// placeholder images for now
import Cat from "./Images/Cat.jpg";
import Eagle from "./Images/Eagle.jpg";
import MonorailPanda from "./Images/MonorailPanda.jpg";
import HalfDome from "./Images/HalfDome.jpg";
import Panda from "./Images/Panda.jpg";

const useStyles = makeStyles({
  root: {
    flexgrow: 1
  },
  card: {
    width: 300,
    minWidth: 300,
    minHeight: 400,
    margin: 40
    // padding: 40,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  },
  profileLinks: {
    alignItems: "flex-end"
  },
  paper: {
    backgroundcolor: "#1DA1F2"
  }
});

export default function Team() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.heroContent}>
        <Paper>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Meet The Team
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Here is a short paragraph about our team. Lambda School(link?),
              Capstone, etc etc
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <br />
              </Grid>
            </div>
          </Container>

          <Grid container className={classes.root} spacing={2} align="center">
            <Grid item xs>
              <Card className={classes.card}>
                <div className="TeamMember" align="center">
                  <Typography>
                    <h2>Ira Sanchez</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar
                      alt="Ira"
                      src={MonorailPanda}
                      className={classes.bigAvatar}
                    />
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    some text about you goes here
                  </Typography>
                  <div className="profileLinks">
                    <Button>
                      <a href="https://github.com/irasanchez/" alt="GitHub">
                        <i class="fab fa-github-square fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      <a href="https://www.linkedin.com/in/ira-sanchez/">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </Button>
                    <Button className={classes.twitter}>
                      <a href="https://www.twitter.com/irasanchezdev">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>

            <Grid item xs>
              <Card className={classes.card}>
                <div className="TeamMember" align="center">
                  <Typography>
                    <h2>Thomas Utsey</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar alt="Tom" src={Eagle} className={classes.bigAvatar}>
                      Thomas
                    </Avatar>
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    some text about you goes here
                  </Typography>
                  <div className="profileLinks">
                    <Button>
                      <a href="https://github.com/ThomasUtsey" alt="GitHub">
                        <i class="fab fa-github-square fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      <a href="https://www.linkedin.com/in/thomasutsey/">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      <a href="#" alt="email">
                        <i class="fas fa-envelope-square fa-2x" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={2} align="center">
            <Grid item xs>
              <Card className={classes.card} align="center">
                <div className="TeamMember Kat">
                  <Typography>
                    <h2>Katherine Rust</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar alt="Kat" src={Cat} className={classes.bigAvatar} />
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Kat lives in Seattle and derps around with code. derp derp
                    derp derp breaking shit overflow derp
                  </Typography>
                  <Grid item className={classes.profileLinks}>
                    <Button>
                      {" "}
                      <a href="https://github.com/fbt328" alt="GitHub">
                        <i class="fab fa-github-square fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      {" "}
                      <a href="https://www.linkedin.com/in/katherine-rust-552200166/">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      {" "}
                      <a
                        href="mailto:Kat.Andrews.Seattle@gmail.com?Subject=Lambda%20Capstone"
                        alt="email"
                      >
                        <i class="fas fa-envelope-square fa-2x" />
                      </a>
                    </Button>
                  </Grid>
                </div>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <div className="TeamMember" align="center">
                  <Typography>
                    <h2>Lee Lichstein</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar
                      alt="Lee"
                      src={HalfDome}
                      className={classes.bigAvatar}
                    />
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    some text about you goes here
                  </Typography>
                  <div className="profileLinks">
                    <Button>
                      <a href="#" alt="GitHub">
                        <i class="fab fa-github-square fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      <a href="#">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      <a href="#">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>

          <Grid>
            <Grid container className={classes.root} spacing={2} align="center">
              <Grid item xs>
                <Card className={classes.card} align="center">
                  <div className="TeamMember Hank">
                    <Typography>
                      <h2>Hank</h2>
                    </Typography>
                    <Typography variant="caption">Team Lead</Typography>
                    <div className="Image">
                      <Avatar
                        alt="Hank"
                        src={Panda}
                        className={classes.bigAvatar}
                      />
                    </div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Some text about you goes here
                    </Typography>
                    <Grid item className={classes.profileLinks}>
                      <Button>
                        {" "}
                        <a href="#" alt="GitHub">
                          <i class="fab fa-github-square fa-2x" />
                        </a>
                      </Button>
                      <Button>
                        {" "}
                        <a href="#">
                          <i class="fab fa-linkedin fa-2x" />
                        </a>
                      </Button>
                      <Button>
                        {" "}
                        <a href="#" alt="email">
                          <i class="fas fa-envelope-square fa-2x" />
                        </a>
                      </Button>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

// NOTES:
// make hover change to branded coloring of link, twitter blue, GH black etc
// make icon stick to the bottom of the container
// set font to match everything else

// linkedin blue #0077B5
// gh grey #959DA5
// twitter #1DA1F2
