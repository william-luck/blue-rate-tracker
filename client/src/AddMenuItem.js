import { useSelector } from "react-redux";
import { useState } from "react";
import AddIngredientsChecklist from "./AddIngredientsChecklist";


function AddMenuItem() {

    const [selectedIngredients, setSelectedIngredients] = useState([])


    const menus = useSelector(state => state.menus.entities)
    const products = useSelector(state => state.products.entities)

    function handleClick(e) {
        console.log(e.target.name)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    return( 
        <>
         <form onSubmit={handleSubmit}>
            <label>Select a Menu to add Menu Item:</label>
            <select id="menus" name="menus">
                <option value='Unassigned'>Unassigned</option>
                {menus?.map(menu => <option key={menu.name} value={menu.name}>{menu.name}</option>)}
            </select>

            <br></br>

            <label>Select ingredients to use for new menu item:</label>
            <br></br>

            <AddIngredientsChecklist />

        </form>
        </>
    )
   

}

export default AddMenuItem; 