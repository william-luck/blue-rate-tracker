import { useSelector } from "react-redux";
import { useState } from "react";
import AddQuantityToIngredient from "./AddQuantityToIngredient";
import Title from "../Title";

function AddQuantities() {

    const ingredients = useSelector(state => state.ingredientsSelected.entities)
    
    return (
        <>
            <Title>Add quantities to selected ingredients</Title>
            {!ingredients.length > 0  ? 'No ingredients selected' : null}
            {ingredients?.map(ingredient => <AddQuantityToIngredient ingredient={ingredient}/>)}

        </>
    )
}

export default AddQuantities;