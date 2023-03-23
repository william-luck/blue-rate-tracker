# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create user
User.create(name: 'Restaurant Manager', email: 'management@management.com', password: 'blue_rate')

price_data = [
    {
        name: 'salt', 
        price: 220, 
    }, 
    {
        name: 'butter', 
        price: 2000,
    }, 
    {
        name: 'eggs', 
        price: 520,
    }, 
    {
        name: 'olive oil', 
        price: 2800,
    }, 
    {
        name: 'rice', 
        price: 400,
    }, 
    {
        name: 'bread', 
        price: 1400,
    }, 
    {
        name: 'oregano', 
        price: 4840,
    }, 
    {
        name: 'chicken breast', 
        price: 2000,
    }, 
    {
        name: 'bell pepper', 
        price: 350,
    }, 
    {
        name: 'tomato', 
        price: 490,
    }, 
    {
        name: 'onion', 
        price: 190,
    }, 
    {
        name: 'scallion', 
        price: 2000,
    }, 
    {
        name: 'soy sauce', 
        price: 1000,
    }, 
    {
        name: 'Flour', 
        price: 160,
    }, 
    {
        name: 'milk', 
        price: 350,
    }, 
    {
        name: 'potato', 
        price: 190,
    }, 
    {
        name: 'avocado', 
        price: 2600,
    }, 
    {
        name: 'garlic', 
        price: 1300,
    }, 
    {
        name: 'lettuce', 
        price: 1250,
    }, 
    {
        name: 'mushroom', 
        price: 250,
    }, 
    {
        name: 'lemon juice', 
        price: 540,
    }, 
    {
        name: 'simple syrup', 
        price: 1500,
    }, 
    {
        name: 'whiskey', 
        price: 6600,
    }, 
    {
        name: 'vodka', 
        price: 2000,
    }, 
    {
        name: 'blue curacao', 
        price: 10000,
    }, 
    {
        name: 'lemonade', 
        price: 1000,
    }, 
    {
        name: 'gin', 
        price: 6000,
    }, 
    {
        name: 'rum', 
        price: 4000,
    }, 
    {
        name: 'triple sec', 
        price: 8000,
    }, 
    {
        name: 'tequilla', 
        price: 9000,
    }, 
    {
        name: 'tonic', 
        price: 300,
    }, 
    {
        name: 'bitters', 
        price: 5000,
    }, 
]

# Create products
price_data.each { |product| 
    new_prouct = Product.create(
                    name: product[:name],
                    price: product[:price]
                )    
}

# Create name of MenuItem
# roasted_red = MenuItem.create

