import { Container, Divider, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';


function AddProduct() {

    const dispatch = useDispatch()

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
        {/* <form onSubmit={handleSubmit} className={classes.root} >
            <label>Product name</label>
            <input value={formData.name} name='name' onChange={handleChange}/>
            {/* <TextField id="standard-basic" name="name" onChange={handleChange} value={formData.name}/> */}
            {/* <br></br>
            {' '}
            <label>Price per unit (kilogram / liter / dozen)</label>
            <input value={formData.quantity} name='price' onChange={handleChange}/>
            <br></br>
            <button type="submit">Add</button>
        </form> */} 

        <form className={classes.root} onSubmit={handleSubmit}>
            <Grid container spacing={1} direction='row' alignItems="center" justifyContent="space-evenly">
                <Grid item>
                <TextField label="Product Name" name="name" value={formData.name} onChange={handleChange} helperText='Enter new product name'/>
                </Grid>

                <Grid item>
                <TextField label="Price" name="price" value={formData.price} onChange={handleChange} helperText='per kilogram / liter' />
                </Grid>
                <Button variant="contained" color="primary" type="submit">Save</Button>
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