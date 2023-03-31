import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import EditMenuItem from "./EditMenuItem";
import { fetchMenuItems, ingredientSelected } from "./menuItemsSlice";


function EditMenuItems() {



    const dispatch = useDispatch()
    const menuItems = useSelector(state => state.menuItems.entities)
    const selectedItem = useSelector(state => state.menuItems.selectedItem)

    useEffect(() => {
        dispatch(fetchMenuItems())
    }, [])

    function handleChange(e) {
        const item = menuItems.find(menuItem => menuItem.id == e.target.value)
        dispatch(ingredientSelected(item))
    }

    function selected(id) {
        if (selectedItem) {
            if (id == selectedItem.id) {
                return true
            } else {
                return false
            }
        }
        
    }

    return (
        <>
        <label>Select a menu Item to edit: </label>
        <select id='menuItem' name='menuItem' onChange={handleChange}>
            <option value=''>None</option>
            {menuItems?.map(menuItem => {
            return <option key={menuItem.id} value={menuItem.id} selected={selected(menuItem.id)}>{menuItem.name}</option>
            })}
        </select>

        {!Array.isArray(selectedItem) && selectedItem ? <EditMenuItem item={selectedItem}/> : null}
        </>
    )
}

export default EditMenuItems;