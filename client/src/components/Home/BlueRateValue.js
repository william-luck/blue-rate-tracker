import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import { useEffect, useState } from 'react';
import { Divider } from '@material-ui/core';





function BlueRateValue({ blue }) {
    
    const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    });

  const classes = useStyles();

  const dateString = new Date(blue.updated).toString()

  return (
    
    <React.Fragment>
      <Title>Blue Rate</Title>
      <Typography component="p" variant="h4">
        1 USD to {blue.rate.value_avg} ARS
      </Typography>
      <br></br>
      <Divider />
      <br></br>
      <Typography color="textSecondary" className={classes.depositContext}>
        Last updated: {dateString}
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}

export default BlueRateValue; 


// function BlueRateValue({ blue }) {

//     const dateString = new Date(blue.updated).toString()

//     return (
//         <div>
//             <h1>Current blue rate: {blue.rate.value_avg}</h1>
//             <p>Last updated: {dateString} </p>
//         </div>
//     )

// }

// export default BlueRateValue;