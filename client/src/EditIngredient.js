import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ingredientEdited } from "./ingredientsSlice";


function EditIngredient({ ingredient }) {

    const [editing, setEditing ] = useState(false)

    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault()
        setEditing(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        dispatch(ingredientEdited({id: ingredient.id, quantity: e.target[0].value}))
        setEditing(false)
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
        <div>
            <label>{ingredient.product_name}: </label>
            {!editing ? <label>{ingredient.quantity * 1000}</label> : <input/>} grams / mililiters {' '}
            {!editing ? <button onClick={handleClick}>Edit</button> : <button type="submit">Save</button> }
        </div>
        <br></br>
        </form>
        </>
        
    )
}

export default EditIngredient;