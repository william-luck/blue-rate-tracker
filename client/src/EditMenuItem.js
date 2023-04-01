
import EditIngredient from "./EditIngredient";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { editItem } from "./menuItemsSlice";



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
        <br></br>
        {/* Name of MenuItem */}
        Name: {!nameEditing ? <label> {menuItemName} </label> : <input onChange={handleNameChange} value={menuItemName}/>}
        {!nameEditing ? <button onClick={handleNameEditClick}>Edit</button>: <div style={{display:'inline-block'}}><button onClick={handleSubmit}>Save</button><button onClick={handleNameCancel}>Cancel</button></div>}

        <br></br>
        <br></br>

        {/* Assigned Menu */}
        <label>Menu: {!menuEditing ? item.menu.name : menuDropDown()} </label>
        {!menuEditing ? <button onClick={handleEditClick}>Edit</button> : <div style={{display:'inline-block'}}><button onClick={handleSubmit}>Reassign</button><button onClick={handleMenuCancel}>Cancel</button></div>}
        <br></br>
        <br></br>

        {/* Override Price */}
        <label>Price {!priceEditing ? price : <input value={price} onChange={handlePriceChange}/>} </label>
        {!priceEditing? <button onClick={handlePriceEditClick}>Edit</button> : <div style={{display:'inline-block'}}><button onClick={handleSubmit}>Override</button><button onClick={handlePriceCancel}>Cancel</button></div>}
        <br></br>
        <br></br>

    
        {/* List of ingredients to edit */}
        {item.ingredients?.map(ingredient => <EditIngredient ingredient={ingredient} key={ingredient.id}/>)}

        </>
    )

}

export default EditMenuItem; 