class User < ApplicationRecord

  validates :phone, format: { with: /\A(\+?7?|8)(\(?9\d{2}\)?\d{7})\z/,
                              message: 'Неправильный формат номера телефона' },
                    uniqueness: { message: 'Этот номер уже используется' }

end
