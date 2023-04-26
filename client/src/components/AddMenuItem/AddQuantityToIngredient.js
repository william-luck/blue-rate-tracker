import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { assignQuantity } from "../../reducers/ingredientsSlice";


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
            <TextField value={ingredient.quantity} onChange={handleChange} label={ingredient.name} helperText={ingredient.name === 'egg' ? 'eggs' : 'grams / mililiters'}/>{' '} 
            <br></br>
        </span>
    )

}

export default AddQuantityToIngredient; 