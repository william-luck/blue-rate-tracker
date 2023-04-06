import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import { useSelector, useDispatch } from "react-redux";

import { ingredientAdded, ingredientRemoved } from "./ingredientsSlice";


function AddIngredientsChecklist() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.entities)
    const selectedIngredients = useSelector(state => state.ingredientsSelected.entities)

    function handleChange(e) {
        const match = selectedIngredients.find(ingredient => ingredient.name === e.target.name)
        if (!match) {
            dispatch(ingredientAdded({name: e.target.name, product_id: e.target.id}))
        } else {
            dispatch(ingredientRemoved(e.target.id))
        }
    }

    function isChecked(id) {
        if (selectedIngredients.find(ingred => ingred.product_id == id)) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
        Add ingredients to new menu item:  
        <FormGroup>
        {products?.map(product => {
                return (
                    <FormControlLabel
                        control={<Checkbox type="checkbox" id={product.id} name={product.name} value={product.name} onChange={handleChange} style={{display: 'inline-block'}} checked={isChecked(product.id)}/>}
                        label={product.name}
                    />                    
                )
            })}
        </FormGroup>
        </>
    )
}

export default AddIngredientsChecklist; 