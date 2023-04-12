
import EditIngredient from "./EditIngredient";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { editItem } from "./menuItemsSlice";
import { Button, Divider, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Title from "./Dashboard/Title";
import Container from "@material-ui/core/Container";
import { deleteItem } from "./menuItemsSlice";



function EditMenuItem({ item }) {

    const [menuItemName, setMenuItemName] = useState(item.name)
    const [nameEditing, setNameEditing] = useState(false)
    const [menuEditing, setMenuEditing] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState(item.menu.name)
    const [priceEditing, setPriceEditing] = useState(false)
    const [price, setPrice] = useState('')

    const menus = useSelector(state => state.menus.entities)

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
        setSelectedMenu(item.menu.name)
        setMenuItemName(item.name)


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
        setSelectedMenu(item.menu.name)
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

        // Need to do something to calculate new price ratio... from old price received from item prop 
        // New price / subtotal = price_ratio... 

        let subTotal = item.ingredients.reduce((accum, curr) => accum + curr.price_of_ingredient, 0)
        let priceRatio = price / subTotal

        const menuId = menus.find(menu => menu.name === selectedMenu).id
        dispatch(editItem({
            item_id: item.id,
            name: menuItemName,
            menu_id: menuId,
            price_ratio: priceRatio
        }))  
    }

    function handleDelete() {
        dispatch(deleteItem(item.id))
    }

    function menuDropDown() {
        return(
            <select onChange={handleEditMenu} value={selectedMenu}>    
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
                <label>Menu: {!menuEditing ? item.menu.name : menuDropDown()} </label>
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
        </Container>

            <Grid container justifyContent='center' direction="row">
                <Button variant="contained" color="secondary" size="large" onClick={handleDelete}>Delete Menu Item</Button>
            </Grid>
        </>
    )

}

export default EditMenuItem; 