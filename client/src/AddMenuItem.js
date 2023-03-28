import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddIngredientsChecklist from "./AddIngredientsChecklist";
import AddMenuToMenuItem from "./AddMenuToMenuItem";
import AddQuantities from "./AddQuantities";

import { assignName } from "./ingredientsSlice";
import { addMenuItem } from "./menuItemsSlice";


function AddMenuItem() {


    const dispatch = useDispatch()
    const name = useSelector(state => state.ingredientsSelected.name)
    const pendingData = useSelector(state => state.ingredientsSelected)

    const [submitted, setSubmitted] = useState(false)

    function handleInitialSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
    }

    function handleMenuItemSubmit() {
        // Dispatch to menu item reducer, async call to menu_item controller
        dispatch(addMenuItem(pendingData))

    }

    return( 
        <>
        {!submitted ? 
        
         <form onSubmit={handleInitialSubmit}> 
            <label>Enter name for new menu item:</label>
            <input value={name} onChange={e => dispatch(assignName(e.target.value))}/>
            <br></br>
            <AddMenuToMenuItem />
            <br></br>
            <AddIngredientsChecklist />
            <br></br>
            <button type="submit">Finished, proceed to enter quantities</button>
        </form>

        :
        <div>
            <p>You are adding {pendingData.name} to the {pendingData.menu} menu.</p>
            <p>Please enter the quantities of each ingredient to be used in {pendingData.name}</p>
            <AddQuantities/>

            <p>A price will automatically be calculated from the above ingredients and quantities.</p>
            <button onClick={handleMenuItemSubmit}>Add Menu Item</button>
        </div>

        }
        </>
    )
   

}

export default AddMenuItem; 