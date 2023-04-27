
import EditIngredient from "./EditIngredient";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { editItem, deleteItem } from "../../reducers/menuItemsSlice";
import { Button, Divider, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Title from "../Title";
import Container from "@material-ui/core/Container";
import { newIngredient } from '../../reducers/ingredientsSlice'




function EditMenuItem({ item }) {

    const [menuItemName, setMenuItemName] = useState(item.name)
    const [nameEditing, setNameEditing] = useState(false)
    const [menuEditing, setMenuEditing] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState('')
    const [priceEditing, setPriceEditing] = useState(false)
    const [price, setPrice] = useState('')
    const [selectedIngredient, setSelectedIngredient] = useState('')
    const [ingredientQuantity, setIngredientQuantity] = useState('')

    const menus = useSelector(state => state.menus.entities)
    const products = useSelector(state => state.products.entities)
    const errors = useSelector(state => state.menuItems.ingredientsErrors)

    const dispatch = useDispatch()

    function calculatePrice(menu_item) {
        let sub_total = menu_item.ingredients.reduce((accum, curr) => accum + curr.price_of_ingredient, 0)
        let rounded_up = Math.ceil( (sub_total * menu_item.price_ratio) / 10 ) * 10
        return rounded_up
      }

    // Resets editing state if different menu item  is selected from parent dropdown
    useEffect(() => {
        // Calculate price of menu item from ingredients
        setPrice(calculatePrice(item))

        setMenuEditing(false)
        setNameEditing(false)
        setPriceEditing(false)
        setMenuItemName(item.name)

        if (item.menu) {
            setSelectedMenu(item.menu.name)
        }

    },[item])

    function handleEditClick() {
        setMenuEditing(true)
    }

    function handleNameEditClick() {
        setNameEditing(true)
    }

    function handleNameChange(e) {
        setMenuItemName(e.target.value)
    }

    function handleEditMenu(e) {
        setSelectedMenu(e.target.value)
    }

    function handleNameCancel() {
        setNameEditing(false)
        setMenuItemName(item.name)
    }

    function handleMenuCancel() {
        setMenuEditing(false)
        if (item.menu) {
            setSelectedMenu(item.menu.name)
        }
    }

    function handlePriceChange(e){
        setPrice(e.target.value)
    }

    function handlePriceEditClick() {
        setPriceEditing(true)
    }

    function handlePriceCancel() {
        setPriceEditing(false)
        setPrice(calculatePrice(item))
    }

    function handleSubmit(e) {
        e.preventDefault()

        let subTotal = item.ingredients.reduce((accum, curr) => accum + curr.price_of_ingredient, 0)
        let priceRatio = price / subTotal

        if (selectedMenu) {
            const menuId = menus.find(menu => menu.name === selectedMenu).id
            dispatch(editItem({
                item_id: item.id,
                name: menuItemName,
                menu_id: menuId,
                price_ratio: priceRatio
            }))  
        } else {
            dispatch(editItem({
                item_id: item.id,
                name: menuItemName,
                menu_id: null,
                price_ratio: priceRatio
            }))
        }
        
    }

    function handleDelete() {
        dispatch(deleteItem(item.id))
    }

    function handleIngredientChange(e) {
        const product = products.find(product => product.id == e.target.value)
        setSelectedIngredient(product)
    }

    function handleIngredientQuantityChange(e) {
        setIngredientQuantity(e.target.value)
    }

    function handleIngredientSubmit(e) {
        e.preventDefault()

        const data = {
            product_id: selectedIngredient.id,
            menu_item_id: item.id,
            quantity: parseFloat(ingredientQuantity/1000)
        }

        dispatch(newIngredient(data))

        // Clears form data
        setSelectedIngredient('')
        setIngredientQuantity('')

    }



    function menuDropDown() {
        return(
            <select onChange={handleEditMenu} value={selectedMenu}>
                <option value={''}>Unassigned</option>    
                {menus.map(menu => <option key={menu.id} id={menu.id} value={menu.name}>{menu.name}</option>)}
            </select>
        )
    }

    return(
        <>
        <br></br>
        <Title>Menu Item Information</Title>
        <Grid container spacing={5} direction='row' alignItems='center' justifyContent='space-evenly'>
            
            <Grid item>
                {!nameEditing ? <label> Name: {menuItemName} </label> : <TextField onChange={handleNameChange} value={menuItemName}/>}
                {!nameEditing ? <Button onClick={handleNameEditClick} variant='contained' color="primary" size="small">Edit</Button>: <div style={{display:'inline-block'}}>{' '}<Button onClick={handleSubmit} variant='contained' color="primary" size="small">Save</Button>{' '}<Button onClick={handleNameCancel} variant='contained' color="primary" size="small">Cancel</Button></div>}
            </Grid>
    
            <Grid item>
                {item.menu ? <label>Menu: {!menuEditing ? item.menu.name : menuDropDown()} </label> : <label>Menu: {!menuEditing ? 'Unassigned' : menuDropDown()} </label>}
                
                {!menuEditing ? <Button onClick={handleEditClick} variant='contained' color="primary" size="small">Edit</Button> : <div style={{display:'inline-block'}}><Button onClick={handleSubmit} variant='contained' color="primary" size="small">Reassign</Button><Button onClick={handleMenuCancel} variant='contained' color="primary" size="small">Cancel</Button></div>}
            </Grid>

            <Grid item>
                <label>Price {!priceEditing ? price : <TextField value={price} onChange={handlePriceChange}/>} </label>
                {!priceEditing? <Button onClick={handlePriceEditClick} variant='contained' color="primary" size="small">Edit</Button> : <div style={{display:'inline-block'}}><Button onClick={handleSubmit} variant='contained' color="primary" size="small">Override</Button>{' '}<Button onClick={handlePriceCancel} variant='contained' color="primary" size="small">Cancel</Button></div>}
            </Grid>
            
        </Grid>

        <br></br>
        <Divider/>
        <br></br>
    
        {/* List of ingredients to edit */}
        <Title>Ingredients</Title>
        <Container>
        {item.ingredients?.map(ingredient => {
            return (
                    <EditIngredient ingredient={ingredient} key={ingredient.id}/>
                
        )})}

        {errors ? <div>Ingredient could not be saved: {errors}</div> : null}

        {/* Add ingredients to Menu Item */}
        <Title>Add ingredients?</Title>
        <select id='menuItem' name='menuItem' onChange={handleIngredientChange}>
            <option value=''>None</option>
            {products?.map(product => {
                return <option key={product.id} value={product.id} selected={selectedIngredient && selectedIngredient.id === product.id ? true : false}>{product.name}</option>
            })}
        </select>

        {selectedIngredient ? 
        <span>
            <TextField onChange={handleIngredientQuantityChange} value={ingredientQuantity} helperText={'Enter grams / mililiters'} style={{paddingLeft: '30px', paddingRight: '20px'}}/>
            <Button variant="contained" size="small" color="primary" onClick={handleIngredientSubmit}>Add</Button>
        </span>
        : null}
        

        </Container>
        <br></br>
        <br></br>

            <Grid container justifyContent='center' direction="row">
                <Button variant="contained" color="secondary" size="large" onClick={handleDelete}>Delete Menu Item</Button>
            </Grid>
        </>
    )

}

export default EditMenuItem; 