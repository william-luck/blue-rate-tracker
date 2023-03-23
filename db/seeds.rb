# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create user
user = User.create(name: 'Restaurant Manager', email: 'management@management.com', password: 'blue_rate')

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
        name: 'egg', 
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
        name: 'flour', 
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
    {
        name: 'coca cola', 
        price: 400,
    }, 
]

# Create products
price_data.each { |product| 
    Product.create(
        name: product[:name],
        price: product[:price]
    )    
}

# Create menus
starters_menu = Menu.create(user_id: user.id, name: 'Starters')
main_menu = Menu.create(user_id: user.id, name: 'Main Dishes')
cocktail_menu = Menu.create(user_id: user.id, name: 'Cocktails')


# Create name of MenuItem
# roasted_red = MenuItem.create(
#     name: 'Roasted Red Pepper and Tomato Soup'
# )
#     Ingredient.create(
#         product_id: 9,
#         menu_item_id: roasted_red.id,
#         quantity: 250,
#     )

menu_items = [
    {
        name: 'Roasted Red Pepper and Tomato Soup', 
        menu_id: starters_menu.id,
        ingredients: [
            {
                name: 'bell pepper',
                quantity: 0.250
            },
            {
                name: 'onion',
                quantity: 0.150
            },
            {
                name: 'tomato',
                quantity: 0.400,
            },
            {
                name: 'potato',
                quantity: 0.150
            },
            {
                name: 'olive oil',
                quantity: 0.045
            },
            {
                name: 'garlic',
                quantity: 0.007
            },
            {
                name: 'salt',
                quantity: 0.002
            },
            {
                name: 'oregano',
                quantity: 0.006
            },
        ]
    },
    {
        name: 'Veggie Kebabs, Guacamole, and Salad', 
        menu_id: starters_menu.id,
        ingredients: [
            {
                name: "avocado",
                quantity: 0.200
            },
            {
                name: "tomato",
                quantity: 0.100
            },
            {
                name: "lemon juice",
                quantity: 0.022
            },
            {
                name: "mushroom",
                quantity: 0.250
            },
            {
                name: "bread",
                quantity: 0.070
            },
            {
                name: "onion",
                quantity: 0.150
            },
            {
                name: "bell pepper",
                quantity: 0.150
            }
        ]
    },
    {
        name: "Southern Tomato Gravy",
        menu_id: starters_menu.id,
        ingredients: [
            {
                name: 'butter',
                quantity: 0.028,
            },
            {
                name: 'onion',
                quantity: 0.026,
            },
            {
                name: 'garlic',
                quantity: 0.007,
            },
            {
                name: 'flour',
                quantity: 0.021,
            },
            {
                name: 'tomato',
                quantity: 0.300,
            },
            {
                name: 'milk',
                quantity: 0.237,
            }
        ]
    },
    {
        name: "Spring Onion Soup",
        menu_id: starters_menu.id,
        ingredients: [
            {
                name: 'scallion',
                quantity: 0.025,
            },
            {
                name: 'onion',
                quantity: 0.150,
            },
            {
                name: 'potato',
                quantity: 0.170,
            },
            {
                name: 'garlic',
                quantity: 0.007,
            },
            {
                name: 'butter',
                quantity: 0.014,
            },
            {
                name: 'lemon juice',
                quantity: 0.005,
            },
            {
                name: 'salt',
                quantity: 0.005,
            }
        ]
    },
    {
        name: "Avocado Toast",
        menu_id: starters_menu.id,
        ingredients: [
            {
                name: 'bread',
                quantity: 0.135,
            },
            {
                name: 'avocado',
                quantity: 0.200,
            },
            {
                name: 'onion',
                quantity: 0.150,
            },
            {
                name: 'tomato',
                quantity: 0.150,
            },
            {
                name: 'salt',
                quantity: 0.005,
            },
            {
                name: 'lemon juice',
                quantity: 0.005,
            },
            {
                name: 'butter',
                quantity: 0.015,
            }
        ]
    },
    {
        name: "Sunday Morning Breakfast Hash",
        menu_id: main_menu.id,
        ingredients: [
            {
                name: 'olive oil',
                quantity: 0.045,
            },
            {
                name: 'potato',
                quantity: 0.400,
            },
            {
                name: 'egg',
                # Refers to half a dozen
                quantity: 0.5,
            },
            {
                name: 'bell pepper',
                quantity: 0.100,
            },
            {
                name: 'onion',
                quantity: 0.150,
            },
            {
                name: 'avocado',
                quantity: 0.200,
            },
            {
                name: 'tomato',
                quantity: 0.100,
            },
            {
                name: 'salt',
                quantity: 0.005,
            },
        ]
    },
    {
        name: "Chicken Souvlaki",
        menu_id: main_menu.id,
        ingredients: [
            {
                name: 'lemon juice',
                quantity: 0.045,
            },
            {
                name: 'olive oil',
                quantity: 0.078,
            },
            {
                name: 'soy sauce',
                quantity: 0.059,
            },
            {
                name: 'oregano',
                quantity: 0.005,
            },
            {
                name: 'garlic',
                quantity: 0.021,
            },
            {
                name: 'chicken breast',
                quantity: 0.500,
            },
            {
                name: 'onion',
                quantity: 0.150,
            }
        ]
    },
    {
        name: "Hibachi-style Fried Rice",
        menu_id: main_menu.id,
        ingredients: [
            {
                name: 'olive oil',
                quantity: 0.060,
            },
            {
                name: 'egg',
                quantity: 0.166,
            },
            {
                name: 'chicken breast',
                quantity: 0.140,
            },
            {
                name: 'scallion',
                quantity: 0.050,
            },
            {
                name: 'garlic',
                quantity: 0.017,
            },
            {
                name: 'rice',
                quantity: 0.400,
            },
            {
                name: 'soy sauce',
                quantity: 0.044,
            }
        ]
    },
    {
        name: "Guacamole Egg Salad Sandwich",
        menu_id: main_menu.id,
        ingredients: [
            {
                name: 'bread',
                quantity: 0.130,
            },
            {
                name: 'butter',
                quantity: 0.028,
            },
            {
                name: 'egg',
                quantity: 0.166,
            },
            {
                name: 'salt',
                quantity: 0.005,
            },
            {
                name: 'avocado',
                quantity: 0.140,
            },
            {
                name: 'lemon juice',
                quantity: 0.010,
            },
            {
                name: 'tomato',
                quantity: 0.013,
            },
            {
                name: 'onion',
                quantity: 0.005,
            }
        ]
    },
    {
        name: "Baked Lemon Chicken",
        menu_id: main_menu.id,
        ingredients: [
            {
                name: 'butter',
                quantity: 0.113,
            },
            {
                name: 'chicken breast',
                quantity: 0.400,
            },
            {
                name: 'flour',
                quantity: 0.070,
            },
            {
                name: 'lemon juice',
                quantity: 0.078,
            },
            {
                name: 'onion',
                quantity: 0.010,
            },
            {
                name: 'garlic',
                quantity: 0.007,
            },
            {
                name: 'salt',
                quantity: 0.005,
            }
        ]
    },
    {
        name: "Whiskey Sour",
        menu_id: cocktail_menu.id,
        ingredients: [
            {
                name: 'simple syrup',
                quantity: 0.022,
            },
            {
                name: 'lemon juice',
                quantity: 0.022,
            },
            {
                name: 'whiskey',
                quantity: 0.060,
            },
            {
                name: 'egg',
                quantity: 0.08,
            }
        ]
    },
    {
        name: "Vodka Sour",
        menu_id: cocktail_menu.id,
        ingredients: [
            {
                name: 'simple syrup',
                quantity: 0.022,
            },
            {
                name: 'lemon juice',
                quantity: 0.022,
            },
            {
                name: 'vodka',
                quantity: 0.060,
            },
            {
                name: 'egg',
                quantity: 0.08,
            }
        ]
    },
    {
        name: "Old Fashioned",
        menu_id: cocktail_menu.id,
        ingredients: [
            {
                name: 'simple syrup',
                quantity: 0.015,
            },
            {
                name: 'bitters',
                quantity: 0.002,
            },
            {
                name: 'whiskey',
                quantity: 0.060,
            }
        ]
    },
    {
        name: "Texas Tea",
        menu_id: cocktail_menu.id,
        ingredients: [
            {
                name: 'vodka',
                quantity: 0.030,
            },
            {
                name: 'gin',
                quantity: 0.030,
            },
            {
                name: 'rum',
                quantity: 0.030,
            },
            {
                name: 'triple sec',
                quantity: 0.030,
            },
            {
                name: 'simple syrup',
                quantity: 0.022,
            },
            {
                name: 'tequilla',
                quantity: 0.022,
            },
            {
                name: 'coca cola',
                quantity: 0.200,
            }
        ]
    },
    {
        name: "Blue Lagoon",
        menu_id: cocktail_menu.id,
        ingredients: [
            {
                name: 'blue curacao',
                quantity: 0.030,
            },
            {
                name: 'vodka',
                quantity: 0.030,
            },
            {
                name: 'lemonade',
                quantity: 0.120,
            }
        ]
    },
]

menu_items.each { |menu_item| 

    created_item = MenuItem.create(
        menu_id: menu_item[:menu_id],
        name: menu_item[:name]
    )

    menu_item[:ingredients].each{ |ingredient| 

        matching_product = Product.find_by(name: ingredient[:name])
        Ingredient.create(
            product_id: matching_product.id,
            menu_item_id: created_item.id,
            quantity: ingredient[:quantity]
        )
    }
}

