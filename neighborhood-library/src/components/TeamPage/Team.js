import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import Kat from "./Images/Kat.jpg";
import Tom from "./Images/Tom.PNG";
import Ira from "./Images/Ira.jpg";
import Lee from "./Images/Lee.jpg";
import Hank from "./Images/Hank.JPG";

const useStyles = makeStyles({
  root: {
    flexgrow: 1
  },
  card: {
    width: 300,
    minWidth: 300,
    minHeight: 400,
    margin: 40
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
              className="teamHeader"
            >
              <br />
              Meet The Team
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              className="lambdaDescription"
              paragraph
            >
                

             The team made Neighborhood Library as part of Lambda Labs, a
              capstone to the Full Stack Web Development program at{' '} 
              <Link href="https://lambdaschool.com/">Lambda School.</Link>
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
                  <Typography className="teamMemberName">
                    <h2>Ira Sanchez</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar alt="Ira" src={Ira} className={classes.bigAvatar} />
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Ira Sanchez is a student at Lambda School with an eclectic
                    background. He focused on the frontend for this app,
                    contributing largely to the design and functionality of
                    Stripe and Mapbox. He likes dogs and random facts and is
                    looking forward to a career in web development.
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
                  <Typography className="teamMemberName">
                    <h2>Thomas Utsey</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar alt="Tom" src={Tom} className={classes.bigAvatar}>
                      Thomas
                    </Avatar>
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Thomas Utsey is a full stack web developer and has been
                    troubleshooting process for more than 20 yrs. Graduated
                    Summa Cum Laude in 2012 with a degree in information
                    technology with a focus on programming. Currently attending
                    Lambda to kick start a focused career in web development
                    including other coding related fields. Thomas has extensive
                    experience in troubleshooting and marketing and has been
                    recognized on numerous occasions for his skill in
                    troubleshooting process and marketing. Thomas has a highly
                    committed work ethic and will be a strong addition to any
                    team or solo.
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
                  <Typography className="teamMemberName">
                    <h2>Katherine Rust</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar alt="Kat" src={Kat} className={classes.bigAvatar} />
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Katherine lives in Seattle and is a full stack web
                    development at Lambda School. She enjoys building new
                    projects with React and using APIs. She is looking forward
                    to her new career in web development.
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
                  <Typography className="teamMemberName">
                    <h2>Lee Lichstein</h2>
                  </Typography>
                  <Typography variant="caption">
                    Full Stack Web Developer
                  </Typography>
                  <div className="Image">
                    <Avatar alt="Lee" src={Lee} className={classes.bigAvatar} />
                  </div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lee is a Lambda is a student out of New York City looking
                    forward to beginning his career in web development.
                  </Typography>
                  <div className="profileLinks">
                    <Button>
                      <a href="https://github.com/leelichtsinn" alt="GitHub">
                        <i class="fab fa-github-square fa-2x" />
                      </a>
                    </Button>
                    <Button>
                      <a href="https://www.linkedin.com/in/lee-lichtsinn-4064a8126/">
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
                    <Typography className="teamMemberName">
                      <h2>Henry Neal</h2>
                    </Typography>
                    <Typography variant="caption">Team Lead</Typography>
                    <div className="Image">
                      <Avatar
                        alt="Hank"
                        src={Hank}
                        className={classes.bigAvatar}
                      />
                    </div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Henry is a recent graduate at Lambda School looking for
                      his next opportunity as a developer.
                    </Typography>
                    <Grid item className={classes.profileLinks}>
                      <Button>
                        {" "}
                        <a href="https://github.com/henron1" alt="GitHub">
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
                        <a href="https://henry-neal.com/" alt="email">
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
