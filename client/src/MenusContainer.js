import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "./menusSlice";
import Menu from "./Menu";


function MenusContainer() {

    const dispatch = useDispatch()
    const menus = useSelector(state => state.menus.entities)

    // Retrieve menus with nested menu items
    useEffect(() => {
        dispatch(fetchMenus())
      }, [dispatch])

    return (
        <>
        {menus?.map(menu => <Menu menu={menu} key={menu.name}/>)}
        </>
    )
}

export default MenusContainer;



