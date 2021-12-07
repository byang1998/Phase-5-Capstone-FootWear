class User < ApplicationRecord
    has_many :shoes
    has_many :databases, through: :shoes
    has_many :logs, through: :shoes
    
    has_secure_password
    validates :username, uniqueness: {case_sensitive: false}
end
