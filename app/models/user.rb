class User < ApplicationRecord
  before_save { self.email = email.downcase }

  validates :name, :email, :password, presence: true
  validates :name, length: { maximum: 50 }
  validates :password, length: { minimum: 6 }
  validates :email, length: { maximum: 255 }, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: { case_sensitive: false }

  has_secure_password
end
