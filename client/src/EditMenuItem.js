
import EditIngredient from "./EditIngredient";
import { useState } from "react";
import { useSelector } from "react-redux";



function EditMenuItem({ item }) {

    const [menuEditing, setMenuEditing] = useState(false)

    const menus = useSelector(state => state.menus.entities)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    function handleEditClick() {
        setMenuEditing(true)
    }

    function menuDropDown() {
        return(
            <select>    
                {menus.map(menu => <option key={menu.id} value={menu.id} name='menu_id'>{menu.name}</option>)}
            </select>
        )
    }



    

    return(
        <>
        <h1>{item.name}</h1>

            <form>
                <label>Menu: </label>
                {!menuEditing ? 'test' : menuDropDown()}
                {!menuEditing ? <button onClick={handleEditClick}>Edit</button> : <button type="submit">Reassign</button>}
            </form>
            <br></br>
        
            {item.ingredients?.map(ingredient => <EditIngredient ingredient={ingredient} key={ingredient.id}/>)}

        </>
    )

}

export default EditMenuItem; 