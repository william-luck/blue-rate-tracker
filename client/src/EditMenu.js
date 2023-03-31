import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editMenuName } from "./menusSlice";

function EditMenu({ name, id }) {

    const [menuEditing, setMenuEditing] = useState(false)
    const [menuName, setMenuName] = useState(name)

    const dispatch = useDispatch()

    function handleEditClick(){
        setMenuEditing(true)
    }

    function handleChange(e) {
        setMenuName(e.target.value)
    }

    function handleCancel(){
        setMenuEditing(false)
        setMenuName(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(editMenuName({id: id, name: menuName}))
        setMenuEditing(false)
    }

    return(
        <>
        <label>Menu Name: {!menuEditing ? name : <input value={menuName} onChange={handleChange}/>} </label>
        {!menuEditing ? <button onClick={handleEditClick}>Edit</button> : <div style={{display:'inline-block'}}><button onClick={handleSubmit}>Save</button><button onClick={handleCancel}>Cancel</button></div>}
        <br></br>
        <br></br>
        </>
    )
}

export default EditMenu;