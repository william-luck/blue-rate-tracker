import { useSelector, useDispatch } from "react-redux";

import { ingredientAdded, ingredientRemoved } from "./ingredientsSlice";


function AddIngredientsChecklist() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.entities)
    const selectedIngredients = useSelector(state => state.ingredientsSelected.entities)

    function handleClick(e) {
        const match = selectedIngredients.find(ingredient => ingredient.name === e.target.name)
        if (!match) {
            dispatch(ingredientAdded({name: e.target.name, product_id: e.target.id}))
        } else {
            dispatch(ingredientRemoved(e.target.id))
        }
    }

    return (
        <>
        Add ingredients to new menu item:  
        {products?.map(product => {
                return (
                    <div>
                        <input type="checkbox" id={product.id} name={product.name} value={product.name} onClick={handleClick}/>
                        <label>{product.name}</label>
                        {' '}
                        {/* {selected ? <span><input placeholder="Quantity" value={ingredientData.quantity} onChange={addQuantity}/> grams/mililiters</span>: null} */}
                    </div>   
                )
            })}
            <button type='submit'>Submit</button>
        </>
    )
}

export default AddIngredientsChecklist; 