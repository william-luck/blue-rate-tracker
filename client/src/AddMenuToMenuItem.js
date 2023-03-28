import { useSelector, useDispatch } from "react-redux";
import { assignMenu } from "./ingredientsSlice";

function AddMenuToMenuItem() {

    const menus = useSelector(state => state.menus.entities)
    const dispatch = useDispatch()

    function handleChange(e) {
        dispatch(assignMenu(e.target.value))
    }

    return (
        <>
        <label>Select a Menu to add Menu Item:</label>
        <select id="menus" name="menus" onChange={handleChange}>
            <option value=''>Unassigned</option>
            {menus?.map(menu => <option key={menu.name} value={menu.name}>{menu.name}</option>)}
        </select>
        </>
    )
}

export default AddMenuToMenuItem;