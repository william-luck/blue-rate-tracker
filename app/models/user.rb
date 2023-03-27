class User < ApplicationRecord

    has_secure_password

    has_many :menus
    has_many :menu_items, through: :menus

end
