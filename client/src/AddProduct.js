import { Divider, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";


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

    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex'
        }
    }))

    const classes = useStyles()

    return(
        <>
        <form onSubmit={handleSubmit} className={classes.root} >
            <label>Product name</label>
            <input value={formData.name} name='name' onChange={handleChange}/>
            {/* <TextField id="standard-basic" name="name" onChange={handleChange} value={formData.name}/> */}
            <br></br>
            {' '}
            <label>Price per unit (kilogram / liter / dozen)</label>
            <input value={formData.quantity} name='price' onChange={handleChange}/>
            <br></br>
            <button type="submit">Add</button>
        </form>

        <br></br>
        <Divider/>
        <br></br>
        A product will be added to the database, but will not be considered as an ingredient until the product is used in a menu item. 
        <p>Add a Menu Item instead?</p> 
        Plus Icon push to add menu item
        </>
    )
}

export default AddProduct;