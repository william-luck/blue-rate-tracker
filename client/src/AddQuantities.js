import { useSelector } from "react-redux";
import { useState } from "react";
import AddQuantityToIngredient from "./AddQuantityToIngredient";

function AddQuantities() {

    const ingredients = useSelector(state => state.ingredientsSelected.entities)
    
    return (
        <>
            {ingredients?.map(ingredient => <AddQuantityToIngredient ingredient={ingredient}/>)}

        </>
    )
}

export default AddQuantities;