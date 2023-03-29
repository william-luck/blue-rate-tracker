import { useState } from "react";
import EditIngredient from "./EditIngredient";


function EditMenuItem({ item }) {

    

    return(
        <>
        <h1>{item.name}</h1>
        
            {item.ingredients?.map(ingredient => <EditIngredient ingredient={ingredient}/>)}

        </>
    )

}

export default EditMenuItem; 