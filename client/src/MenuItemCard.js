import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 210
  }
}));

function MenuItemCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function calculatePrice(menu_item) {
    let sub_total = menu_item.ingredients.reduce((accum, curr) => accum + curr.price_of_ingredient, 0)
    let rounded_up = Math.ceil( (sub_total * menu_item.price_ratio) / 10 ) * 10
    return rounded_up
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={item.name} />
      <CardHeader title={'Price: ' + calculatePrice(item)} subheader={item.price_ratio === 3 ? '' : 'Custom pricing appplied.'}/>
    </Card>
  );
}


export default MenuItemCard;