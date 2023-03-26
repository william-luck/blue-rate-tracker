import { Route, Switch} from 'react-router-dom';

import MenusContainer from './MenusContainer';
import NavBar from './NavBar';


function App() {

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
