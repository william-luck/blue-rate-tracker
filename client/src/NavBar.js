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
            <NavLink to='/test' >
                Edit Ingredients
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