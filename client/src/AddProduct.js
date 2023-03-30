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

    return(
        <>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
            <label>Product name</label>
            <input value={formData.name} name='name' onChange={handleChange}/>
            <br></br>
            {' '}
            <label>Price per unit (kilogram / liter / dozen)</label>
            <input value={formData.quantity} name='price' onChange={handleChange}/>
            <br></br>
            <button type="submit">Add</button>
        </form>
        </>
    )
}

export default AddProduct;