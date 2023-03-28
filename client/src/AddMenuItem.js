import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddIngredientsChecklist from "./AddIngredientsChecklist";
import AddMenuToMenuItem from "./AddMenuToMenuItem";
import AddQuantities from "./AddQuantities";

import { assignName } from "./ingredientsSlice";


function AddMenuItem() {


    const dispatch = useDispatch()
    const name = useSelector(state => state.ingredientsSelected.name)
    const pendingData = useSelector(state => state.ingredientsSelected)

    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
    }

    return( 
        <>
        {!submitted ? 
        
         <form onSubmit={handleSubmit}> 
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
        </div>

        }
        </>
    )
   

}

export default AddMenuItem; 