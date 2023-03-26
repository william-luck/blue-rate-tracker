import MenusContainer from './MenusContainer';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <>  
    <Switch>
      <Route exact path='/'>
        <MenusContainer/>
      </Route>
      <Route path='/test'>
        Test
      </Route>
    </Switch>
    </>
  );
}

export default App;
