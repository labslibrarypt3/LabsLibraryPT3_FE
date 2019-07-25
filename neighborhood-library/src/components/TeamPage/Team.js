import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    card: {
        maxWidth: 200,
    },
    igAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
});

export default function Team() {
    const classes = useStyles();
        return (
            <div>
                <Grid>
                <Card className={classes.card}>
                <div className='TeamMember'>
                        <Typography>
                            <h2>Team Member Name</h2>
                        </Typography>
                        <div className='Image'>
                        <Avatar className={classes.bigAvatar}>KR</Avatar>
                        
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            some text about you goes here
                        </Typography>
                        <div className='profileLinks'>
                            <Button>
                                GH will be here
                            </Button>
                            <Button>
                                LinkedIn will be here
                            </Button>
                        </div>

                    </div>
                </Card>
                <Card className={classes.card}>
                <div className='TeamMember'>
                        <Typography>
                            <h2>Team Member Name</h2>
                        </Typography>
                        <div className='Image'>
                        <Avatar className={classes.bigAvatar}>KR</Avatar>
                        
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            some text about you goes here
                        </Typography>
                        <div className='profileLinks'>
                            <Button>
                                GH will be here
                            </Button>
                            <Button>
                                LinkedIn will be here
                            </Button>
                        </div>

                    </div>
                </Card>
                <Card className={classes.card}>
                <div className='TeamMember'>
                        <Typography>
                            <h2>Team Member Name</h2>
                        </Typography>
                        <div className='Image'>
                        <Avatar className={classes.bigAvatar}>KR</Avatar>
                        
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            some text about you goes here
                        </Typography>
                        <div className='profileLinks'>
                            <Button>
                                GH will be here
                            </Button>
                            <Button>
                                LinkedIn will be here
                            </Button>
                        </div>

                    </div>
                </Card>
                <Card className={classes.card}>
                <div className='TeamMember'>
                        <Typography>
                            <h2>Team Member Name</h2>
                        </Typography>
                        <div className='Image'>
                        <Avatar className={classes.bigAvatar}>KR</Avatar>
                        
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            some text about you goes here
                        </Typography>
                        <div className='profileLinks'>
                            <Button>
                                GH will be here
                            </Button>
                            <Button>
                                LinkedIn will be here
                            </Button>
                        </div>

                    </div>
                </Card>
                  </Grid>
            </div>
          
        )
    }