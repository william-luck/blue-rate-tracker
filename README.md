# Blue Rate Tracker

  
This app was developed for restaurants to keep track of the latest changes in the Blue Dollar Rate in Argentina, and update their menus accordingly. It also helps businesses price any new items added to their menus, depending on the ingredients used.

## Installation

To start this application, fork and clone this repository. Begin by typing  `bundle install`  in the console. Then input the following commands in the console:

-   `rails db:migrate`
-   `rails db:seed`
-   `rails server`

Keep the server running in a separate console session. Type  `npm install`  and  `npm start --prefix client`  in the console to start the application.

When opening the app, login with the following credentials: 

**Email**: management@management.com  **Password:** blue_rate

This project is also live at https://blue-rate-tracker.onrender.com/

# Functionality

Every weekday at 6:00 AM Argentina Standard Time (9:00 AM UTC), the application makes a call to a public blue rate API to determine any changes needed to menu items. If a change in the blue rate is detected, the database updates all menu items to reflect the rise in the blue rate. For example, if the blue rate has increased 5% overnight, all menu items will  be updated with a 5% increase in price, as well as the raw cost of all ingredients that comprise that menu item.  

## Pricing of Menu Items

The application recommends default pricing using a price ratio assigned to each menu item. The default price ratio for each menu item is 3.0. The application recommends a price by summing the raw cost of each ingredient, according to the quantity used of each ingredient, multiplied by a default 3.0, then rounded to the nearest 10 ARS. 

The user can override the recommended price, which will change the price ratio for that item. This price ratio persists across the daily database updates, as the price ratio is only used to calculate a price for the item. As such, the morning database refreshes account for the user's custom pricing and any changes to the blue rate.

## Application Overview and Features

### Home page

The home page contains a summary of each menu item with their price, disaggregated by menu. The user can select a menu, and the menu's items and prices will be displayed below. The home page also indicates if there are any custom pricing for items applied. The home page also displays the most updated blue rate. 

### Edit Products 

Products are separate from ingredients. Products contain the data needed to calculate the price of each menu item, and each product has a price per one kilogram or per one liter. The price of each product is contained in the seed file.  Products do not become ingredients until they are used in a menu item. 

This page lists all products in the database with their price according to their unit, and the user can amend the price manually of any product. Doing so will also change the price of any menu items that contain those products as ingredients. Users also have the option to add a new product, with the product's base price. 

### Edit Menu Items 

This page contains everything needed to change any information about a menu item, including the name, the assigned menu, ingredients used, and a manual override of price. Along with the manual override of the total price, users can edit the quantities of the ingredients used, which will automatically update the price of the item, according to the default or custom pricing set by the user. 

As necessary, the user can un-assign the menu item from a menu altogether. This will not delete the menu item from the database, but it is up to the user to re-assign the item to a menu to appear on the home page. This is useful if a user wishes to temporarily remove items from their menus from the home page, but still wish the item to remain in the database to be added back to a menu at a later date. 

Users can also delete the menu item, which will delete all the ingredients used in the menu item. This deletion is permanent, until the user adds the menu item back to the database, as below. 

### Add Menu Item 

Users are presented with a four-step process for adding a menu item, including a name for the menu item, an assigned menu, ingredients used, and their quantities. All four steps, except for assigning a menu, are recommended for a full functionality of calculating a recommended a price. However, the only required step and validation present is the menu item name. The user can omit the rest of the steps, and add further detail in the "Edit Menu Item" tab, as needed. If the user does not provide a menu item name, the new item will not be created nor saved to the database.  

### Edit Menus 

This page contains functionality to create menus, edit menu names, and remove menus. 

Creating a menu will have that menu displayed on the home page, but the menu will have no menu items until the user either re-assigns an item to that menu, or adds a new item to the menu.

Removing a menu will remove the menu from the home page, as well as remove the associations between the menu items and the menu itself. The menu items will not be deleted, only the associations. The menu items previously assigned to the menu will persist, but it is up to the user to reassign those items to a new menu as needed, through the "Edit Menu Items" tab. When the user clicks on delete menu, the user is presented with a warning message summarizing the above information, the user can either continue or cancel. 

## ERD

![ERD](https://i.ibb.co/jvXJ2wY/Screen-Shot-2023-04-28-at-11-09-48-AM.png)

## Expansion 

I created this project for my capstone project as part of Flatiron's software engineering flex program, but I can imagine additional features going forward, which I will continue to work on after completion of the program to add more to my portfolio.

New features include: 

 - An ability to download PDF menus, using PDFmake.
 - Permit price increases only if price increases by xx amount. For example, it may not be useful for businesses to go through the trouble of changing their menus if the price of menu items has only increased by 20 ARS (approximately $0.04 USD at the time of writing). 
 - Custom default price ratios, recommended by neighborhood of Buenos Aires. 
 - An expanded list of products to be used as ingredients by default.
 - Multiple accounts, each with their own menus and menu items. 
 - Alert notifications of any substantial blue rate changes, and associated change in pricing.