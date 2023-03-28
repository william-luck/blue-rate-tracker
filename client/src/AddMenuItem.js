import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddIngredientsChecklist from "./AddIngredientsChecklist";
import AddMenuToMenuItem from "./AddMenuToMenuItem";
import { assignName } from "./ingredientsSlice";


function AddMenuItem() {


    const dispatch = useDispatch()
    const name = useSelector(state => state.ingredientsSelected.name)

    return( 
        <>
         <form>
            <label>Enter name for new menu item:</label>
            <input value={name} onChange={e => dispatch(assignName(e.target.value))}/>
            <AddMenuToMenuItem />
            <AddIngredientsChecklist />

        </form>
        </>
    )
   

}

export default AddMenuItem; 