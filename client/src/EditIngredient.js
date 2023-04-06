import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ingredientEdited } from "./ingredientsSlice";
import Button from "@material-ui/core/Button";


function EditIngredient({ ingredient }) {

    const [editing, setEditing ] = useState(false)
    const [quantity, setQuantity] = useState(calculateQuantity())

    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault()
        setEditing(true)
    }

    function handleChange(e) {
        setQuantity(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(ingredientEdited({id: ingredient.id, quantity: quantity, name: ingredient.product_name}))
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
            {!editing ? <Button onClick={e => handleClick(e)} variant='contained' color="primary" size="small">Edit</Button> : <div style={{display:'inline-block', paddingRight: '10px'}}><Button type="submit" id="submit" variant='contained' color="primary" size="small">Save</Button>{' '}<Button onClick={() => setEditing(false)} variant='contained' color="primary" size="small">Cancel</Button></div> }    
            {!editing ? <label> {ingredient.product_name}: {calculateQuantity()}</label> : <TextField helperText={ingredient.product_name} value={quantity} onChange={handleChange}/>} 
            {ingredient.product_name === 'egg' ? ' eggs' : ' grams / mililiters'} {' '}
            
        </div>
        <br></br>
        </form>
        </>
        
    )
}

export default EditIngredient;