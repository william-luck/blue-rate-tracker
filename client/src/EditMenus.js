import { useSelector } from "react-redux";
import EditMenu from "./EditMenu";


function EditMenus() {

    const menus = useSelector(state => state.menus.entities)
            
        


    return(
        <>
        {menus?.map(menu => <EditMenu name={menu.name} id={menu.id}/>)}
        </>
    )
}

export default EditMenus;