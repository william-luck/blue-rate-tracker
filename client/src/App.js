import { Route, Switch} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import MenusContainer from './MenusContainer';
import NavBar from './NavBar';
import Login from './Login';

import { removeSession } from './usersSlice';


function App() {

  const user = useSelector(state => state.users)
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(removeSession())
  }

  // If the user entities array is not defined, stay on login page
  if (!user.entities.length > 0) return <Login />
  
  return (
    <>  
    <NavBar />
    <button onClick={handleLogout}>Logout</button>
    <Switch>
      
      <Route path='/test'>
        Test
      </Route>

      <Route path='/'>
        <MenusContainer/>
      </Route>

    </Switch>
    </>
  );
}

export default App;
