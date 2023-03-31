import { useSelector, useDispatch } from "react-redux";
import EditMenu from "./EditMenu";
import { useState } from "react";
import { addMenu } from "./menusSlice";
import { useEffect } from "react";


function EditMenus() {

    const menus = useSelector(state => state.menus.entities)
    const user = useSelector(state => state.users.entities[0].id)

    const [newMenuName, setNewMenuName] = useState('')

    const dispatch = useDispatch()
    

    function handleChange(e) {
        setNewMenuName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addMenu({name: newMenuName, user_id: user}))
        setNewMenuName('')
    }
            
        


    return(
        <>
        {menus?.map(menu => <EditMenu name={menu.name} id={menu.id}/>)}

        <br></br>

        Create menu? 
        <br></br>

        <label>New Menu Name:</label>
        <input onChange={handleChange} value={newMenuName}></input><button onClick={handleSubmit}>Add</button>
        </>
    )
}

export default EditMenus;