# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.find_by(product_id: "76").update(customer_purchase_available: true)
Product.find_by(product_id: "78").update(customer_purchase_available: true)
Product.find_by(product_id: "8").update(customer_purchase_available: true)

ProductRel.create(upper_product_id: '17', lower_product_id: '33', start_date: Date.today, end_date: Date.parse('20230228'))
