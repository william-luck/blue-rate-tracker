import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Blue Rate</Title>
      <Typography component="p" variant="h4">
        1 USD to 393 ARS
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on updated date
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        The database refreshes every day at 6:00 AM, excluding weekends
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}