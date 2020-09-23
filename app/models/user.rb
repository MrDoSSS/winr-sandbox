# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :phone, format: { with: /\A(\+?7?|8)(\(?9\d{2}\)?\d{7})\z/,
                              message: 'Неправильный формат номера телефона' },
                    uniqueness: { message: 'Этот номер уже используется' }
end
