import { useDispatch } from "react-redux";
import { useState } from "react";
import { editProduct } from "./productsSlice";


function Product({ product }) {

    const [formData, setFormData] = useState({
        name: product.name,
        price: product.price,
        id: product.id
    })
    const [editing, setEditing] = useState(false)

    const dispatch = useDispatch()

    function handlePriceEditClick() {
        if (editing) {
            // Post request
            dispatch(editProduct(formData))
        }
        setEditing(prevValue => !prevValue)
    }

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }


    return (
        <>
        {product.name}:
        {' '}<li><span>Price per unit: {!editing ? product.price : <input value={formData.price} onChange={handleChange} name="price"></input>}</span>
        <button onClick={handlePriceEditClick}>{!editing ? 'Edit' : 'Save'}</button></li>
        {product.error}
        <br></br>
        </>
    )
}

export default Product; 