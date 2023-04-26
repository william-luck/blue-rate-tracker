import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Login from './components/Login';
import { checkLogin, removeSession } from './reducers/usersSlice';
import { useState } from 'react';
import Dashboard from './components/Dashboard';


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
    <Dashboard/>
    </>
  );
}

export default App;
