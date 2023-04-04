import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ViewList from "@material-ui/icons/ViewList"
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    button: {
        
    }
  }));

function MenusAlternate() {

    const [hover, setHover] = useState(false)

    const classes = useStyles();

    return (
        // Want to map out Grid Items from number of menus
        // On Click, I want them to do the magic and set state for selectedMenu, display prices below. 
        <Grid container spacing={3}>
            <Grid item xs={6}>

                <Paper className={classes.paper}>
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item>
                            Starters
                        </Grid>
                        <Grid item >
                            <IconButton aria-label="view" className={classes.margin} size="small">
                            <ArrowDownwardIcon fontSize="inherit" />
                            <ViewList fontSize='inherit'/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Paper>

            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>Main</Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>Cocktails</Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>Cocktails</Paper>
            </Grid>
            
            
        </Grid>
    )

}

export default MenusAlternate; 