import { Route, Switch} from 'react-router-dom';
import { useState } from 'react';


import MenusContainer from './MenusContainer';
import NavBar from './NavBar';
import Login from './Login';


function App() {

  const [user, setUser] = useState('')

  if (!user) return <Login setUser={setUser} />
  
  return (
    <>  
    <NavBar />
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
