
import EditIngredient from "./EditIngredient";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { reassignMenu } from "./menuItemsSlice";



function EditMenuItem({ item }) {

    const [menuEditing, setMenuEditing] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState(item.menu.name)

    const menus = useSelector(state => state.menus.entities)

    const dispatch = useDispatch()

    // Resets editing state if different menu item  is selected from parent dropdown
    useEffect(() => {
        setMenuEditing(false)
        setSelectedMenu(item.menu.name)
    },[item])

    function handleSubmit(e) {
        e.preventDefault()
        const menuId = menus.find(menu => menu.name === selectedMenu).id
        dispatch(reassignMenu({
            item_id: item.id,
            menu_id: menuId
        }))
        
    }

    function handleEditClick() {
        setMenuEditing(true)
    }

    function handleEditMenu(e) {
        setSelectedMenu(e.target.value)
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
        <h1>{item.name}</h1>

                <label>Menu: {!menuEditing ? item.menu.name : menuDropDown()} </label>
                {!menuEditing ? <button onClick={handleEditClick}>Edit</button> : <button onClick={handleSubmit}>Reassign</button>}
            <br></br>
        
            {item.ingredients?.map(ingredient => <EditIngredient ingredient={ingredient} key={ingredient.id}/>)}

        </>
    )

}

export default EditMenuItem; 