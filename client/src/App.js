import { Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


import MenusContainer from './MenusContainer';
import NavBar from './NavBar';
import Login from './Login';
import EditProducts from './EditProducts';
import AddMenuItem from './AddMenuItem';

import { checkLogin, removeSession } from './usersSlice';
import { useState } from 'react';
import BlueRateValue from './BlueRateValue';
import EditMenuItems from './EditMenuItems';
import EditMenus from './EditMenus';
import Dashboard from './Dashboard/Dashboard';


function App() {

  const user = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [blue, setBlue] = useState('')

  function handleLogout() {
    dispatch(removeSession())
  }

  useEffect(() => {
    dispatch(checkLogin())
    fetch('https://api.bluelytics.com.ar/v2/latest')
      .then(r => r.json())
      .then(data => setBlue({rate: data.blue, updated: data.last_update}))
  },[])

  // If the user entities array is not defined, stay on login page
  if (!user.entities.length > 0) return <Login />
  
  return (
    <>  
    {/* <NavBar />
    <button onClick={handleLogout}>Logout</button>
    { blue ? <BlueRateValue blue={blue}/> : null }
    <Switch>
      
      <Route path='/edit-menus'>
        <EditMenus/>
      </Route>

      <Route path='/edit-products'>
        <EditProducts />
      </Route>

      <Route path='/add-menu-item'>
        <AddMenuItem />
      </Route>

      <Route path='/edit-menu-items'>
        <EditMenuItems />
      </Route> */}

      {/* <Route path='/'>
        <MenusContainer/>
      </Route>

    </Switch> */}
    <Dashboard/>
    </>
  );
}

export default App;
