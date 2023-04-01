import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignQuantity } from "./ingredientsSlice";


function AddQuantityToIngredient({ ingredient }) {

    

    const dispatch = useDispatch()

    function handleChange(e) {

        dispatch(assignQuantity({
            id: ingredient.product_id,
            quantity: e.target.value
        }))
    }

    return (
        <span>
            <label>{ingredient.name}: {' '}</label>
            <input value={ingredient.quantity} onChange={handleChange} />{' '} 
            {ingredient.name === 'egg' ? 'eggs' : 'grams / mililiters'}
            <br></br>
            <br></br>
        </span>
    )

}

export default AddQuantityToIngredient; 