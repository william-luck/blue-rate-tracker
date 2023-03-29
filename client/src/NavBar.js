import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
        <div>
            <NavLink to='/' exact>
                Home
            </NavLink>
            {' '}
            <NavLink to='/test' >
                Test
            </NavLink>
            {' '}
            <NavLink to='/edit-products' >
                Edit Products
            </NavLink>
            {' '}
            <NavLink to='/add-menu-item' >
                Add Menu Item
            </NavLink>
            {' '}
            <NavLink to='/edit-menu-items' >
                Edit Menu Items
            </NavLink>
            {' '}
            <NavLink to='/test' >
                Edit Menus
            </NavLink>


        </div>
        </>
    )
}

export default NavBar;