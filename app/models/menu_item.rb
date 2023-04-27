class MenuItem < ApplicationRecord

    validates :name, presence: true

    has_many :ingredients, dependent: :destroy
    has_many :products, through: :ingredients

    belongs_to :menu, optional: true
end
