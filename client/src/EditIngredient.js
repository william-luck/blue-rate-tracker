import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ingredientEdited } from "./ingredientsSlice";


function EditIngredient({ ingredient }) {

    const [editing, setEditing ] = useState(false)
    const [quantity, setQuantity] = useState(ingredient.quantity * 1000 )
    const dispatch = useDispatch()

    const [menus, setMenus] = useState(useSelector(state => state.menus))

    

    function handleChange(e) {
        setQuantity(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault()
        setEditing(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        dispatch(ingredientEdited({id: ingredient.id, quantity: quantity}))
        setEditing(false)


    }

    return (
        <>
        <form >
        <div>
            <label>{ingredient.product_name}: </label>
            {!editing ? <label>{ingredient.quantity * 1000}</label> : <input value={quantity} onChange={handleChange}/>} grams / mililiters {' '}
            {!editing ? <button onClick={handleClick}>Edit</button> : <button onClick={handleSubmit}>Save</button> }
        </div>
        <br></br>
        </form>
        </>
        
    )
}

export default EditIngredient;