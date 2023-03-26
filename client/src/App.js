import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'



function App() {

  const [menus, setMenus] = useState([])

  useEffect(() => {
    fetch('/menus')
      .then(r => r.json())
      .then(menus => setMenus(menus))
  }, [])

  

  function calculatePrice(menu_item) {
    let sub_total = menu_item.ingredients.reduce((accum, curr) => accum + curr.price_of_ingredient, 0)
    let rounded_up = Math.ceil( (sub_total * 3) / 10 ) * 10
    return rounded_up
  }


  return (
    <>  
    Breakfast: 
    <ul>
      {menus[0]?.menu_items?.map(item => {
      return <li>{item.name}: {calculatePrice(item)}</li>})
      }
    </ul>

    Breakfast: 
    <ul>
      {menus[1]?.menu_items?.map(item => <li>{item.name}: {calculatePrice(item)}</li>)}
    </ul>

    Breakfast: 
    <ul>
      {menus[2]?.menu_items?.map(item => <li>{item.name}: {calculatePrice(item)}</li>)}
    </ul>
    
    </>
  );
}

export default App;
