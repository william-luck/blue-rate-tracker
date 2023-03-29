import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import EditMenuItem from "./EditMenuItem";


function EditMenuItems() {

    const [selectedItem, setSelectedItem] = useState('')

    let menuItems = useSelector(state => {
        return state.menus.entities.map(menu => menu.menu_items).flat(2)
        
    })

    function handleChange(e) {
        const item = menuItems.find(menuItem => menuItem.id == e.target.value)
        setSelectedItem(item)
    }

    return (
        <>
        <label>Select a menu Item to edit: </label>
        <select id='menuItem' name='menuItem' onChange={handleChange}>
            <option value=''>None</option>
            {menuItems?.map(menuItem => {
            return <option key={menuItem.id} value={menuItem.id}>{menuItem.name}</option>
            })}
        </select>

        {selectedItem ? <EditMenuItem item={selectedItem}/> : null}
        </>
    )
}

export default EditMenuItems;