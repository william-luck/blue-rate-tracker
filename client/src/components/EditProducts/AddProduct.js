import { Divider, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../reducers/productsSlice";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';


function AddProduct() {

    const dispatch = useDispatch()
    const errors = useSelector(state => state.products.addingErrors)

    const [formData, setFormData] = useState({
        name: '',
        price: ''
    })

    function handleChange(e) {  
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addProduct(formData))
        setFormData({
            name: '',
            price: ''
        })
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
              margin: theme.spacing(1),
              width: '22ch',
            },
        }
    }))

    const classes = useStyles()

    return(
        <>

        <form className={classes.root} onSubmit={handleSubmit}>
            <Grid container spacing={1} direction='row' alignItems="center" justifyContent="space-evenly">
                <Grid item>
                <TextField label="Product Name" name="name" value={formData.name} onChange={handleChange} helperText='Enter new product name'/>
                </Grid>

                <Grid item>
                <TextField label="Price" name="price" value={formData.price} onChange={handleChange} helperText='per kilogram / liter' />
                </Grid>
                <Button variant="contained" color="primary" type="submit">Save</Button>
                <br></br>
                
                {errors.length > 0 ? 
                <ul>
                    Unable to add item to database: 
                    <br></br>
                {errors[0].errors.map(error => <li>{error}</li>)}
                </ul>
                : null}
                
            </Grid>
        </form>
        <br></br>
        <Divider/>
        <br></br>
        A product will be added to the database, but will not be considered as an ingredient until the product is used in a menu item. 
        </>
    )
}

export default AddProduct;