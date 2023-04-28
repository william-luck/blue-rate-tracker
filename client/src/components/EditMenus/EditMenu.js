import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMenuName } from "../../reducers/menusSlice";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core"

function EditMenu({ name, id, setAlertShow }) {

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

    function handleDelete() {
        setAlertShow({name: name, id: id})
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(editMenuName({id: id, name: menuName}))
        setMenuEditing(false)
    }

    return(
        <>

        <div style={{display: 'inline-block'}}>
        {!menuEditing ? <div style={{display: 'inline-block'}}><Button variant="contained" color="secondary" size='small' onClick={handleDelete}>Delete</Button>{' '}<Button onClick={handleEditClick} variant="contained" color="primary" size='small'>Edit</Button></div> : <div style={{display:'inline-block'}}><Button onClick={handleSubmit}>Save</Button><Button onClick={handleCancel}>Cancel</Button></div>}
        {!menuEditing ? <label>{' '}{name}</label> : <TextField helperText='Enter new name for menu' onChange={handleChange} value={menuName}></TextField> }
        </div>
        <br></br>
        <br></br>

        </>
    )
}

export default EditMenu;