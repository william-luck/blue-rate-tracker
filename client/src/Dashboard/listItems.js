import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


export const mainListItems = (
  <div>
    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/' exact>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </NavLink>

    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/edit-products'>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Products"/>
    </ListItem>
    </NavLink>

    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/edit-menu-items'>
    <ListItem button>
      <ListItemIcon>
      <RestaurantMenuIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Menu Items" />
    </ListItem>
    </NavLink>

    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/add-menu-item'>
    <ListItem button>
      <ListItemIcon>
        <MenuOpenIcon />
      </ListItemIcon>
      <ListItemText primary="Add Menu Item" />
    </ListItem>
    </NavLink>

    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/edit-menus'>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Menus" />
    </ListItem>
    </NavLink>
  </div>
);