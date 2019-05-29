source 'https://rubygems.org'
ruby ">=2.3.0"
# PostgreSQL driver
gem 'pg', '~> 0.21'

# Sinatra driver
gem 'sinatra', '~>1.4'
gem 'sinatra-contrib'

gem 'activesupport', '~>4.2.2'
gem 'activerecord', '~>4.2.7.1'
gem "activemodel", ">= 4.2.5.1"

gem 'rake'

gem "rack", ">= 1.6.11"
gem "rack-protection", ">= 1.5.5"
gem 'shotgun'
gem 'bcrypt'
gem 'pry'
gem "nokogiri", ">= 1.8.5"
group :test do
  gem 'shoulda-matchers'
  gem 'rack-test'
  gem 'rspec', '~>3.0'
  gem 'capybara'
  gem 'database_cleaner'
  gem 'factory_girl'
  gem 'faker'
end
group :production do
  gem "puma"
end