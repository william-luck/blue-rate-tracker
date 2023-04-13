import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from "./Dashboard/Title";
import MenusContainer from "./MenusContainer";
import BlueRateValue from "./BlueRateValue";
import Menu from "./Menu";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


function Home() {

    const [blue, setBlue] = useState('')

  useEffect(() => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
      .then(r => r.json())
      .then(data => setBlue({rate: data.blue, updated: data.last_update}))
      
  },[])

  const selectedMenu = useSelector(state => state.menus.selected)
  

  const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      }
  }))

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    return (
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            {/* List of Menus */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Title>Menus</Title>
                <MenusContainer />
              </Paper>
            </Grid>

            {/* Blue Rate */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {blue ? <BlueRateValue blue={blue}/> : null}
              </Paper>
            </Grid>

            {/* Selected Menu Detail} */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {selectedMenu ? <Menu selectedMenu={selectedMenu}/> : 'Select a menu above to view current prices'}
              </Paper>
            </Grid>

          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>

        </Container>
    )

   

}

export default Home; 