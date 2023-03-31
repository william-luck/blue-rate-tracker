
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

    const menus = useSelector(state => state.menus.entities)

    const dispatch = useDispatch()

    // Resets editing state if different menu item  is selected from parent dropdown
    useEffect(() => {
        setMenuEditing(false)
        setNameEditing(false)
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

    function handleSubmit(e) {
        e.preventDefault()
        const menuId = menus.find(menu => menu.name === selectedMenu).id
        dispatch(editItem({
            item_id: item.id,
            name: menuItemName,
            menu_id: menuId
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
        Name: {!nameEditing ? <label> {menuItemName} </label> : <input onChange={handleNameChange} value={menuItemName}/>}
        {!nameEditing ? <button onClick={handleNameEditClick}>Edit</button>: <div style={{display:'inline-block'}}><button onClick={handleSubmit}>Save</button><button onClick={handleNameCancel}>Cancel</button></div>}
        <br></br>
        <br></br>

            <label>Menu: {!menuEditing ? item.menu.name : menuDropDown()} </label>
            {!menuEditing ? <button onClick={handleEditClick}>Edit</button> : <div style={{display:'inline-block'}}><button onClick={handleSubmit}>Reassign</button><button onClick={handleMenuCancel}>Cancel</button></div>}
            <br></br>
            <br></br>
        
            {item.ingredients?.map(ingredient => <EditIngredient ingredient={ingredient} key={ingredient.id}/>)}

        </>
    )

}

export default EditMenuItem; 