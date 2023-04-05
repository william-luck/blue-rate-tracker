import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editProduct } from "./productsSlice";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import { useEffect } from "react";


function Product({ product }) {

    const [formData, setFormData] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        setFormData({
            name: product.name,
            price: product.price,
            id: product.id
        })
    }, [product, dispatch])

    const [editing, setEditing] = useState(false)
    const [nameEditing, setNameEditing] = useState(false)
    const [error, setError] = useState('')

    

    function handlePriceEditClick() {
        if (editing) {
            dispatch(editProduct(formData))
        }
        setEditing(prevValue => !prevValue)
    }

    function handleNameEditClick() {
        if (nameEditing) {
            dispatch(editProduct(formData))
        }
        setNameEditing(prevValue => !prevValue)
    }

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(editProduct(formData))
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
              margin: theme.spacing(1),
              width: '25ch',
            },
        }
    }))

    const classes = useStyles()


    return (
        <>
        <form className={classes.root} onSubmit={handleSubmit}>
            <Grid container spacing={1} direction='row' alignItems="center" justifyContent="space-evenly">
                <Grid item>
                <TextField label="Product Name" name="name" value={formData.name} onChange={handleChange}/>
                </Grid>

                <Grid item>
                <TextField label="Price (per kilogram / liter)" name="price" value={formData.price} onChange={handleChange} />
                </Grid>

                <Grid item>
                <Button variant="contained" color="primary" type="submit">Save</Button>
                </Grid>
                {product.error ? 'Error: ' + product.error : null}
            </Grid>
        
            
            
            
        </form>

        {/* Name: {!nameEditing ? product.name : <input value={formData.name} onChange={handleChange} name='name'></input>} 
        <button onClick={handleNameEditClick}>{!nameEditing ? 'Edit' : 'Save'} </button>
        {' '}

        <li><span>Price per unit: {!editing ? product.price : <input value={formData.price} onChange={handleChange} name="price"></input>}</span>
        <button onClick={handlePriceEditClick}>{!editing ? 'Edit' : 'Save'}</button></li>

        {product.error ? 'Error: ' + product.error : null} */}
        <br></br>
        </>
    )
}

export default Product; 