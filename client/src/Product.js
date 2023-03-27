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
    const [nameEditing, setNameEditing] = useState(false)

    const dispatch = useDispatch()

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


    return (
        <>
        Name: {!nameEditing ? product.name : <input value={formData.name} onChange={handleChange} name='name'></input>} 
        <button onClick={handleNameEditClick}>{!nameEditing ? 'Edit' : 'Save'} </button>
        {' '}

        <li><span>Price per unit: {!editing ? product.price : <input value={formData.price} onChange={handleChange} name="price"></input>}</span>
        <button onClick={handlePriceEditClick}>{!editing ? 'Edit' : 'Save'}</button></li>

        {product.error ? 'Error: ' + product.error : null}
        <br></br>
        </>
    )
}

export default Product; 