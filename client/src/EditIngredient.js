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
        
        dispatch(ingredientEdited({id: ingredient.id, quantity: e.target[0].value, name: ingredient.product_name}))
        setEditing(false)
    }

    function calculateQuantity() {
        if (ingredient.product_name === 'egg') {
            return parseInt(ingredient.quantity / .08333)
        } else {
            return ingredient.quantity * 1000
        }
    }

    return (
        <>
        <form onSubmit={e => handleSubmit(e)} >
        <div>
            <label>{ingredient.product_name}: </label>
            {!editing ? <label>{calculateQuantity()}</label> : <input placeholder={calculateQuantity()}/>} 
            {ingredient.product_name === 'egg' ? ' eggs' : ' grams / mililiters'} {' '}
            {!editing ? <button onClick={e => handleClick(e)}>Edit</button> : <div style={{display:'inline-block'}}><button type="submit" id="submit">Save</button><button onClick={() => setEditing(false)}>Cancel</button></div> }
        </div>
        <br></br>
        </form>
        </>
        
    )
}

export default EditIngredient;