import { MenuItem, TextField, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { assignMenu } from "./ingredientsSlice";

function AddMenuToMenuItem() {

    const menus = useSelector(state => state.menus.entities)
    const selectedMenu = useSelector(state => state.ingredientsSelected.menu)
    const dispatch = useDispatch()

    function handleChange(e) {
        dispatch(assignMenu(e.target.value))
    }

    return (
        <div>
        <TextField select id="menus" name="menus" onChange={handleChange} label="Select a menu for the new menu item" style={{width: "50ch"}} value={selectedMenu}>
            {menus?.map(menu => <MenuItem key={menu.name} value={menu.name}>{menu.name}</MenuItem>)}
        </TextField>
        </div>
    )
}

export default AddMenuToMenuItem;