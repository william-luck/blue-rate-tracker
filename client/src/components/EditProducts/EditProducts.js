import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from "../Title";
import { fetchProducts } from "../../reducers/productsSlice";
import Product from './Product'
import AddProduct from "./AddProduct";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



function EditProducts() {

    const [selectedListItem, setSelectedListItem] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    const products = useSelector(state => state.products.entities)

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
            height: 320,
          },
          container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }
      }))
    
      const classes = useStyles();
      const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    return (
        <>

        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

                {/* List of Menus */}
                <Grid item xs={12} md={6} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <Title>Products</Title>
                    <List>
                        {products?.map(product => {
                            return (
                                <ListItem button key={product.id} onClick={() => setSelectedListItem(product)} selected={selectedListItem.id === product.id}>
                                    <ListItemText primary={product.name[0].toUpperCase() + product.name.substring(1)} secondary={product.price + ' ARS per kilogram / liter'}/>
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
                </Grid>

                {/* Add Product */}
                <Grid item xs={12} md={6} lg={3}>
                <Paper className={fixedHeightPaper}>
                    <Title>Add Product</Title>
                    <AddProduct />
                </Paper>
                </Grid>

                {/* Selected Product Detail} */}
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {selectedListItem ? <Product product={selectedListItem}/> : 'Select a product from the above list to edit the product'}
                </Paper>
                </Grid>

            </Grid>


        </Container>

        
        </>
    )
}

export default EditProducts;